<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\NavigationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [NavigationController::class,'dashboard'])->name('dashboard');
    Route::get('/employees', [NavigationController::class,'employees'])->name('employees');
    Route::get('/requestPost', [NavigationController::class,'requestPost'])->name('requestPost');
    Route::get('/messages', [NavigationController::class,'messages'])->name('messages');
    Route::get('/notifications', [NavigationController::class,'notifications'])->name('notifications');
    Route::get('/browse', [NavigationController::class,'browse'])->name('browse');
    Route::get('/jobs', [NavigationController::class,'jobs'])->name('jobs');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
