<?php

namespace App\Http\Controllers\Feed;

use App\Actions\Chat\ChatToJsonAction;
use App\Actions\Chat\GetViewerChatsAction;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;

class GetViewerChats extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(
        Request $request,
        ChatToJsonAction $chatToJsonAction,
        GetViewerChatsAction $getViewerChatsAction
    ): JsonResponse
    {
        $chats = $getViewerChatsAction->handle();

        $result = [];

        foreach($chats as $chat) {
            $result[] = $chatToJsonAction->handle($chat);
        }

        return response()->json([
            'success' => true,
            'chats' => $result
        ]);
    }
}
