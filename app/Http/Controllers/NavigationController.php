<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NavigationController extends Controller
{
    public function dashboard()
    {
        return Inertia::render("Dashboard");
    }

    public function employees()
    {
        return Inertia::render("EmployeesList");
    }

    public function requestPost()
    {
        return Inertia::render("RequestPost");
    }

    public function messages()
    {
        return Inertia::render("Messages");
    }

    public function notifications()
    {
        return Inertia::render("Notifications");
    }

    public function browse()
    {
        return Inertia::render("Browse");
    }

    public function jobs()
    {
        return Inertia::render("Jobs");
    }
}
