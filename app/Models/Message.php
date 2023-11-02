<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
/**
 * @method static Message create (array $attributes = [])
 */
class Message extends Model
{
    use HasFactory;

    protected $hidden = [
        'pivot',
    ];

    protected $fillable = [
        'text',
        'user_id',
        'updated_at',
        'created_at'
    ];

    public function author (): BelongsTo
    {
        return $this->belongsTo(User::class, 'id');
    }
}
