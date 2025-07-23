<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Freelancer;
use App\Models\User;
use Illuminate\Http\Request;

class FreelancerController extends Controller
{

    public function dashboard()
    {
        return response()->json([
            "message" => "Statistique sur le nombre des freelancers récupéré avec succès",
            "resultat" => Freelancer::count()
        ]);
    }

    public function search(Request $request)
    {

        $request->validate([
            'poste_travail' => 'nullable',
            'adresse_actuel' => 'nullable',
        ]);

        if (!$request->filled('poste_travail') && !$request->filled('adresse_actuel')) {
            return response()->json([
                'message' => 'Veuillez fournir au moins un critère de recherche.',
                'resultat' => [],
            ], 400);
        }

        $resultat = Freelancer::with('user')
            ->whereNotNull('poste_travail')
            ->whereNotNull('adresse_actuel')
            ->when($request->filled('poste_travail'), function ($query) use ($request) {
                $query->where('poste_travail', 'LIKE', '%' . $request->poste_travail . '%');
            })
            ->when($request->filled('adresse_actuel'), function ($query) use ($request) {
                $query->where('adresse_actuel', 'LIKE', '%' . $request->adresse_actuel . '%');
            })
            ->get()
            ->map(function ($candidat) {
                return [
                    "id" => $candidat->id,
                    "adresse" => $candidat->adresse_actuel,
                    "telephone" => $candidat->num_telephone,
                    "poste" => $candidat->poste_travail,
                    "user" => [
                        "id" => $candidat->user->id,
                        "email" => $candidat->user->email,
                        "nom" => $candidat->user->name,
                    ]
                ];
            });

        return response()->json([
            "message" => "Résultat de recherche récupéré avec succès",
            "resultat" => $resultat
        ], 200);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $candidats = Freelancer::with(['user'])->where(function ($query) {
            $query->whereNotNull('adresse_actuel')
                ->where('adresse_actuel', '!=', '');
        })
            ->where(function ($query) {
                $query->whereNotNull('poste_travail')
                    ->where('poste_travail', '!=', '');
            })->get()->map(function ($candidat) {
                return [
                    "id" => $candidat->id,
                    "adresse" => $candidat->adresse_actuel,
                    "telephone" => $candidat->num_telephone,
                    "poste" => $candidat->poste_travail,
                    "user" => [
                        "id" => $candidat->user->id,
                        "email" => $candidat->user->email,
                        "nom" => $candidat->user->name,
                    ]
                ];
            });
        return response()->json([
            "message" => "Liste des freelancers recupéré avec succès",
            "resultat" => $candidats
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
