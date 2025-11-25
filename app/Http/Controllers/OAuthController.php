<?php

namespace App\Http\Controllers;

use Laravel\Socialite\Facades\Socialite;
use Illuminate\Http\Request;

class OAuthController extends Controller
{
    public function redirectToMicrosoft()
    {
        return Socialite::driver('microsoft')->redirect();
    }
    public function handleProviderCallback()
    {
        $user = Socialite::driver('microsoft')->user();

        dd($user);
    }
}
