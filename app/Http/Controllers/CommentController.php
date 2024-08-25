<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'project_id' => 'required|integer|exists:projects,id',
            'offer_bids' => 'required|integer',
            'offer_money' => 'required|numeric',
            'time_need_to_start' => 'required|integer',
            'time_unit_start' => 'required|in:hours,minutes',
            'time_need_to_done' => 'required|integer',
            'time_unit_done' => 'required|in:days,hours,minutes',
            'cover_letter' => 'required|string|max:255',

            
        ]);

        $comment = new Comment([
            'project_id' => $request->project_id,
            'employed_id' => auth()->id(),
            'offer_bids' => $request->offer_bids,
            'offer_money' => $request->offer_money,
            'time_need_to_start' => $request->time_need_to_start,
            'time_unit_start' => $request->time_unit_start,
            'time_need_to_done' => $request->time_need_to_done,
            'time_unit_done' => $request->time_unit_done,
            'cover_letter' => $request->cover_letter,
        ]);

        $comment->save();

        return redirect()->route('dashboard');
    }
}