<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // Modification du mot de passe
    public function resetPassword(string $id, Request $request){
        $user = User::findOrFail($id);

        $data = $request->validate([
            "password" => "required"
        ]);

        // Hachage du mot de passe
        $data['password'] = Hash::make($data['password']);

        $user->update($data);

        return response()->json([
            "message" => "Mot de passe modifié avec succès"
        ], 200);
    }
}
