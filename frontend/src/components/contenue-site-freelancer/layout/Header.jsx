import { Lock } from "lucide-react";
import React from "react";
import { NavLink, useNavigate } from "react-router"; 

export default function Header() {
  const redirection = useNavigate();
  const connexion = () => {
    redirection("/authentification");
  }
  const inscription = () => {
    redirection("/inscription");
  }
  const espaceRecruteur = () => {
    redirection("/espace-recruteur");
  }
  return (
    <header className="bg-gray-950">
      <div className="container mx-auto flex items-center justify-between p-3">
        <NavLink to ="/" className="text-white text-2xl font-[Sora] font-bold">
          JobRemote
        </NavLink>
        {/* <nav className="hidden md:flex">
          <ul className="flex space-x-6">
          <li>
              <a
                href="#"
                className="text-white font-[Sora] font-bold hover:text-blue-600"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white font-[Sora] font-bold hover:text-blue-600"
              >
                Offres
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white font-[Sora] font-bold hover:text-blue-600"
              >
                A propos
              </a>
            </li>
          </ul>
        </nav> */}
        <div className="hidden md:flex space-x-2">
          <button onClick={connexion} className="text-white hover:text-gray-900 font-[Sora] hover:bg-gray-200 font-light text-[14px] p-2 rounded-md flex items-center justify-center cursor-pointer">
            <Lock className="mr-2"/>
            Connexion
          </button>
          <button onClick={inscription} className="text-white bg-blue-600 font-[Sora] font-light text-[14px] p-2 rounded-md flex items-center justify-center cursor-pointer">
            Inscription
          </button>
          <button onClick={espaceRecruteur} className="text-white bg-green-700 font-[Sora] font-light text-[14px] p-2 rounded-md flex items-center justify-center cursor-pointer">
            Espace recruteur
          </button>
        </div>
      </div>
    </header>
  );
}
