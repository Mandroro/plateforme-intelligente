import { ArrowRight, BriefcaseBusiness, MapPin, Search } from "lucide-react";
import React, { useState } from "react";
import Logo1 from "./../../images/exemple-logo-societe/archetype-consulting.jpeg";
import Logo2 from "./../../images/exemple-logo-societe/ciec-group.jpeg";
import Logo3 from "./../../images/exemple-logo-societe/circuit.jpeg";
import Logo4 from "./../../images/exemple-logo-societe/confluence.jpeg";
import Logo5 from "./../../images/exemple-logo-societe/eci-ingenierie.jpeg";
import Logo6 from "./../../images/exemple-logo-societe/felixe.jpeg";
import Logo7 from "./../../images/exemple-logo-societe/holateams.jpeg";
import Logo8 from "./../../images/exemple-logo-societe/pixoshare.jpeg";
import Logo9 from "./../../images/exemple-logo-societe/Valsoft.jpeg";

export default function Offres() {
  const listeOffre = [
    {
      image: Logo1,
      nom: "Archetype Consulting",
      poste: "Developpeur ReactJs/NextJs",
      lieu: "Paris, France",
    },
    {
      image: Logo2,
      nom: "Ciec Group",
      poste: "Developpeur ReactJs/NextJs",
      lieu: "Paris, France",
    },
    {
      image: Logo3,
      nom: "Circuit",
      poste: "Developpeur ReactJs/NextJs",
      lieu: "Paris, France",
    },
    {
      image: Logo4,
      nom: "Confluence",
      poste: "Developpeur ReactJs/NextJs",
      lieu: "Paris, France",
    },
    {
      image: Logo5,
      nom: "ECI Ingénierie",
      poste: "Developpeur ReactJs/NextJs",
      lieu: "Paris, France",
    },
    {
      image: Logo6,
      nom: "Felixe",
      poste: "Developpeur ReactJs/NextJs",
      lieu: "Paris, France",
    },
    {
      image: Logo7,
      nom: "Holateams",
      poste: "Developpeur Frontend ReactJs",
      lieu: "Paris, France",
    },
    {
      image: Logo8,
      nom: "Pixoshare",
      poste: "Developpeur Backend JAVA",
      lieu: "Allemagne",
    },
    {
      image: Logo9,
      nom: "Valsoft",
      poste: "Developpeur FullStack ReactJs/NextJs - Python",
      lieu: "Paris, France",
    },
    {
      image: Logo1,
      nom: "Autre Entreprise 1",
      poste: "Poste 1",
      lieu: "Lieu 1",
    },
    {
      image: Logo2,
      nom: "Autre Entreprise 2",
      poste: "Poste 2",
      lieu: "Lieu 2",
    },
    {
      image: Logo3,
      nom: "Autre Entreprise 3",
      poste: "Poste 3",
      lieu: "Lieu 3",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const offresPerPage = 6;
  const totalPages = Math.ceil(listeOffre.length / offresPerPage);

  const startIndex = (currentPage - 1) * offresPerPage;
  const endIndex = startIndex + offresPerPage;
  const offresToShow = listeOffre.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gray-900 py-25">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-6 mb-10 md:mb-20">
          <div className="col-start-1 md:col-start-2 col-end-7 md:col-end-6">
            <div className="md:flex">
              <div className="relative flex items-center w-full mb-2 md:mb-0 mr-1">
                <BriefcaseBusiness className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-white border border-gray-200 rounded-md p-4 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Je recherche"
                />
              </div>
              <div className="relative flex items-center w-full mr-2 mb-2 md:mb-0">
                <MapPin className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-white border border-gray-200 rounded-md p-4 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Ville, Région"
                />
              </div>

              {/* Affiche button sur mobile */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="bg-gray-700 text-white font-[Sora] font-light w-full rounded-md p-3 cursor-pointer flex items-center justify-center"
                >
                  Rechercher
                </button>
              </div>

              {/* Affiche button sur ordinateur/tablette */}
              <div className="hidden md:flex">
                <button
                  type="button"
                  className="bg-gray-700 text-white font-[Sora] font-light rounded-md p-3 cursor-pointer"
                >
                  <Search className="size-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-col-1 md:grid-cols-6 gap-4 mb-8">
          {offresToShow.map((l, index) => (
            <div key={index} className="bg-gray-950 col-span-3 flex p-5 rounded-md">
              <img
                src={l.image}
                className="hidden md:flex rounded-md w-1/4 mr-6"
              />
              <div className="leading-8">
                <h1 className="text-white font-[Sora] font-bold text-[19px]">
                  {l.nom}
                </h1>
                <h1 className="text-white font-[Sora] font-thin text-[19px]">
                  {l.poste}
                </h1>
                <p className="flex items-center text-white font-[Sora] font-thin text-[15px] ">
                  <MapPin className="mr-2" />
                  {l.lieu}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 mx-1 rounded-md font-[Sora] ${
                currentPage === 1
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                  : "bg-gray-700 text-white hover:bg-gray-600 cursor-pointer"
              }`}
            >
              Précédent
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-4 py-2 mx-1 rounded-md font-[Sora] ${
                  currentPage === pageNumber
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
                }`}
              >
                {pageNumber}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 mx-1 rounded-md font-[Sora] ${
                currentPage === totalPages
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                  : "bg-gray-700 text-white hover:bg-gray-600 cursor-pointer"
              }`}
            >
              Suivant
            </button>
          </div>
        )}
      </div>
    </div>
  );
}