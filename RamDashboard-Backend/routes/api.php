<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PassagerController;
use App\Http\Controllers\Api\RouteController;
use App\Http\Controllers\Api\AgenceController;

Route::get('/kpis/total-passagers', [PassagerController::class, 'total']);
Route::get('/vols/evolution-passagers', [PassagerController::class, 'evolutionPassagers']);
Route::get('/vols/evolution-reservations', [PassagerController::class, 'evolutionReservations']);
Route::get('/routes/top10', [RouteController::class, 'top10']);
Route::get('/agences/passagers', [AgenceController::class, 'passagers']);