<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Critere;
use Illuminate\Http\Request;

class CritereController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function show(string $id)
    {
        $critere = Critere::where('offre_id', $id)->get();
        return response()->json([
            "message" => "Liste des critères sur l'offre récupéré avec succès",
            "resultat" => $critere
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "description" => "required",
            "offre_id" => "required"
        ]);

        $critere = Critere::create($data);

        return response()->json([
            "message" => "Critère ajouté avec succès",
            "resultat" => $critere
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $critere = Critere::find($id);

        if (!$critere) {
            return response()->json([
                "message" => "Critère introuvable"
            ], 404);
        } else {
            $critere->delete();
            return response()->json([
                "message" => "Critère supprimé avec succès ",
            ], 200);
        }
    }
}
