<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class publicController extends Controller
{
    public function helpAndSupport()
    {
        return Inertia::render("HelpAndSupport");
    }

    public function aboutUs()
    {
        return Inertia::render("AboutUs");
    }

    public function rules()
    {
        return Inertia::render("Rules");
    }

    public function androidApp()
    {
        return Inertia::render("AndroidApp");
    }

    public function iOSApp()
    {
        return Inertia::render("IOSApp");
    }
}
