<?php

namespace App\Actions\Chat;

use App\Models\Chat;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class GetPrivateChatByUserIdAction
{
    public function handle(int $id): Chat|null
    {
        $chats = Auth::guard('sanctum')->user()->chats();

        return $chats->whereHas('members', function (Builder $query) use ($id) {
            $query->where('user_id', $id);
        })->first();
    }
}
