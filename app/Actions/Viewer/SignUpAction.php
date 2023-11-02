<?php

declare(strict_types=1);

namespace App\Actions\Viewer;

use App\Models\User;
use App\Helpers\ViewerHelpers;
use Illuminate\Support\Facades\Hash;

class SignUpAction
{
    public function handle(
        string $username,
        string $email,
        string $password
    ): array
    {
        if (!ViewerHelpers::usernameIsValid($username)) {
            return [
                'success' => false,
                'message' => 'Пожалуйста, используйте только буквы и цифры'
            ];
        }

        User::create([
            'username' => ViewerHelpers::getFormattedUsername($username),
            'name' => $username,
            'email' => $email,
            'password' => Hash::make($password)
        ]);

        return ['success' => true];
    }
}
