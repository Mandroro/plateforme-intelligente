<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Recruteur;
use App\Models\User;
use Illuminate\Http\Request;

class RecruteurController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() {
        return response()->json([
            "message" => "Liste des récruteur recupéré avec succès",
            "resultat" => Recruteur::with(['user'])->get()
        ], 200);
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $profil = User::with('recruteur')->find($id);

        return response()->json([
            "resultat" => $profil
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $profil = User::with('recruteur')->find($id);

        $recruteur = $profil->recruteur;

        $data = $request->validate([
            "url_siteweb" => "",
            "adresse_actuel" => "",
            "num_telephone" => "",
            "secteur_travail" => "",
            "logo_entreprise" => "",
        ]);

        $recruteur->update($data);

        return response()->json([
            "message" => "Profil modifié avec succès",
            "resultat" => $recruteur
        ], 200);
    }
}
