<?php

use App\Http\Controllers\Message\CreateMessageController;
use Illuminate\Support\Facades\Route;

Route::prefix('messages')->middleware('auth:sanctum')->group(function () {
    Route::post('create', CreateMessageController::class);
});
