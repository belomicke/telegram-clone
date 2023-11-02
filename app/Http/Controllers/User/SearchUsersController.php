<?php

namespace App\Http\Controllers\User;

use App\Actions\User\UserToChatJsonAction;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SearchUsersController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, UserToChatJsonAction $userToChatJsonAction): JsonResponse
    {
        $query = $request->input('query');

        $users = User::search($query)->get();

        $result = [];

        foreach ($users as $user) {
            if ($user->id === auth()->id()) {
                continue;
            }

            $result[] = $userToChatJsonAction->handle($user);
        }

        return response()->json([
            'success' => true,
            'result' => $result
        ]);
    }
}
