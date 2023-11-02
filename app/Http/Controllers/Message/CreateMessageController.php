<?php

namespace App\Http\Controllers\Message;

use App\Actions\Chat\CreatePrivateChatAction;
use App\Actions\Chat\GetPrivateChatByUserIdAction;
use App\Actions\Chat\GetSavedChatAction;
use App\Actions\Message\CreateMessageAction;
use App\Events\CreateMessageEvent;
use App\Events\NewChatEvent;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CreateMessageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(
        Request $request,
        CreateMessageAction $createMessageAction,
        CreatePrivateChatAction $createPrivateChatAction,
        GetPrivateChatByUserIdAction $getPrivateChatByUserIdAction,
        GetSavedChatAction $getSavedChatAction
    ): JsonResponse
    {
        $user_id = $request->input('user_id');
        $message = $request->input('message');

        if ($user_id === auth('sanctum')->id()) {
            $chat = $getSavedChatAction->handle();
        } else {
            $chat = $getPrivateChatByUserIdAction->handle($user_id);
        }

        $createdMessage = $createMessageAction->handle($message);

        if (!$chat) {
            $createdChat = $createPrivateChatAction->handle($user_id);
            $createdChat->messages()->attach($createdMessage);

            event(new NewChatEvent($user_id, $createdMessage));
        } else {
            $chat->messages()->attach($createdMessage);
        }

        $chat->updated_at = now();
        $chat->save();
        event(new CreateMessageEvent($user_id, $createdMessage));

        return response()->json([
            'success' => true,
            'message' => $createdMessage->fresh()
        ]);
    }
}
