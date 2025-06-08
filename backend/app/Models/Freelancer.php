<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Freelancer extends Model
{
    use HasFactory;

    public function users()
    {
        return $this->belongsTo(User::class);
    }

    public function formations(){
        return $this->hasMany(Formation::class);
    }

    public function competences(){
        return $this->hasMany(Competence::class);
    }
}
