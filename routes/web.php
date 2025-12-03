<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::view('/index', 'landingPage');
Route::view('/contacto', 'pagecontact')->name('pagecontact');
Route::view('', 'landingPage');
Route::view('/login', 'login')->name('login');
Route::view('/quienes-somos', 'quienes-somos')->name('quienes-somos');
Route::view('/manlift-articulado', 'manlift-articulado')->name('manlift-articulado');
Route::view('/minicargador', 'minicargador')->name('minicargador');
Route::view('/retroexcavadora', 'retroexcavadora')->name('retroexcavadora');
Route::view('/telehandler', 'telehandler')->name('telehandler');
Route::view('/scissor-lift', 'scissor-lift')->name('scissor-lift');


// API Routes
Route::post(' ', [ContactController::class, 'send'])->name('contact.send');