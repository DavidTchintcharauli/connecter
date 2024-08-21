<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'project_name' => 'required|string|max:255',
            'project_description' => 'nullable|string',
            'start_time' => 'nullable|date',
            'end_time' => 'nullable|date',
            'budget' => 'nullable|numeric',
            'bids' => 'nullable|integer',
        ]);

        $project = new Project([
            'user_id' => auth()->id(),
            'project_name' => $request->project_name,
            'project_description' => $request->project_description,
            'start_time' => $request->start_time,
            'end_time' => $request->end_time,
            'budget' => $request->budget,
            'bids' => $request->bids,
        ]);

        $project->save();

        return redirect()->route('dashboard')->with('success','project created successfully!');
    }
}
