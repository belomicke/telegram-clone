<?php

namespace App\Http\Controllers\Auth;

use App\Events\TestEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignInRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class SignInController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(SignInRequest $request): JsonResponse
    {
        $username = $request->input('username');
        $password = $request->input('password');
        $remember = $request->input('remember');

        $user = User::query()->where('username', $username)->first();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Неверное имя пользователя или пароль'
            ]);
        }

        if (Hash::check($password, $user->password)) {
            return response()->json([
                'success' => true,
                'token' => $user->createToken('token-name')->plainTextToken
            ]);
        }

        broadcast(new TestEvent("hello"));

        return response()->json([
            'success' => false,
            'message' => 'Неверное имя пользователя или пароль'
        ]);
    }
}
