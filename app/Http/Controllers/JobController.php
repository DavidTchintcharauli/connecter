<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Job;

class JobController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'comment_id' => 'required|exists:comments,id',
        ]);

        $job = Job::create([
            'comment_id' => $request->input('comment_id'),
            'job_success' => false,
        ]);

        return redirect()->route('dashboard')->with('success','');
    }
}
