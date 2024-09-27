<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Conversation;

class ConversationApiTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function it_can_fetch_conversations_for_an_employee()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $employee = User::factory()->create();

        $conversation = Conversation::create([
            'employer_id' => $user->id,
            'employed_id' => $employee->id,
        ]);

        $response = $this->getJson('/conversations', ['employee_id' => $employee->id]);

        $response->assertStatus(200)
                 ->assertJson([
                     'conversation' => [
                         'id' => $conversation->id,
                         'employer_id' => $conversation->employer_id,
                         'employed_id' => $conversation->employed_id,
                     ],
                 ]);
    }
}
