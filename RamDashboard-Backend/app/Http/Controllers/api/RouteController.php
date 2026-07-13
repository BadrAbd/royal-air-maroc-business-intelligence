<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\services\RouteService;
use Illuminate\Http\JsonResponse;

class RouteController extends Controller
{
    public function __construct(protected RouteService $routeService)
    {
    }

    public function top10(): JsonResponse
    {
        return response()->json($this->routeService->getTop10Routes());
    }
}