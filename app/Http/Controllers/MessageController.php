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
        $request->validate([
            'conversation_id' => 'required|exists:conversations,id',
            'sender_id' => 'required|exists:users,id',
            'receiver_id' => 'required|exists:users,id',
            'message_text' => 'required|string|max:1000',
        ]);

        Message::create([
            'conversation_id' => $request->conversation_id,
            'sender_id' => $request->sender_id,
            'receiver_id' => $request->receiver_id,
            'message_text' => $request->message_text,
        ]);

        return redirect()->back()->with('success', 'Message sent successfully!');
    }

    public function show($id)
    {
        $conversation = Conversation::with(['employer', 'employed', 'messages'])->findOrFail($id);

        return Inertia::render('Messages', [
            'auth' => [
                'user' => auth()->user(), 
            ],
            'conversation' => $conversation,
        ]);
    }

    public function index()
    {

        $userId = auth()->id();
        $conversations = Conversation::where('employer_id', $userId)
            ->orWhere('employed_id', $userId)
            ->with(['employer', 'employed'])
            ->get();

        $messages = [];
    
        return Inertia::render('Messages', [
            'auth' => [
                'user' => auth()->user(), 
            ],
            'conversations' => $conversations,
            'messages' => $messages,
        ]);
    }

    public function showMessages($conversationId)
    {
        $messages = Message::where('conversation_id', $conversationId)->get();
        return response()->json($messages);
    }

    public function destroy($messageId)
    {
        $message = Message::findOrFail($messageId);

        if ($message->sender_id !== auth()->id()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $message->delete();

        return response()->json(['success' => 'Message deleted successfully']);
    }
}