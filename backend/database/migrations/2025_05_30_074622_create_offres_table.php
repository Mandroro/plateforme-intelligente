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
        Schema::create('offres', function (Blueprint $table) {
            $table->string('ref_offre', 10)->primary();
            $table->text('titre_offre');
            $table->text('description')->nullable();
            $table->string('recruteurs_id', 50);
            $table->timestamps();
            $table->foreign('recruteurs_id')->references('email')->on('recruteurs');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('offres');
    }
};
