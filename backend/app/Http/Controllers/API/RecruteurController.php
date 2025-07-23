<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Recruteur;
use App\Models\User;
use Illuminate\Http\Request;

class RecruteurController extends Controller
{
    public function dashboard()
    {
        return response()->json([
            "message" => "Statistique sur le nombre des recruteurs récupéré avec succès",
            "resultat" => Recruteur::count()
        ]);
    }

    public function search(Request $request)
    {
        $request->validate([
            'secteur_travail' => 'nullable',
            'adresse_actuel' => 'nullable',
        ]);

        if (!$request->filled('poste_travail') && !$request->filled('adresse_actuel')) {
            return response()->json([
                'message' => 'Veuillez fournir au moins un critère de recherche.',
                'resultat' => [],
            ], 400);
        }

        $resultat = Recruteur::with('user')
            ->whereNotNull('secteur_travail')
            ->whereNotNull('adresse_actuel')
            ->when($request->filled('secteur_travail'), function ($query) use ($request) {
                $query->where('secteur_travail', 'LIKE', '%' . $request->secteur_travail . '%');
            })
            ->when($request->filled('adresse_actuel'), function ($query) use ($request) {
                $query->where('adresse_actuel', 'LIKE', '%' . $request->adresse_actuel . '%');
            })
            ->get()
            ->map(function ($recruteur) {
                return [
                    "id" => $recruteur->id,
                    "adresse" => $recruteur->adresse_actuel,
                    "secteur" => $recruteur->secteur_travail,
                    "user" => [
                        "id" => $recruteur->user->id,
                        "email" => $recruteur->user->email,
                        "nom" => $recruteur->user->name,
                    ]
                ];
            });

        return response()->json([
            "message" => "Résultat de recherche récupéré avec succès",
            "resultat" => $resultat
        ], 200);
    }


    public function detail(string $id)
    {
        $detail = Recruteur::with('user')->find($id);

        return response()->json([
            "resultat" => $detail
        ], 200);
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $recruteurs = Recruteur::with(['user'])->where(function ($query) {
            $query->whereNotNull('adresse_actuel')
                ->where('adresse_actuel', '!=', '');
        })
            ->where(function ($query) {
                $query->whereNotNull('secteur_travail')
                    ->where('secteur_travail', '!=', '');
            })->get()->map(function ($recruteur) {
                return [
                    "id" => $recruteur->id,
                    "adresse" => $recruteur->adresse_actuel,
                    "secteur" => $recruteur->secteur_travail,
                    "user" => [
                        "id" => $recruteur->user->id,
                        "email" => $recruteur->user->email,
                        "nom" => $recruteur->user->name,
                    ]
                ];
            });
        return response()->json([
            "message" => "Liste des recruteurs recupéré avec succès",
            "resultat" => $recruteurs
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
        $recruteur = Recruteur::find($id);

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
