<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Front-end login page (UI only). Implement backend POST `/login` to handle auth.
Route::get('login', function () {
    return Inertia::render('login');
})->name('login');

// Public dashboard (no auth required)
Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->name('dashboard');

