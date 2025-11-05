<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/unity-builds/{scenario}/{file}', function ($scenario, $file) {
    $path = public_path("unity-builds/$scenario/$file");

    if (!file_exists($path)) {
        abort(404);
    }

    $contentType = [
        'html' => 'text/html',
        'js' => 'application/javascript',
        'wasm' => 'application/wasm',
        'data' => 'application/octet-stream',
        'json' => 'application/json',
    ][pathinfo($file, PATHINFO_EXTENSION)] ?? 'application/octet-stream';

    return response()->file($path, ['Content-Type' => $contentType]);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
