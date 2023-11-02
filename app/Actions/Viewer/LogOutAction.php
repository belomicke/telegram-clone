<?php

namespace App\Actions\Viewer;

use Illuminate\Support\Facades\Auth;

class LogOutAction
{
    public function handle(): void
    {
        $viewer = Auth::guard('sanctum')->user();

        $viewer->tokens()->delete();
    }
}
