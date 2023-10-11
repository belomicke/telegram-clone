<?php

namespace App\Services\Viewer;

class ViewerHelpers
{
    public static function usernameIsValid (string $username): bool
    {
        return preg_match("/^[a-zA-Z0-9]+$/", $username);
    }
}
