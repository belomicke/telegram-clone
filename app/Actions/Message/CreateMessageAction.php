<?php

namespace App\Actions\Message;

use App\Models\Message;

class CreateMessageAction
{
    public function handle(string $message): Message
    {
        return Message::create([
            'text' => $message,
            'user_id' => auth('sanctum')->id()
        ]);
    }
}
