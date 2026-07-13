<?php

namespace App\Http\Controllers\services;

use App\Models\Vol;
use Illuminate\Support\Facades\DB;

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
        return DB::table('Vols')
            ->selectRaw('YEAR(issue_date) as annee, MONTH(issue_date) as mois, COUNT(*) as total_reservations')
            ->groupBy(DB::raw('YEAR(issue_date)'), DB::raw('MONTH(issue_date)'))
            ->orderBy('annee')
            ->orderBy('mois')
            ->get();
    }
}