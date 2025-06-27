<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Freelancer;
use App\Models\User;
use Illuminate\Http\Request;

class FreelancerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            "message" => "Liste des freelancers recupéré avec succès",
            "resultat" => Freelancer::with(['user'])->get()
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $profil = User::with(['freelancer.formations', 'freelancer.competences'])->find($id);

        return response()->json([
            "message" => "Détail sur le profil du freelancer récupéré avec succès",
            "resultat" => $profil
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $freelancer = Freelancer::find($id);

        $data = $request->validate([
            "adresse_actuel" => "",
            "num_telephone" => "",
            "poste_travail" => "",
            "photo_identite" => ""
        ]);

        $freelancer->update($data);

        return response()->json([
            "message" => "Profil modifié avec succès",
            "resultat" => $freelancer
        ], 200);
    }
}
