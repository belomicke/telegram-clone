<?php

namespace App\Actions\Viewer;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class SignInAction
{
    public function handle(string $username, string $password)
    {
        $user = User::query()->where('username', $username)->first();

        if (!$user) {
            return '';
        }

        if (Hash::check($password, $user->password)) {
            return $user->createToken('token-name')->plainTextToken;
        }

        return '';
    }
}
