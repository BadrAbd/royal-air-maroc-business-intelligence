<?php

namespace App\Http\Controllers\services;

use App\Models\Vol;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

class PassagerService
{
    public function getTotalPassagers()
    {
        return Vol::sum('nombre_passagers');
      
    }

    public function getEvolutionPassagers()
    {
        return DB::table('Vols')
            ->selectRaw('YEAR(date_vols) as annee, MONTH(date_vols) as mois, SUM(nombre_passagers) as total_passagers')
            ->groupBy(DB::raw('YEAR(date_vols)'), DB::raw('MONTH(date_vols)'))
            ->orderBy('annee')
            ->orderBy('mois')
            ->get();
    }

    public function getEvolutionReservations()
    {
        return DB::table('Reservations')
            ->selectRaw('YEAR(date_vols) as annee, MONTH(date_vols) as mois, SUM(nombre_passagers) as total_reservations')
            ->groupBy(DB::raw('YEAR(date_vols)'), DB::raw('MONTH(date_vols)'))
            ->orderBy('annee')
            ->orderBy('mois')
            ->get();
    }
}