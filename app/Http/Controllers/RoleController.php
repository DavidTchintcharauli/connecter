<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleController extends Controller
{
    public function show()
    {
        $roles = Role::all();
        return inertia('Roles', ['roles' => $roles]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'role_id' => 'required|exists:roles,id',
        ]);

        $user = Auth::user();

        $user->roles()->sync([$request->role_id]);

        return redirect()->route('dashboard');
    }
}