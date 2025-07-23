<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidature extends Model
{
    use HasFactory;

    protected $fillable = [
        'freelancer_id',
        'offre_id',
        'motivation',
        'statut'
    ];

    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }

    public function offre()
    {
        return $this->belongsTo(Offre::class);
    }
}
