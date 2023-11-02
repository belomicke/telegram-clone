<?php

namespace App\Actions\Chat;

use App\Models\Chat;
use Illuminate\Support\Facades\Auth;

class ChatToJsonAction
{
    public function handle(Chat $chat): array
    {
        $viewer = Auth::guard('sanctum')->user();

        $user = $chat->members->where('id', '!=', $viewer->id)->first();

        $lastMessage = $chat->messages()->orderBy('id', 'desc')->first();

        $id = $chat->members()->count() === 1 ? $viewer->id : $user->id;
        $title = $chat->members()->count() === 1 ? 'Избранное' : $user->name;
        $cover = $chat->members()->count() === 1 ? $viewer->avatar : $user->avatar;

        return [
            'id' => $id,
            'title' => $title,
            'cover' => $cover,
            'feed' => [
                'messages' => [$lastMessage],
                'hasNextPage' => $chat->messages()->count() > 1,
                'total' => $chat->messages()->count()
            ],
            'updated_at' => $chat->updated_at,
            'type' => 'private',
        ];
    }
}
