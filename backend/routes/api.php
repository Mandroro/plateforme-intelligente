<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\OffreController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


// Route API Connexion
Route::post('/connexion', [AuthController::class, 'connexion']);

// Route API Inscription
Route::post('/inscription', [AuthController::class, 'inscription']);

Route::middleware('auth:sanctum')->group(function(){

    // Route API utilisateur connecté
    Route::get('/utilisateur', function (Request $request) {return $request->user(); });

    // Route API Offre - CRUD
    Route::get('/offres', [OffreController::class, 'index']);
    Route::get('/offres/{id}', [OffreController::class, 'show']);
    Route::post('/offres/create', [OffreController::class, 'store']);
    Route::put('/offres/{id}', [OffreController::class, 'update']);
    Route::delete('/offres/{id}', [OffreController::class, 'destroy']);

    // Route API Déconnexion
    Route::post('/deconnexion', [AuthController::class, 'deconnexion']);
});
