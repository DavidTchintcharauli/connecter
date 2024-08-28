<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\Conversation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'conversation_id' => 'required|exists:conversations,id',
            'message_text' => 'required|string',
        ]);

        $message = Message::create([
            'conversation_id' => $validated['conversation_id'],
            'sender_id' => Auth::id(),
            'receiver_id' => $validated['receiver_id'],
            'message_text' => $validated['message_text'],
        ]);

        $message = Message::create($validated);

        return redirect()->back()->with('message', 'Message sent!');
    }

    public function show($conversationId)
    {
        $message = Message::Where('conversation_id', $conversationId)->get();

        return response()->json($message);
    }

    public function index()
    {
        $employees = User::select('users.id', 'users.name', 'users.email', 'roles.role_name')
        ->join('user_roles', 'users.id', '=', 'user_roles.user_id')
        ->join('roles', 'user_roles.role_id', '=', 'roles.id')
        ->where('user_roles.role_id', 1)
        ->get();

        return Inertia::render("Messages", [
            'employees' => $employees,
        ]);
    }
}