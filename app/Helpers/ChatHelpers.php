<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Auth;

class ChatHelpers
{
    public static function getPrivateChatChannel (int $userId): string
    {
        $viewerId = Auth::guard('sanctum')->id();

        if ($viewerId > $userId) {
            return 'private.' . $viewerId . '.' . $userId;
        } else {
            return 'private.' . $userId . '.' . $viewerId;
        }
    }
}
