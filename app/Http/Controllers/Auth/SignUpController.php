<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use App\Models\User;
use App\Services\Viewer\ViewerHelpers;
use App\Services\Viewer\ViewerService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class SignUpController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __construct(
        readonly private ViewerService $viewerService
    ) {}

    public function __invoke(SignUpRequest $request): JsonResponse
    {
        $username = $request->input('username');
        $email = $request->input('email');
        $password = $request->input('password');

        if (!ViewerHelpers::usernameIsValid($username)) {
            return response()->json([
                'success' => false,
                'message' => 'Пожалуйста, используйте только буквы или цифры'
            ]);
        }

        $this->viewerService->create(
            username: $username,
            email: $email,
            password: $password
        );

        return response()->json(['success' => true]);
    }
}
