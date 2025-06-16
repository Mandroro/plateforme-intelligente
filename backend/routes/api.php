<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CompetenceController;
use App\Http\Controllers\API\FormationController;
use App\Http\Controllers\API\FreelancerController;
use App\Http\Controllers\API\OffreController;
use App\Http\Controllers\API\RecruteurController;
use App\Http\Controllers\CritereController;
use App\Http\Controllers\MissionController;
use App\Models\Freelancer;
use App\Models\Recruteur;
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

Route::middleware('auth:sanctum')->group(function () {

    // Route API utilisateur connecté
    Route::get('/utilisateur', function (Request $request) {
        return $request->user();
    });

    // Route API Recruteur
    Route::get('/recruteurs/{id}', [RecruteurController::class, 'show']);
    Route::put('/recruteurs/{id}', [RecruteurController::class, 'update']);

    // Route API Offre - CRUD
    Route::get('/offres', [OffreController::class, 'index']);
    Route::get('/offres/{id}', [OffreController::class, 'show']);
    Route::post('/offres/create', [OffreController::class, 'store']);
    Route::put('/offres/{id}', [OffreController::class, 'update']);
    Route::delete('/offres/{id}', [OffreController::class, 'destroy']);

    // Route API Mission
    Route::post('/missions/create', [MissionController::class, 'store']);
    Route::delete('/missions/{id}', [MissionController::class, 'destroy']);
    
    // Route API Critère
    Route::post('/criteres/create', [CritereController::class, 'store']);
    Route::delete('/critere/{id}', [CritereController::class, 'destroy']);

    // Route API Freelancer
    Route::get('/freelancers/{id}', [FreelancerController::class, 'show']);
    Route::put('/freelancers/{id}', [FreelancerController::class, 'update']);

    // Route API Formation
    Route::post('/formations/create', [FormationController::class, 'store']);
    Route::delete('/formations/{id}', [FormationController::class, 'destroy']);

    // Route API Compétence
    Route::post('/competences/create', [CompetenceController::class, 'store']);
    Route::delete('/competences/{id}', [CompetenceController::class, 'destroy']);

    // Route API Déconnexion
    Route::post('/deconnexion', [AuthController::class, 'deconnexion']);
});
