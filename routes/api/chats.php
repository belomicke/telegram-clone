<?php

use App\Http\Controllers\Chat\GetChatController;
use Illuminate\Support\Facades\Route;

Route::prefix('chats')->middleware('auth:sanctum')->group(function () {
    Route::get('/{user}', GetChatController::class);
});
