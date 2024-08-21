<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    public function index()
    {
        // $employees = User::all();
        $employees = User::select('users.id', 'users.name', 'users.email', 'roles.role_name')
        ->join('user_roles', 'users.id', '=', 'user_roles.user_id')
        ->join('roles', 'user_roles.role_id', '=', 'roles.id')
        ->where('user_roles.role_id', 1)
        ->get();

        return Inertia::render("EmployeesList", [
            'employees' => $employees,
        ]);
    }
}
