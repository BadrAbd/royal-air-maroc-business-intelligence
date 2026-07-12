<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Agence extends Model
{
    protected $table = 'Agencies';
    protected $primaryKey = 'code_agence';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;

    public function vols()
    {
        return $this->hasMany(Vol::class, 'code_agence', 'code_agence');
    }
}