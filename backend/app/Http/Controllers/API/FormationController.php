<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Formation;
use Illuminate\Http\Request;

class FormationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "titre_formation" => "required",
            "etablissement" => "required",
            "lieu_formation" => "required",
            "annee_formation" => "required",
            "freelancer_id" => "required"
        ]);

        $formation = Formation::create($data);

        return response()->json([
            "message" => "Formation ajouté avec succès",
            "resultat" => $formation
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $formation = Formation::find($id);

        if(!$formation){
            return response()->json([
                "message" => "Formation introuvable"
            ], 404);
        }
        else{
            $formation->delete();
            return response()->json([
                "message" => "Formation supprimé avec succès ",
            ], 200);
        }
    }
}
