<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CompetenceController;
use App\Http\Controllers\API\FormationController;
use App\Http\Controllers\API\FreelancerController;
use App\Http\Controllers\API\OffreController;
use App\Http\Controllers\API\RecruteurController;
use App\Http\Controllers\API\CritereController;
use App\Http\Controllers\API\MatchingController;
use App\Http\Controllers\API\MissionController;
use App\Http\Controllers\API\UserController;
use App\Models\Freelancer;
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


// Route API accessible publiquement

// Authentification
Route::post('/connexion', [AuthController::class, 'connexion']);

// Inscription
Route::post('/inscription', [AuthController::class, 'inscription']);

// Liste des offres disponible 
Route::get('/liste-des-offres', [OffreController::class, 'index']);

// Liste des freelancers inscrit
Route::get('/liste-des-candidats', [FreelancerController::class, 'index']);

// Liste des recruteurs inscrit
Route::get('/liste-des-entreprises', [RecruteurController::class, 'index']);


// Route API accessible après authentification
Route::middleware('auth:sanctum')->group(function () {

    // Utilisateur connecté
    Route::get('/utilisateur', function (Request $request) {
        return $request->user();
    });

    // Gérer mot de passe utilisateur
    Route::put('/utilisateurs/{id}', [UserController::class, 'resetPassword']);

    // Recruteur
    Route::get('/recruteurs/{id}', [RecruteurController::class, 'show']);
    Route::put('/recruteurs/{id}', [RecruteurController::class, 'update']);

    // Offre
    Route::get('/offres', [OffreController::class, 'index']);
    Route::get('/offres/{id}', [OffreController::class, 'show']);
    Route::post('/offres/create', [OffreController::class, 'store']);
    Route::put('/offres/{id}', [OffreController::class, 'update']);
    Route::delete('/offres/{id}', [OffreController::class, 'destroy']);

    // Mission
    Route::get('/missions/{id}', [MissionController::class, 'show']);
    Route::post('/missions/create', [MissionController::class, 'store']);
    Route::delete('/missions/{id}', [MissionController::class, 'destroy']);

    // Critère
    Route::get('/criteres/{id}', [CritereController::class, 'show']);
    Route::post('/criteres/create', [CritereController::class, 'store']);
    Route::delete('/critere/{id}', [CritereController::class, 'destroy']);

    // Freelancer
    Route::get('/freelancers/{id}', [FreelancerController::class, 'show']);
    Route::put('/freelancers/{id}', [FreelancerController::class, 'update']);

    // Formation
    Route::post('/formations/create', [FormationController::class, 'store']);
    Route::delete('/formations/{id}', [FormationController::class, 'destroy']);

    //Compétence
    Route::post('/competences/create', [CompetenceController::class, 'store']);
    Route::delete('/competences/{id}', [CompetenceController::class, 'destroy']);

    // Matching automatique depuis un API externe IA
    Route::get('/matching-offre/{id}', [MatchingController::class, 'matchingByOffre']);
    Route::get('/matching-freelancer', [MatchingController::class, 'matchingByFreelancer']);

    // Déconnexion
    Route::delete('/deconnexion', [AuthController::class, 'deconnexion']);
});
