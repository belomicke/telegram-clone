<?php

namespace App\Events;

use App\Models\Message;
use App\Helpers\ChatHelpers;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Auth;

class CreateMessageEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public Message $message;
    public int $user_id;

    /**
     * Create a new event instance.
     */
    public function __construct(int $user_id, Message $message)
    {
        $this->message = $message;
        $this->user_id = $user_id;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel(ChatHelpers::getPrivateChatChannel($this->user_id)),
        ];
    }

    public function broadcastAs(): string
    {
        return 'create_message';
    }

    public function broadcastWith(): array
    {
        return [
            'user_id' => Auth::guard('sanctum')->id(),
            'message' => $this->message
        ];
    }
}
