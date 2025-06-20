<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Mission;
use Illuminate\Http\Request;

class MissionController extends Controller
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
            "offre_id" => "required"
        ]);

        $mission = Mission::create($data);

        return response()->json([
            "message" => "Mission ajouté avec succès",
            "resultat" => $mission
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $mission = Mission::find($id);

        if(!$mission){
            return response()->json([
                "message" => "Mission introuvable"
            ], 404);
        }
        else{
            $mission->delete();
            return response()->json([
                "message" => "Mission supprimé avec succès ",
            ], 200);
        }
    }
}
