<?php

namespace App\Http\Controllers\Auth;

use App\Actions\Viewer\LogOutAction;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LogOutController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, LogOutAction $action): JsonResponse
    {
        $action->handle();

        return response()->json([
            'success' => true
        ]);
    }
}
