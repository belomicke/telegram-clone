<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('private_chat_messages', function (Blueprint $table) {
            $table->id();

            $table->foreignId('chat_id')->constrained()->on('chats')->cascadeOnDelete();
            $table->foreignId('message_id')->constrained()->on('messages')->cascadeOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('private_chat_messages');
    }
};
