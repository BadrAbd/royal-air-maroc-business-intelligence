<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\services\AgenceService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class AgenceController extends Controller
{
    public function __construct(protected AgenceService $agenceService)
    {
    }

    public function passagers(Request $request): JsonResponse
    {
        $annee = $request->query('annee');
        $mois = $request->query('mois');

        return response()->json(
            $this->agenceService->getPassagersParAgence($annee, $mois)
        );
    }
}