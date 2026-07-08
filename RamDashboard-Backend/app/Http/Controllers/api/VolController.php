public function totalPassagers()
{
    $total = Vol::sum('nombre_passagers');
    return response()->json(['total_passagers' => $total]);
}