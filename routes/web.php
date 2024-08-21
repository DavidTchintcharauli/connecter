<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\NavigationController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

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
    Route::get('/messages', [NavigationController::class,'messages'])->middleware(['auth', 'verified', 'permission:Employer_permission'])->name('messages');
    Route::get('/notifications', [NavigationController::class,'notifications'])->name('notifications');
    Route::get('/browse', [NavigationController::class,'browse'])->name('browse');
    Route::get('/jobs', [NavigationController::class,'jobs'])->name('jobs');
    Route::get('/roles', [RoleController::class, 'show'])->name('roles');
    Route::post('/roles', [RoleController::class,'store'])->name('roles.store');
    Route::get('/employees', [EmployeeController::class,'index'])->name('employees');
    Route::get('/permissionMessages', [NavigationController::class,'permissionMessages'])->name('permissionMessages');
    Route::post('/requestPost', [ProjectController::class, 'store'])->name('requestPost.store');
    Route::get('/dashboard', [DashboardController::class,'index'])->name('dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/helpAndSupport',[PublicController::class,'helpAndSupport'])->name('helpAndSupport');
Route::get('/aboutUs',[PublicController::class,'aboutUs'])->name('aboutUs');
Route::get('/rules',[PublicController::class,'rules'])->name('rules');
Route::get('/androidApp',[PublicController::class,'androidApp'])->name('androidApp');
Route::get('/iOSApp',[PublicController::class,'iOSApp'])->name('iOSApp');

require __DIR__.'/auth.php';
