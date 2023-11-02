<?php

namespace App\Http\Controllers\Feed;

use App\Actions\Chat\GetPrivateChatByUserIdAction;
use App\Actions\Chat\GetSavedChatAction;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GetChatMessagesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(
        User $user,
        Request $request,
        GetPrivateChatByUserIdAction $getPrivateChatByUserIdAction,
        GetSavedChatAction $getSavedChatAction
    ): JsonResponse
    {
        $offset = $request->input('offset');
        $limit = $request->input('limit');

        if ($user->id === auth('sanctum')->id()) {
            $chat = $getSavedChatAction->handle();
        } else {
            $chat = $getPrivateChatByUserIdAction->handle($user->id);
        }

        $messages = $chat->messages()->skip($offset)->take($limit)->get();

        $total = $chat->messages()->count();
        $hasNextPage = $offset + $limit < $total;

        return response()->json([
            'success' => true,
            'result' => [
                'messages' => $messages,
                'hasNextPage' => $hasNextPage,
                'total' => $total
            ]
        ]);
    }
}
