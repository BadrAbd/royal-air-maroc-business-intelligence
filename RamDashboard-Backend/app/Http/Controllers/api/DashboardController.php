<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Vol;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\JsonResponse;

class DashboardController extends Controller
{
    //Total passagers
    public function totalPassagers(): JsonResponse
    {
        $total = Vol::sum('nombre_passagers');

        return response()->json([
            'total_passagers' => (int) $total,
        ]);
    }
    //Evolution mensuelle des passagers
    public function evolutionPassagers(): JsonResponse
    {
        $data = DB::table('Vols')
            ->selectRaw('YEAR(date_vols) as annee, MONTH(date_vols) as mois, SUM(nombre_passagers) as total_passagers')
            ->groupBy(DB::raw('YEAR(date_vols)'), DB::raw('MONTH(date_vols)'))
            ->orderBy('annee')
            ->orderBy('mois')
            ->get();

        return response()->json($data);
    }
    //Evolution mensuelle des réservations
    public function evolutionReservations(): JsonResponse
    {
        $data = DB::table('Vols')
            ->selectRaw('YEAR(issue_date) as annee, MONTH(issue_date) as mois, COUNT(*) as total_reservations')
            ->groupBy(DB::raw('YEAR(issue_date)'), DB::raw('MONTH(issue_date)'))
            ->orderBy('annee')
            ->orderBy('mois')
            ->get();

        return response()->json($data);
    }
    // Top 10 des routes les plus fréquentées

    public function top10Routes(): JsonResponse
    {
        $data = DB::table('Vols')
            ->select('City_Pair', DB::raw('SUM(nombre_passagers) as total_passagers'))
            ->groupBy('City_Pair')
            ->orderByDesc('total_passagers')
            ->limit(10)
            ->get();

        return response()->json($data);
    }
    // Nombre d'effectif de passagers par agence

    public function passagersParAgence(): JsonResponse
    {
        $data = DB::table('Vols as v')
            ->join('Agencies as a', 'v.code_agence', '=', 'a.code_agence')
            ->select('a.code_agence', 'a.Country_Code', DB::raw('SUM(v.nombre_passagers) as total_passagers'))
            ->groupBy('a.code_agence', 'a.Country_Code')
            ->orderByDesc('total_passagers')
            ->get();

        return response()->json($data);
    }
}