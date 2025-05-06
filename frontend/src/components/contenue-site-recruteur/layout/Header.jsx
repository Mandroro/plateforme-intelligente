import { CircleUser } from "lucide-react";
import React from "react";
import { NavLink, useNavigate } from "react-router";

export default function Header() {
  const redirection = useNavigate();
  const seConnecter = () => {
    redirection("/authentification");
  }
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-950 z-50">
      <div className="container mx-auto flex items-center justify-between p-3">
        <NavLink
          to="/"
          className="text-[20px] md:text-[30px] font-[Sora] font-bold"
        >
          <span className="text-white">Job</span>
          <span className="text-green-600">Remote</span>
        </NavLink>

        {/* Affiche sur mobile */}
        <div className="md:hidden space-x-2">
          <button
            onClick={null}
            className="text-gray-900 font-[Sora] hover:bg-gray-200 font-light text-[14px] p-2 rounded-md flex items-center justify-center cursor-pointer"
          >
            <CircleUser className="size-8"/>
          </button>
        </div>

        {/* Affiche de bouton sur ordinateur/tablette */}
        <div className="hidden md:flex space-x-2">
          <button
            onClick={seConnecter}
            className="text-white hover:text-gray-900 font-[Sora] hover:bg-gray-200 font-light text-[14px] p-2 rounded-md flex items-center justify-center cursor-pointer"
          >
            <CircleUser className="mr-2" />
            Se connecter
          </button>
        </div>
      </div>
    </header>
  );
}
