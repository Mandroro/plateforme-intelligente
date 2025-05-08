import { CircleUser, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

export default function Header() {
  const redirection = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const connexion = () => {
    redirection("authentification");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getActiveClass = ({ isActive }) => (isActive ? "text-green-600" : "text-white hover:text--500");
  const getActiveClassMobile = ({ isActive }) => (isActive ? "text-green-600" : "text-white hover:text-gray-500");

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-950 z-50">
      <div className="container mx-auto flex items-center justify-between p-3 md:px-6 lg:px-8">
        <NavLink
          to="/"
          className="text-[20px] md:text-[25px] font-[Sora] font-bold"
        >
          <span className="text-white">Job</span>
          <span className="text-green-600">Remote</span>
        </NavLink>
        <nav className="hidden md:flex">
          <ul className="flex space-x-4 lg:space-x-6">
            <li>
              <NavLink
                to="/accueil"
                className={({ isActive }) => `font-[Sora] font-bold text-sm md:text-base ${getActiveClass({ isActive })}`}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/offres"
                className={({ isActive }) => `font-[Sora] font-bold text-sm md:text-base ${getActiveClass({ isActive })}`}
              >
                Offres d'emploi
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/candidats"
                className={({ isActive }) => `font-[Sora] font-bold text-sm md:text-base ${getActiveClass({ isActive })}`}
              >
                Candidats
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/entreprises"
                className={({ isActive }) => `font-[Sora] font-bold text-sm md:text-base ${getActiveClass({ isActive })}`}
              >
                Entreprises
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Affiche sur mobile */}
        <div className="md:hidden space-x-2">
          <button
            onClick={toggleMobileMenu}
            className="text-white font-[Sora] hover:bg-gray-800 font-light text-[14px] p-2 rounded-md flex items-center justify-center cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Modal plein écran pour mobile */}
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 z-40 p-6 flex flex-col items-center justify-center">
            <button
              onClick={toggleMobileMenu}
              className="absolute top-6 right-6 text-white hover:text-gray-300"
            >
              <X className="size-8" />
            </button>
            <nav className="flex flex-col items-center space-y-6">
              <NavLink
                to="/accueil"
                className={({ isActive }) => `font-[Sora] font-bold text-xl ${getActiveClassMobile({ isActive })}`}
                onClick={toggleMobileMenu}
              >
                Accueil
              </NavLink>
              <NavLink
                to="/offres"
                className={({ isActive }) => `font-[Sora] font-bold text-xl ${getActiveClassMobile({ isActive })}`}
                onClick={toggleMobileMenu}
              >
                Offres d'emploi
              </NavLink>
              <NavLink
                to="/candidats"
                className={({ isActive }) => `font-[Sora] font-bold text-xl ${getActiveClassMobile({ isActive })}`}
                onClick={toggleMobileMenu}
              >
                Candidats
              </NavLink>
              <NavLink
                to="/entreprises"
                className={({ isActive }) => `font-[Sora] font-bold text-xl ${getActiveClassMobile({ isActive })}`}
                onClick={toggleMobileMenu}
              >
                Entreprises
              </NavLink>
            </nav>
            <div className="mt-10">
              <button
                onClick={connexion}
                className="text-white hover:text-gray-900 font-[Sora] hover:bg-gray-200 font-light text-[16px] py-3 px-6 rounded-md flex items-center justify-center cursor-pointer"
              >
                <CircleUser className="mr-2 size-5" />
                Se connecter
              </button>
            </div>
          </div>
        )}

        {/* Affiche de bouton sur ordinateur/tablette */}
        <div className="hidden md:flex space-x-3 lg:space-x-4">
          <button
            onClick={connexion}
            className="text-white hover:text-gray-900 font-[Sora] hover:bg-gray-200 font-light text-sm md:text-base py-2 px-4 rounded-md flex items-center justify-center cursor-pointer"
          >
            <CircleUser className="mr-2 size-4" />
            Se connecter
          </button>
        </div>
      </div>
    </header>
  );
}