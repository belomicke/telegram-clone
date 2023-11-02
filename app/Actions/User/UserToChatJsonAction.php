<?php

namespace App\Actions\User;

use App\Models\User;

class UserToChatJsonAction
{
    public function handle(User $user): array
    {
        return [
            'id' => $user->id,
            'title' => $user->name,
            'cover' => $user->avatar,
            'feed' => [
                'messages' => [],
                'hasNextPage' => false,
                'total' => 0
            ],
            'type' => 'private',
        ];
    }
}
