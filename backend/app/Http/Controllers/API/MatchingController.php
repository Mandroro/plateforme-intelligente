<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Freelancer;
use App\Models\Offre;
use Illuminate\Support\Facades\Http;

class MatchingController extends Controller
{
    // Matching automatique pour afficher la liste des quatre(04) offres idéal à un profil spécifique

    public function matchingByOffre(string $id)
    {
        // Récupérer les données du freelancer
        $freelancer = Freelancer::with(['formations', 'competences'])->findOrFail($id);
        $offres = Offre::with(['recruteur.user', 'missions', 'criteres'])->get();

        // Préparer le texte du freelancer
        $sourceSentence = implode(', ', array_merge(
            $freelancer->formations->pluck('titre_formation')->toArray(),
            $freelancer->competences->pluck('description')->toArray()
        ));

        // Préparer les textes des offres
        $sentences = $offres->map(function ($offre) {
            return implode(', ', array_merge(
                $offre->missions->pluck('description')->toArray(),
                $offre->criteres->pluck('description')->toArray()
            ));
        })->toArray();

        // Requête Hugging Face
        $response = Http::withToken(env('HUGGINGFACE_TOKEN'))
            ->post('https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2', [
                'inputs' => [
                    'source_sentence' => $sourceSentence,
                    'sentences' => $sentences
                ]
            ]);

        if ($response->failed()) {
            return response()->json([
                'error' => 'Erreur Hugging Face',
                'message' => $response->body()
            ], 500);
        }

        $scores = $response->json();

        // Associer les scores aux offres avec un "niveau"
        $matched = $offres->values()->map(function ($offre, $index) use ($scores) {
            $score = round($scores[$index] * 100, 2);

            // Interprétation du score
            $niveau = match (true) {
                $score >= 90 => 'idéal',
                $score >= 75 => 'très compatible',
                $score >= 60 => 'compatible moyen',
                default      => 'non compatible',
            };

            // Format de la date en français
            $formattedDate = $offre->created_at->locale('fr')->isoFormat('DD MMMM YYYY');

            return [
                'offre' => $offre,
                'score' => $score,
                'niveau' => $niveau,
                'created_at' => $formattedDate,
            ];
        })->sortByDesc('score')->take(4)->values();

        // Retourner les résultats
        return response()->json([
            'freelancer' => [
                'id' => $freelancer->id,
                'formations' => $freelancer->formations->pluck('titre_formation'),
                'competences' => $freelancer->competences->pluck('description'),
            ],
            'matched_offres' => $matched
        ]);
    }


    // Matching automatique pour afficher la liste quatre(04) des freelancers idéal sur chacune des offres
    public function matchingByFreelancer()
    {
        // Récupérer toutes les offres avec missions et critères
        $offres = Offre::with(['missions', 'criteres'])->get();

        // Récupérer tous les freelancers avec leurs formations et compétences
        $freelancers = Freelancer::with(['formations', 'competences'])->get();

        // Préparer les profils textuels des freelancers
        $freelancerProfiles = $freelancers->map(function ($freelancer) {
            return implode(', ', array_merge(
                $freelancer->formations->pluck('titre_formation')->toArray(),
                $freelancer->competences->pluck('description')->toArray()
            ));
        })->toArray();

        $results = [];

        // Pour chaque offre, comparer avec tous les freelancers
        foreach ($offres as $offre) {
            // Préparer le texte de l'offre (missions + critères)
            $offreText = implode(', ', array_merge(
                $offre->missions->pluck('description')->toArray(),
                $offre->criteres->pluck('description')->toArray()
            ));

            // Requête Hugging Face
            $response = Http::withToken(env('HUGGINGFACE_TOKEN'))
                ->post('https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2', [
                    'inputs' => [
                        'source_sentence' => $offreText,
                        'sentences' => $freelancerProfiles
                    ]
                ]);

            if ($response->failed()) {
                return response()->json([
                    'error' => 'Erreur Hugging Face',
                    'message' => $response->body()
                ], 500);
            }

            $scores = $response->json();

            // Associer les scores aux freelancers avec un "niveau"
            $matchedFreelancers = $freelancers->values()->map(function ($freelancer, $index) use ($scores) {
                $score = round($scores[$index] * 100, 2);

                $niveau = match (true) {
                    $score >= 90 => 'idéal',
                    $score >= 75 => 'très compatible',
                    $score >= 60 => 'compatible moyen',
                    default      => 'non compatible',
                };

                return [
                    'freelancer' => [
                        'id' => $freelancer->id,
                        'nom' => $freelancer->nom,
                    ],
                    'score' => $score,
                    'niveau' => $niveau
                ];
            })->sortByDesc('score')->take(4)->values();

            $results[] = [
                'offre' => [
                    'id' => $offre->id,
                    'titre' => $offre->titre,
                ],
                'matched_freelancers' => $matchedFreelancers
            ];
        }

        // Retourner les résultats
        return response()->json($results);
    }
}
