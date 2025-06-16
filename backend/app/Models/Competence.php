<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Competence extends Model
{
    use HasFactory;

    protected $fillable = ['description', 'freelancer_id'];
    
    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }
}
