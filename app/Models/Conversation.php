<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    use HasFactory;

    // protected $fillable = [
    //     'sender_id',
    //     'receiver_id',
    // ];

    protected $fillable = [
        'employer_id',
        'employed_id',
    ];

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    public function employer()
    {
        return $this->belongsTo(User::class, 'employer_id');
    }

    public function employed()
    {
        return $this->belongsTo(User::class, 'employed_id');
    }
}
