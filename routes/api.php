<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\SearchUsersController;

require_once 'api/feed.php';
require_once 'api/auth.php';
require_once 'api/chats.php';
require_once 'api/messages.php';

Route::middleware('auth:sanctum')->group(function () {
    Route::get('search', SearchUsersController::class);
});
