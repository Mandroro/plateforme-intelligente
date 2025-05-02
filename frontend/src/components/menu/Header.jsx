import { CircleUserRound, Lock, LogIn, User } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-950">
      <div className="container mx-auto flex items-center justify-between p-3">
        <a href="#" className="text-white text-2xl font-[Sora] font-bold">
          JobRemote
        </a>
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
          <button className="text-white hover:text-gray-900 font-[Sora] hover:bg-gray-200 font-light p-2 rounded-md flex items-center justify-center">
            <Lock className="mr-2 text-whit"/>
            Connexion
          </button>
          <button className="text-white bg-blue-600 font-[Sora] font-light p-2 rounded-md flex items-center justify-center">
            Inscription
          </button>
          <button className="text-white bg-green-700 font-[Sora] font-light p-2 rounded-md flex items-center justify-center">
            Espace recruteur
          </button>
        </div>
      </div>
    </header>
  );
}
