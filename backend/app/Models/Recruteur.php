<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Recruteur extends Model
{
    use HasFactory;

    protected $fillable = ['url_siteweb', 'adresse_actuel', 'num_telephone', 'secteur_travail', 'logo_entreprise'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function offres(): HasMany
    {
        return $this->hasMany(Offre::class);
    }
}
