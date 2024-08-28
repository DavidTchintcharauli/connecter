<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'comment_id',
        'job_success',
    ];

    public function comment()
    {
        return $this->belongsTo(Comment::class);
    }
}
