<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\services\AgenceService;
use Illuminate\Http\JsonResponse;

class AgenceController extends Controller
{
    public function __construct(protected AgenceService $agenceService)
    {
    }

    public function passagers(): JsonResponse
    {
        return response()->json($this->agenceService->getPassagersParAgence());
    }
}