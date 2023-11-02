<?php

namespace App\Http\Controllers\Auth;

use App\Actions\Viewer\SignUpAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use Illuminate\Http\JsonResponse;

class SignUpController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(SignUpRequest $request, SignUpAction $action): JsonResponse
    {
        $response = $action->handle(...$request->only(['username', 'email', 'password']));

        return response()->json($response);
    }
}
