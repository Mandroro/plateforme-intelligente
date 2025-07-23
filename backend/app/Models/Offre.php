<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Offre extends Model
{
    use HasFactory;

    protected $fillable = ['titre_offre', 'description', 'recruteur_id'];

    public function recruteur(): BelongsTo
    {
        return $this->belongsTo(Recruteur::class);
    }

    public function missions(): HasMany
    {
        return $this->hasMany(Mission::class);
    }

    public function criteres(): HasMany
    {
        return $this->hasMany(Critere::class);
    }

    public function candidatures()
    {
        return $this->hasMany(Candidature::class);
    }

    public function freelancers(): BelongsToMany
    {
        return $this->belongsToMany(Freelancer::class, 'candidatures')
            ->withTimestamps();
    }
}
