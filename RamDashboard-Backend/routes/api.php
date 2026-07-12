<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\DashboardController;

Route::get('/kpis/total-passagers', [DashboardController::class, 'totalPassagers']);
Route::get('/vols/evolution-passagers', [DashboardController::class, 'evolutionPassagers']);
Route::get('/vols/evolution-reservations', [DashboardController::class, 'evolutionReservations']);
Route::get('/routes/top10', [DashboardController::class, 'top10Routes']);
Route::get('/agences/passagers', [DashboardController::class, 'passagersParAgence']);