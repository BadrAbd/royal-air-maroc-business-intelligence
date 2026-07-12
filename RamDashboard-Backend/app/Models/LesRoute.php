<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LesRoute extends Model
{
    protected $table = 'LesRoutes';
    protected $primaryKey = 'City_Pair';
    public $incrementing = false;   // clé non auto-incrémentée
    protected $keyType = 'string';  // clé de type texte, pas int
    public $timestamps = false;

    public function secteur()
    {
        return $this->belongsTo(Secteur::class, 'Sector_Name_Lv2', 'Sector_Name_Lv2');
    }

    public function vols()
    {
        return $this->hasMany(Vol::class, 'City_Pair', 'City_Pair');
    }
}