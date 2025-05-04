import { AtSign, LockKeyhole, MoveLeft, User } from "lucide-react";
import React from "react";
import { NavLink, useNavigate } from "react-router";
export default function PageInscription() {
  const redirection = useNavigate();

  const retourPageAccueil = () => {
    redirection("/");
  };
  const creerCompte = () => {
    console.log("Fonctionnalité non disponible !!");
  };

  return (
    <div className="py-10 md:py-18">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-6 space-x-0">
          <div className="col-start-3 md:col-start-2 col-end-5 md:col-end-6 text-center p-4">
            <div className="text-center py-4 mb-8">
              <h1 className="text-white font-[Sora] font-bold text-[35px]">
                Job<span className="text-green-600">Remote</span>
              </h1>
              <p className="text-gray-300 font-[Sora] font-light text-[14px]">
                Créez un compte gratuit pour découvrir des opportunités de carrière.
              </p>
            </div>
            <div className="space-y-2 mb-4">
              <div className="relative flex items-center w-full mr-2">
                <User className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-gray-200 border border-gray-200 rounded-md p-3 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Entrer un pseudo"
                />
              </div>
              <div className="relative flex items-center w-full mr-2">
                <AtSign className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-gray-200 border border-gray-200 rounded-md p-3 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Entrer un adresse email"
                />
              </div>
              <div className="relative flex items-center w-full mr-2">
                <LockKeyhole className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-gray-200 border border-gray-200 rounded-md p-3 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Entrer un mot de passe"
                />
              </div>
            </div>
            <div className="space-x-1">
              <button
                onClick={creerCompte}
                className="bg-blue-600 text-white font-[Sora] font-light text-[14px] w-full p-2 rounded-md mb-2 cursor-pointer"
              >
                Créer mon compte
              </button>
              <button
                onClick={retourPageAccueil}
                className="text-white hover:bg-gray-300 hover:text-gray-900 font-[Sora] font-light text-[14px] w-full p-2 rounded-md mb-2 cursor-pointer flex items-center justify-center"
              >
                Retour vers la page d'accueil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
