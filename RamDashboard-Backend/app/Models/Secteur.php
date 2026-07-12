<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Secteur extends Model
{
    protected $table = 'Secteurs';
    protected $primaryKey = 'Sector_Name_Lv2';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;
}