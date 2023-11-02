<?php

namespace App\Events;

use App\Actions\User\UserToChatJsonAction;
use App\Models\Message;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Auth;

class NewChatEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public int $recipient_id;
    public Message $message;

    /**
     * Create a new event instance.
     */
    public function __construct(int $recipient_id, Message $message)
    {
        $this->recipient_id = $recipient_id;
        $this->message = $message;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('private.' . $this->recipient_id),
        ];
    }

    public function broadcastAs(): string
    {
        return 'new_chat';
    }

    public function broadcastWith(UserToChatJsonAction $userToChatJsonAction): array
    {
        $viewer = Auth::guard('sanctum')->user();

        $chat = $userToChatJsonAction->handle($viewer);

        $chat['feed']['messages'] = [$this->message];
        $chat['feed']['hasNextPage'] = false;
        $chat['feed']['total'] = 1;

        return $chat;
    }
}
