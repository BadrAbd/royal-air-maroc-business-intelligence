<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vol extends Model
{
    protected $table = 'Vols';
    protected $primaryKey = 'vol_id';
    public $incrementing = true;
    public $timestamps = false;

    protected $fillable = [
        'issue_date', 'date_vols', 'code_agence', 'City_Pair', 'nombre_passagers',
    ];

    public function route()
    {
        return $this->belongsTo(LesRoute::class, 'City_Pair', 'City_Pair');
    }

    public function agence()
    {
        return $this->belongsTo(Agence::class, 'code_agence', 'code_agence');
    }
}