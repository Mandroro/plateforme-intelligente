<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Offre;
use Illuminate\Http\Request;

class OffreController extends Controller
{   
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            "message" => "Liste des offres récupéré avec succès",
            "resultat" => Offre::with('recruteur.user')->get()
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
        $offre = Offre::findOrFail($id);

        if (!$offre) {
            return response()->json([
                "message" => "Aucun données correspondante"
            ], 404);
        } else {
            return response()->json([
                "message" => "Détail sur l'offre récuperé avec succès",
                "data" => $offre
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
