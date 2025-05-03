import { AtSign, LockKeyhole, MoveLeft, User } from "lucide-react";
import React from "react";
import { NavLink, useNavigate } from "react-router";
export default function PageInscription() {
    const redirection =  useNavigate();

    const retourPageAccueil = () => {
        redirection("/");
    }
    const seConnecter = () => {
        redirection("/authentification");
    }
    const creerCompte = () => {
        console.log("Fonctionnalité non disponible !!");
    }

  return (
    <div className="py-2">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-6 space-x-0">
          <div className="bg-gray-900 col-start-1 col-end-4">
            <div className="w-fit p-4 mb-30">
              <h1 className="text-white font-[Sora] font-bold text-[20px]">
                Job<span className="text-green-600">Remote</span>
              </h1>
            </div>
            <div className="justify-items-center p-8 mb-30">
              <h1 className="text-white font-[Sora] font-bold text-[30px]">
                Bienvenue à vous
              </h1>
              <p className="text-white font-[Sora] font-light text-[14px] text-center mb-4">
                Créez un compte gratuit pour découvrir des offres d'emploi, des
                outils de recherche et des opportunités de carrière.
              </p>
              <button onClick={retourPageAccueil} className="text-white p-3 font-[Sora] text-[14px] border border-white rounded-full flex items-center justify-center">
                <MoveLeft className="mr-2" />
                Retour vers la page d'accueil
              </button>
            </div>
            <div className="w-fit p-5"></div>
          </div>
          <div className="bg-white col-start-4 col-end-7 text-center p-8">
            <div className="text-center py-8 mb-8">
              <h1 className="text-gray-900 font-[Sora] font-bold text-[35px]">
                Je m'inscris
              </h1>
              <p className="text-gray-500 font-[Sora] font-light text-[13px]">
                Veuillez remplir tous les informations
              </p>
            </div>
            <div className="space-y-2 mb-8">
              <div className="relative flex items-center w-full mr-2">
                <User className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-white border border-gray-200 rounded-md p-3 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Entrer un pseudo"
                />
              </div>
              <div className="relative flex items-center w-full mr-2">
                <AtSign className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-white border border-gray-200 rounded-md p-3 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Entrer un adresse email"
                />
              </div>
              <div className="relative flex items-center w-full mr-2">
                <LockKeyhole className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-white border border-gray-200 rounded-md p-3 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Entrer un mot de passe"
                />
              </div>
            </div>
            <div className="flex space-x-1">
              <button onClick={seConnecter} className="bg-green-700 text-white font-[Sora] font-light text-[15px] w-full p-2 rounded-md mb-2 cursor-pointer">
                Se connecter
              </button>
              <button onClick={creerCompte} className="bg-blue-600 text-white font-[Sora] font-light text-[15px] w-full p-2 rounded-md mb-2 cursor-pointer">
                Créer mon compte
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
