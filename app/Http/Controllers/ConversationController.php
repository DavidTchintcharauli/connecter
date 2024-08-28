<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ConversationController extends Controller
{
    public function index()
    {
        $conversations = auth()->user()->conversations;

        return Inertia::render("Conversation/Index", [
            'conversations' => $conversations,
        ]);
    }

    public function store(Request $request)
    {
        $rules = [
            'employer_id' => 'required|exists:users,id',
            'employed_id' => 'required|exists:users,id',
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $validated = $validator->validated();


        try {
            $existingConversation = Conversation::where([
                ['employer_id', '=', $validated['employer_id']],
                ['employed_id', '=', $validated['employed_id']],
            ])->orWhere([
                ['employer_id', '=', $validated['employed_id']],
                ['employed_id', '=', $validated['employer_id']]
            ])->exists();

            if ($existingConversation) {
                return response()->json(['message' => 'Conversation already exists'], 409);
            }

            Conversation::create($validated);
    
            return response()->json(['message' => 'Conversation created successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to create conversation', 'error' => $e->getMessage()], 500);
        }
    }
}
