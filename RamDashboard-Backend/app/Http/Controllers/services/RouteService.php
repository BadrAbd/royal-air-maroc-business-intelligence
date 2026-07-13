<?php

namespace App\Http\Controllers\services;

use Illuminate\Support\Facades\DB;

class RouteService
{
    public function getTop10Routes()
    {
        return DB::table('Vols')
            ->select('City_Pair', DB::raw('SUM(nombre_passagers) as total_passagers'))
            ->groupBy('City_Pair')
            ->orderByDesc('total_passagers')
            ->limit(10)
            ->get();
    }
}