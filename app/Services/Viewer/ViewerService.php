<?php

namespace App\Services\Viewer;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class ViewerService
{
    public function create (string $username, string $email, string $password): void
    {
        User::create([
            'username' => strtolower($username),
            'name' => $username,
            'email' => $email,
            'password' => Hash::make($password)
        ]);
    }
}
