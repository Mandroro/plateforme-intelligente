<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Freelancer;
use App\Models\Recruteur;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    
    public function inscription(Request $request)
    {

        $data = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'role' => 'required'
        ]);

        // Hachage du mot de passe
        $data['password'] = Hash::make($data['password']);

        //Vérifier si l'email existe déjà
        if (User::where('email', $request->email)->exists()) {
            return response()->json(['message' => 'Cet email est déjà utilisé.'], 409);
        }

        $utilisateur = User::create($data);

        if ($data['role'] === 'freelancer') {

            $freelancer = new Freelancer();
            $freelancer->user_id = $utilisateur->id;

            // Compte freelance créer
            $freelancer->save();
        } else {
            
            $recruteur = new Recruteur();
            $recruteur->user_id = $utilisateur->id;

            // Compte recruteur créer
            $recruteur->save();
        }

        return response()->json([
            "message" => "Votre compte a été bien créer",
            "resultat" => $utilisateur
        ], 201);
    }

    public function connexion(Request $request)
    {

        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $credentials['email'])->first();

        if (!$user || !Hash::check($credentials['password'], $user->password)) {
            return response()->json(['message' => 'Identifiants incorrects'], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user
        ]);
    }

    public function deconnexion(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Déconnexion réussie']);
    }
}
