<?php

namespace App\Actions\Chat;

use Illuminate\Support\Facades\Auth;

class GetViewerChatsAction
{
    public function handle()
    {
        $viewer = Auth::guard('sanctum')->user();

        $chats = $viewer->chats()->get();

        return $chats->sortBy(
            callback: function ($chat) {
                return $chat->last_message->created_at;
            },
            descending: true
        );
    }
}
