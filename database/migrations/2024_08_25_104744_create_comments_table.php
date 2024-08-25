<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('project_id')->constrained()->onDelete('cascade');
            $table->foreignId('employed_id')->constrained('users')->onDelete('cascade');
            $table->integer('offer_bids');
            $table->decimal('offer_money', 10,2);
            $table->integer('time_need_to_start');
            $table->string('time_unit_start', 10);
            $table->integer('time_need_to_done');
            $table->string('time_unit_done', 10);
            $table->text('cover_letter');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};