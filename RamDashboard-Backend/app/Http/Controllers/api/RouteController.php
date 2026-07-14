<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\services\RouteService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class RouteController extends Controller
{
    public function __construct(protected RouteService $routeService)
    {
    }

    public function top10(Request $request): JsonResponse
    {
        $annee = $request->query('annee');
        $mois = $request->query('mois');

        return response()->json(
            $this->routeService->getTop10Routes($annee, $mois)
        );
    }
}