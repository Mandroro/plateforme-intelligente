import { AtSign, LockKeyhole, MoveLeft, User } from "lucide-react";
import React from "react";
import { NavLink, useNavigate } from "react-router";
export default function PageAuthentification() {
  const redirection = useNavigate();

  const retourPageAccueil = () => {
    redirection("/");
  };
  const seConnecter = () => {
    redirection("/authentification");
  };

  return (
    <div className="py-8">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-6 space-x-0">
          <div className="bg-white col-start-3 col-end-5 p-8 rounded-md">
            <div className="text-center py-8 mb-8">
              <h1 className="text-gray-900 font-[Sora] font-bold text-[40px]">
                Job<span className="text-green-600">Remote</span>
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
                <LockKeyhole className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-white border border-gray-200 rounded-md p-3 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Entrer un mot de passe"
                />
              </div>
              <NavLink
                className={
                  "text-gray-500 font-[Sora] text-[13px] hover:text-blue-600"
                }
              >
                Mot de passe oublié ?
              </NavLink>
            </div>
            <button
              onClick={seConnecter}
              className="bg-blue-600 text-white font-[Sora] font-light text-[15px] w-full p-2 rounded-md mb-2 cursor-pointer"
            >
              Se connecter
            </button>
            <button
              onClick={retourPageAccueil}
              className="text-gray-900 p-2 font-[Sora] text-[14px] w-full hover:bg-gray-300 rounded-md cursor-pointer"
            >
              Retour vers la page d'accueil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
