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
        Schema::create('recruteurs', function (Blueprint $table) {
            $table->string('email', 50)->primary();
            $table->string('motpasse', 15);
            $table->string('nom_entreprise', 100);
            $table->text('url_siteweb')->nullable();
            $table->text('adresse')->nullable();
            $table->string('num_telephone', 20);
            $table->text('secteur_travail');
            $table->text('logo_entreprise')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recruteurs');
    }
};
