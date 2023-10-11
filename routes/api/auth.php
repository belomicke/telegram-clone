<?php


use App\Http\Controllers\Auth\GetViewerController;
use App\Http\Controllers\Auth\LogOutController;
use App\Http\Controllers\Auth\SignInController;
use App\Http\Controllers\Auth\SignUpController;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('viewer', GetViewerController::class);
    });

    Route::middleware('guest')->group(function () {
        Route::post('sign_up', SignUpController::class);
        Route::post('sign_in', SignInController::class);

        Route::delete('log_out', LogOutController::class);
    });
});
