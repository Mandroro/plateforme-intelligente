<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('freelancers', function (Blueprint $table) {
            $table->string('email', 50)->primary();
            $table->string('motpasse', 15);
            $table->string('nom_prenom', 100);
            $table->text('adresse_actuel')->nullable();
            $table->string('num_telephone', 20);
            $table->text('poste_travail');
            $table->text('photo_identite')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('freelancers');
    }
};
