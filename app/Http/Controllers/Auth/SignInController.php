<?php

namespace App\Http\Controllers\Auth;

use App\Actions\Viewer\SignInAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignInRequest;
use Illuminate\Http\JsonResponse;

class SignInController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(SignInRequest $request, SignInAction $action): JsonResponse
    {
        $token = $action->handle(...$request->only(['username', 'password']));

        if ($token === '') {
            return response()->json([
                'success' => false,
                'message' => 'Неверное имя пользователя или пароль'
            ], 500);
        } else {
            return response()->json([
                'success' => true,
                'token' => $token
            ]);
        }
    }
}
