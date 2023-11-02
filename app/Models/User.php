<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Scout\Searchable;

/**
 * @property int $id
 * @property string $username
 * @property string $name
 * @property string $email
 * @property string $avatar
 * @property string $avatar_path
 *
 * @property Collection $chats
 *
 * @method static User create (array $attributes = [])
 */
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, Searchable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'email_verified_at',
        'avatar_path',
        'email',
        'password',
        'remember_token',
        'updated_at',
        'created_at'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    protected $appends = [
        'avatar'
    ];

    public function toSearchableArray(): array
    {
        return [
            'username' => $this->username,
            'name' => $this->name
        ];
    }

    public function getAvatarAttribute(): string
    {
        if (!$this->avatar_path) return '';

        return Storage::url($this->avatar_path);
    }

    public function chats (): BelongsToMany
    {
        return $this->belongsToMany(
            Chat::class,
            'chat_members',
        );
    }
}
