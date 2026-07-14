<?php

namespace App\Http\Controllers\services;

use Illuminate\Support\Facades\DB;

class AgenceService
{
    public function getPassagersParAgence(?int $annee = null, ?int $mois = null)
    {
        $query = DB::table('Vols as v')
            ->join('Agencies as a', 'v.code_agence', '=', 'a.code_agence')
            ->select('a.code_agence', 'a.Country_Code', DB::raw('SUM(v.nombre_passagers) as total_passagers'))
            ->groupBy('a.code_agence', 'a.Country_Code')
            ->orderByDesc('total_passagers')
            ->limit(10);

        if ($annee) {
            $query->whereYear('v.date_vols', $annee);
        }

        if ($mois) {
            $query->whereMonth('v.date_vols', $mois);
        }

        return $query->get();
    }
}