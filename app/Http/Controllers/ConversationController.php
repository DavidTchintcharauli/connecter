<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\User;
use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class ConversationController extends Controller
{
    public function index(Request $request)
    {

        $conversations = Conversation::with(['employer', 'employed'])->get();

        return Inertia::render('Conversations', [
            'conversations' => $conversations,
        ]);
    }

    public function createOrGetConversation(Request $request)
    {
        $request->validate([
            'employed_id' => 'required|exists:users,id',
        ]);
    
        $employerId = auth()->id();
        $employedId = $request->input('employed_id');
    
        Log::info("Employer ID: $employerId, Employed ID: $employedId");
    
        $conversation = Conversation::where('employer_id', $employerId)
            ->where('employed_id', $employedId)
            ->first();
    
        if (!$conversation) {
            $conversation = Conversation::create([
                'employer_id' => $employerId,
                'employed_id' => $employedId,
            ]);
        }

        return redirect()->route('messages');
       
    }
}
