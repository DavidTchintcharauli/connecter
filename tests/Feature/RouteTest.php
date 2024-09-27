<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;
use App\Models\User;
use App\Models\Conversation;

class RouteTest extends TestCase
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

    public function conversations_route_calls_index_method()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $employee = User::factory()->create();

        Conversation::create([
            'employer_id' => $user->id,
            'employed_id' => $employee->id,
        ]);

        $response = $this->get(route('conversations.index', ['employee_id' => $employee->id]));

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'conversation' => [
                         'id',
                         'employer_id',
                         'employed_id',
                         'created_at',
                         'updated_at',
                     ],
                 ]);
    }
}
