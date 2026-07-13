<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\services\PassagerService;
use Illuminate\Http\JsonResponse;

class PassagerController extends Controller
{
    public function __construct(protected PassagerService $passagerService)
    {
    }

    public function total(): JsonResponse
    {
        return response()->json([
            'total_passagers' => (int) $this->passagerService->getTotalPassagers(),
        ]);
    }

    public function evolutionPassagers(): JsonResponse
    {
        return response()->json($this->passagerService->getEvolutionPassagers());
    }

    public function evolutionReservations(): JsonResponse
    {
        return response()->json($this->passagerService->getEvolutionReservations());
    }
}