<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offre extends Model
{
    use HasFactory;

    protected $fillable = ['titre_offre', 'description', 'recruteurs_id'];

    public function recruteurs(){
        return $this->belongsTo(Recruteur::class);
    }
    
    public function missions(){
        return $this->hasMany(Mission::class); 
    }

    public function criteres(){
        return $this->hasMany(Critere::class); 
    }
}
