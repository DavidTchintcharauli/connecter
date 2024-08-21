<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'project_name',
        'project_description',
        'start_time',
        'end_time',
        'budget',
        'bids',
        'updated_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
