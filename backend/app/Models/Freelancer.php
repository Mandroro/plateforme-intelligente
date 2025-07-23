<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Freelancer extends Model
{
    use HasFactory;

    protected $fillable = ['adresse_actuel', 'num_telephone', 'poste_travail', 'photo_identite'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function formations(): HasMany
    {
        return $this->hasMany(Formation::class);
    }

    public function competences(): HasMany
    {
        return $this->hasMany(Competence::class);
    }

    public function candidatures()
    {
        return $this->hasMany(Candidature::class);
    }

    public function offres(): BelongsToMany
    {
        return $this->belongsToMany(Offre::class, 'candidatures')
            ->withTimestamps();
    }
}
