<?php

namespace App\Actions\Chat;

use App\Models\Chat;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class GetSavedChatAction
{
    public function handle(): Model|Builder|Chat|null
    {
        $viewer = Auth::guard('sanctum')->user();
        $chat = Chat::query()
            ->whereHas('members', function (Builder $builder) use($viewer) {
                $builder->where('user_id', $viewer->id);
            })
            ->withCount('members')
            ->orderBy('members_count')
            ->first();

        if ($chat->members_count > 1) {
            $chat = Chat::create();
            $chat->save();
            $chat->members()->attach($viewer);
        }

        return $chat;
    }
}
