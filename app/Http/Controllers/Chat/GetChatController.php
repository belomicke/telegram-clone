<?php

namespace App\Http\Controllers\Chat;

use App\Actions\User\UserToChatJsonAction;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class GetChatController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(
        User $user,
        UserToChatJsonAction $userToChatJsonAction
    ): JsonResponse
    {
        $viewer = Auth::guard('sanctum')->user();

        if ($viewer->id !== $user->id) {
            $result = $userToChatJsonAction->handle($user);
        } else {
            $result = [
                'id' => $user->id,
                'title' => 'Избранное',
                'cover' => '',
                'feed' => [
                    'messages' => [],
                    'hasNextPage' => false,
                    'total' => 0
                ],
                'type' => 'private',
            ];
        }

        return response()->json([
            'success' => true,
            'chat' => $result
        ]);
    }
}
