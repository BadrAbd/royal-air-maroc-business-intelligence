<?php

namespace App\Http\Controllers\services;

use Illuminate\Support\Facades\DB;

class RouteService
{
    public function getTop10Routes(?int $annee = null, ?int $mois = null)
    {
        $query = DB::table('Vols')
            ->select('City_Pair', DB::raw('SUM(nombre_passagers) as total_passagers'))
            ->groupBy('City_Pair')
            ->orderByDesc('total_passagers')
            ->limit(10);

        if ($annee) {
            $query->whereYear('date_vols', $annee);
        }

        if ($mois) {
            $query->whereMonth('date_vols', $mois);
        }

        return $query->get();
    }
}