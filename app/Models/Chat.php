<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Facades\Auth;

/**
 * @property Collection $members
 *
 * @property string $updated_at
 * @method static Chat create (array $attributes = [])
 */
class Chat extends Model
{
    use HasFactory;

    protected $hidden = [
        'messages',
        'first_user_id',
        'second_user_id',
        'updated_at',
        'created_at',
    ];

    protected $appends = [
        'last_message'
    ];

    public function messages (): BelongsToMany
    {
        return $this
            ->belongsToMany(Message::class, 'private_chat_messages')
            ->orderBy('id', 'desc');
    }

    public function members (): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'chat_members');
    }

    public function getLastMessageAttribute ()
    {
        return $this
            ->messages()
            ->with('author')
            ->orderBy('id', 'desc')
            ->first();
    }
}
