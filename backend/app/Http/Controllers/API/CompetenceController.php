<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Competence;
use Illuminate\Http\Request;

class CompetenceController extends Controller
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
            "description" => "required",
            "freelancer_id" => "required"
        ]);

        $competence = Competence::create($data);

        return response()->json([
            "message" => "Compétence ajouté avec succès",
            "resultat" => $competence
        ], 201);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $competence = Competence::find($id);

        if(!$competence){
            return response()->json([
                "message" => "Compétence introuvable"
            ], 404);
        }
        else{
            $competence->delete();
            return response()->json([
                "message" => "Compétence supprimé avec succès"
            ]);
        }
    }
}
