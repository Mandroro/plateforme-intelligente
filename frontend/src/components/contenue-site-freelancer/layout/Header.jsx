import { CircleUser } from "lucide-react";
import React from "react";
import { NavLink, useNavigate } from "react-router";

export default function Header() {
  const redirection = useNavigate();
  const connexion = () => {
    redirection("/authentification");
  };
  const inscription = () => {
    redirection("/inscription");
  };
  const espaceRecruteur = () => {
    redirection("/espace-recruteur");
  };
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between p-3">
        <NavLink
          to="/"
          className="text-[20px] md:text-[30px] font-[Sora] font-bold"
        >
          <span className="text-white">Job</span>
          <span className="text-green-600">Remote</span>
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

        {/* Affiche sur mobile */}
        <div className="md:hidden space-x-2">
          <button
            onClick={connexion}
            className="text-gray-900 font-[Sora] hover:bg-gray-200 font-light text-[14px] p-2 rounded-md flex items-center justify-center cursor-pointer"
          >
            <CircleUser className="size-8"/>
          </button>
        </div>

        {/* Affiche de bouton sur ordinateur/tablette */}
        <div className="hidden md:flex space-x-2">
          <button
            onClick={connexion}
            className="text-white hover:text-gray-900 font-[Sora] hover:bg-gray-200 font-light text-[14px] p-2 rounded-md flex items-center justify-center cursor-pointer"
          >
            <CircleUser className="mr-2" />
            Se connecter
          </button>
          <button
            onClick={inscription}
            className="text-white bg-blue-600 font-[Sora] font-light text-[14px] p-2 rounded-md flex items-center justify-center cursor-pointer"
          >
            S'inscrire
          </button>
          <button
            onClick={espaceRecruteur}
            className="text-white bg-green-700 font-[Sora] font-light text-[14px] p-2 rounded-md flex items-center justify-center cursor-pointer"
          >
            Espace recruteur
          </button>
        </div>
      </div>
    </header>
  );
}
