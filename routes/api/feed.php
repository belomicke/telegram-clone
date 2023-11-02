<?php

use App\Http\Controllers\Feed\GetViewerChats;
use App\Http\Controllers\Feed\GetChatMessagesController;
use Illuminate\Support\Facades\Route;

Route::prefix('feed')->group(function() {
    Route::get('/user/{user}/messages', GetChatMessagesController::class);
    Route::get('/viewer/chats', GetViewerChats::class);
});
