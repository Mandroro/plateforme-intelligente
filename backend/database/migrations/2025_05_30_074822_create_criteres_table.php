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
        Schema::create('criteres', function (Blueprint $table) {
            $table->id();
            $table->text('description');
            $table->string('offres_id', 10);
            $table->foreign('offres_id')->references('ref_offre')->on('offres');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('criteres');
    }
};
