<?php

namespace App\Console\Commands;

use App\Models\Message;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class CreateMessagesForPrivateChat extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create-messages-for-private-chat {chat}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        $messages = [];
        $date = Carbon::now()->subDays(10);

        for ($index = 0; $index < 10; $index++) {
            $date = $date->addDay();

            for ($j = 0; $j < 100; $j++) {
                $messages[] = Message::create([
                    'text' => fake()->text(),
                    'user_id' => fake()->numberBetween(1, 2),
                    'updated_at' => $date,
                    'created_at' => $date
                ]);
            }
        }

        foreach ($messages as $message) {
            DB::table('private_chat_messages')->insert([
                'chat_id' => $this->argument('chat'),
                'message_id' => $message->id,
                'updated_at' => $message->updated_at,
                'created_at' => $message->created_at,
            ]);
        }
    }
}
