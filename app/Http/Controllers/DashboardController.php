<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $projects = Project::where('user_id', auth()->id())->get();

        return Inertia::render('Dashboard', [
            'projects' => $projects,
        ]);
    }
}
