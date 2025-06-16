<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Mission extends Model
{
    use HasFactory;

    protected $fillable = ['description', 'offre_id'];

    public function offre(): BelongsTo
    {
        return $this->belongsTo(Offre::class);
    }
}
