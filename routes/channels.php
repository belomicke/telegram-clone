<?php

use App\Helpers\ViewerHelpers;
use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel(
    'private.{first_user}.{second_user}',
    function (User $viewer, User $first_user, User $second_user) {
        return $viewer;

//        $user_id = $viewer->id === $first_user->id ? $second_user->id : $first_user->id;
//
//        if (ViewerHelpers::hasChatWithUser($user_id)) {
//            return $viewer;
//        } else {
//            return false;
//        }
});

Broadcast::channel('private.{user}', function (User $viewer, User $user) {
    return $viewer;
});
