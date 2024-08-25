<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'project_id',
        'employed_id',
        'offer_bids',
        'offer_money',
        'time_need_to_start',
        'time_unit_start',
        'time_need_to_done',
        'time_unit_done',
        'cover_letter',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
