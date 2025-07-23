<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Candidature;
use Illuminate\Http\Request;

class CandidatureController extends Controller
{
    // Nombre de candidature envoyé
    public function dashboardByFreelancer(string $id)
    {
        return response()->json([
            "resultat" => Candidature::where('freelancer_id', $id)->count()
        ]);
    }

    // Nombre de candidature reçu par un recruteur
    public function dashboardByRecruteur(string $id)
    {
        return response()->json([
            "resultat" => Candidature::with(['freelancer.user', 'offre'])
                ->whereHas('offre', function ($query) use ($id) {
                    $query->where('recruteur_id', $id);
                })->count()
        ]);
    }

    // Listes des (03)trois dernier candidatures d'un freelancer
    public function historiqueCandidaturesByFreelancer(string $id)
    {
        $candidatures = Candidature::with(['offre.recruteur.user'])
            ->where('freelancer_id', $id)
            ->limit(3)
            ->get()
            ->map(function ($candidature) {
                return [
                    'id' => $candidature->id,
                    'offre_id' => $candidature->offre->id,
                    'titre_offre' => $candidature->offre->titre_offre,
                    'date_candidature' => $candidature->created_at->locale('fr')->isoFormat('DD MMMM YYYY'),
                    'recruteur_nom' => $candidature->offre->recruteur->user->name,
                ];
            });

        return response()->json([
            "message" => "Liste des candidatures récupérée avec succès",
            "resultat" => $candidatures
        ], 200);
    }

    // Liste de tous mes candidatures d'un freelancer
    public function listeCandidaturesByFreelancer(string $id)
    {
        $candidatures = Candidature::with(['offre.recruteur.user'])
            ->where('freelancer_id', $id)
            ->get()
            ->map(function ($candidature) {
                return [
                    'id' => $candidature->id,
                    'offre_id' => $candidature->offre->id,
                    'titre_offre' => $candidature->offre->titre_offre,
                    'date_candidature' => $candidature->created_at->locale('fr')->isoFormat('DD MMMM YYYY'),
                    'recruteur_nom' => $candidature->offre->recruteur->user->name,
                ];
            });

        return response()->json([
            "message" => "Liste des candidatures récupérée avec succès",
            "resultat" => $candidatures
        ], 200);
    }

    // Liste des candidature réçu par un recruteur
    public function listeCandidaturesByRecruteur(string $recruteurId)
    {
        $candidatures = Candidature::with(['freelancer.user', 'offre'])
            ->whereHas('offre', function ($query) use ($recruteurId) {
                $query->where('recruteur_id', $recruteurId);
            })
            ->get()
            ->map(function ($c) {
                return [
                    'candidature_id' => $c->id,
                    'freelancer_id' => $c->freelancer->id,
                    'freelancer_nom' => $c->freelancer->user->name,
                    'offre_id' => $c->offre->id,
                    'offre_titre' => $c->offre->titre_offre,
                    'date_candidature' => $c->created_at->locale('fr')->isoFormat('DD MMMM YYYY'),
                ];
            });

        return response()->json([
            'message' => 'Liste des candidatures aux offres du recruteur récupérée avec succès',
            'resultat' => $candidatures
        ], 200);
    }


    // Envoyer la candidature
    public function send(Request $request)
    {
        $data = $request->validate([
            "freelancer_id" => "required",
            "offre_id" => "required"
        ]);

        $candidature = Candidature::create($data);

        return response()->json([
            "message" => "Candidature envoyé avec succès",
            "resultat" => $candidature
        ], 201);
    }
}
