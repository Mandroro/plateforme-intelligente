<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Offre;
use Illuminate\Http\Request;

class OffreController extends Controller
{

    // Nombre de tous les offres disponibles
    public function dashboard()
    {
        return response()->json([
            "resultat" => Offre::count()
        ]);
    }

    // Nombre d'offre publié par un recruteur
    public function dashboardById(string $id)
    {
        return response()->json([
            "resultat" => Offre::where('recruteur_id', $id)->count()
        ]);
    }

    public function search(Request $request)
    {
        $request->validate([
            'titre_offre' => 'nullable|string',
            'adresse_actuel' => 'nullable|string',
        ]);

        if (!$request->filled('titre_offre') && !$request->filled('adresse_actuel')) {
            return response()->json([
                'message' => 'Veuillez fournir au moins un critère de recherche.',
                'resultat' => [],
            ], 400);
        }

        $resultat = Offre::with(['recruteur.user'])
            ->when($request->filled('titre_offre'), function ($query) use ($request) {
                $query->where('titre_offre', 'like', '%' . $request->query('titre_offre') . '%');
            })
            ->when($request->filled('adresse_actuel'), function ($query) use ($request) {
                $query->whereHas('recruteur', function ($q) use ($request) {
                    $q->where('adresse_actuel', 'like', '%' . $request->query('adresse_actuel') . '%');
                });
            })
            ->get()
            ->map(function ($offre) {
                return [
                    'id' => $offre->id,
                    'titre' => $offre->titre_offre,
                    'description' => $offre->description,
                    'created_at' => $offre->created_at->locale('fr')->isoFormat('DD MMMM YYYY'),
                    'updated_at' => $offre->updated_at->locale('fr')->isoFormat('DD MMMM YYYY'),
                    'recruteur' => [
                        'id' => $offre->recruteur->id,
                        'nom' => $offre->recruteur->nom,
                        'adresse' => $offre->recruteur->adresse_actuel,
                        'user' => [
                            'id' => $offre->recruteur->user->id,
                            'email' => $offre->recruteur->user->email,
                            'name' => $offre->recruteur->user->name,
                        ],
                    ],
                ];
            });

        return response()->json([
            'message' => 'Résultat de recherche récupéré avec succès',
            'resultat' => $resultat,
        ], 200);
    }



    public function listeOffreById(string $id)
    {
        $offres = Offre::with('recruteur.user')
            ->whereHas('recruteur.user', function ($query) use ($id) {
                $query->where('id', $id);
            })
            ->get()
            ->map(function ($offre) {
                return [
                    'id' => $offre->id,
                    'titre' => $offre->titre_offre,
                    'description' => $offre->description,
                    'created_at' => $offre->created_at->locale('fr')->isoFormat('DD MMMM YYYY'),
                    'updated_at' => $offre->updated_at->locale('fr')->isoFormat('DD MMMM YYYY'),
                    'recruteur' => [
                        'id' => $offre->recruteur->id,
                        'nom' => $offre->recruteur->nom,
                        'adresse' => $offre->recruteur->adresse_actuel,
                        'user' => [
                            'id' => $offre->recruteur->user->id,
                            'email' => $offre->recruteur->user->email,
                            'name' => $offre->recruteur->user->name,
                        ]
                    ],
                ];
            });

        return response()->json([
            "message" => "Liste des offres récupérées avec succès",
            "resultat" => $offres
        ], 200);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $offres = Offre::with('recruteur.user')->get()->map(function ($offre) {
            return [
                'id' => $offre->id,
                'titre' => $offre->titre_offre,
                'description' => $offre->description,
                'created_at' => $offre->created_at->locale('fr')->isoFormat('DD MMMM YYYY'),
                'updated_at' => $offre->updated_at->locale('fr')->isoFormat('DD MMMM YYYY'),
                'recruteur' => [
                    'id' => $offre->recruteur->id,
                    'nom' => $offre->recruteur->nom,
                    'adresse' => $offre->recruteur->adresse_actuel,
                    'user' => [
                        'id' => $offre->recruteur->user->id,
                        'email' => $offre->recruteur->user->email,
                        'name' => $offre->recruteur->user->name,
                    ]
                ],
            ];
        });

        return response()->json([
            "message" => "Liste des offres récupérées avec succès",
            "resultat" => $offres
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "titre_offre" => "required",
            "description" => "",
            "recruteur_id" => "required",
        ]);

        $offre = Offre::create($data);

        return response()->json([
            "message" => "Offre créé avec succès",
            "resultat" => $offre
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $offre = Offre::with(['recruteur.user'])->find($id);

        if (!$offre) {
            return response()->json([
                "message" => "Aucun données correspondante"
            ], 404);
        } else {
            $data = [
                'id' => $offre->id,
                'titre' => $offre->titre_offre,
                'description' => $offre->description,
                'created_at' => $offre->created_at->locale('fr')->isoFormat('DD MMMM YYYY'),
                'updated_at' => $offre->updated_at->locale('fr')->isoFormat('DD MMMM YYYY'),
                'recruteur' => $offre->recruteur ? [
                    'id' => $offre->recruteur->id,
                    'nom' => $offre->recruteur->nom,
                    'adresse' => $offre->recruteur->adresse_actuel,
                    'user' => $offre->recruteur->user ? [
                        'id' => $offre->recruteur->user->id,
                        'email' => $offre->recruteur->user->email,
                        'name' => $offre->recruteur->user->name,
                    ] : null
                ] : null,
            ];
            return response()->json([
                "message" => "Détail sur l'offre récuperé avec succès",
                "resultat" => $data
            ], 200);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $offre = Offre::findOrFail($id);

        $data = $request->validate([
            "titre_offre" => "required",
            "description" => ""
        ]);

        $offre->update($data);

        return response()->json([
            "message" => "Offre modifié avec succès",
            "data" => $data
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $offre = Offre::find($id);

        if (!$offre) {
            return response()->json([
                "message" => "Offre non trouvé"
            ], 404);
        } else {
            $offre->delete();
            return response()->json([
                "message" => "Offre supprimé avec succès"
            ], 200);
        }
    }
}
