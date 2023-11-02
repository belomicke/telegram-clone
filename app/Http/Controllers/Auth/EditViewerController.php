<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\EditViewerRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class EditViewerController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(EditViewerRequest $request)
    {
        $name = $request->input('name');
        $avatar = $request->file('avatar');

        $viewer = Auth::guard('sanctum')->user();

        if ($name) {
            $viewer->name = $name;
        }

        if ($avatar) {
            $file = Storage::disk('public')->put('avatars', $avatar);

            $viewer->avatar_path = $file;
        }

        $viewer->save();

        return response()->json([
            'success' => true,
            'viewer' => $viewer->fresh()
        ]);
    }
}
