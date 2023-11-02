<?php

namespace App\Helpers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class ViewerHelpers
{
    public static function usernameIsValid (string $username): bool
    {
        return preg_match("/^[a-zA-Z0-9]+$/", $username);
    }

    public static function getFormattedUsername (string $username): string
    {
        $result = '';

        foreach(str_split($username) as $char) {
            if ($char !== '') {
                $result .= strtolower($char);
            }
        }

        return $result;
    }

    public static function hasChatWithUser (int $user_id): bool
    {
        if (auth()->id() === $user_id) return true;

        $count = Auth::guard('sanctum')
            ->user()
            ->chats()
            ->whereHas('members', function (Builder $query) use ($user_id) {
                $query->where('user_id', $user_id);
            })
            ->whereHas('members', function (Builder $query) use ($user_id) {
                $query->where('user_id', auth()->id());
            })
            ->count();

        return $count === 1;
    }
}
