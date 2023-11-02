<?php

namespace App\Actions\Chat;

use App\Models\Chat;
use Illuminate\Support\Facades\Auth;

class CreatePrivateChatAction
{
    public function handle(int $user_id): Chat
    {
        $createdChat = Chat::create();
        $createdChat = $createdChat->fresh();
        $createdChat->members()->attach($user_id);
        $createdChat->members()->attach(Auth::guard('sanctum')->id());

        return $createdChat;
    }
}
