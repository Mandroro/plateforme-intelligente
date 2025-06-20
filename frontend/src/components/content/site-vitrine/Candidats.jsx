import { BriefcaseBusiness, Mail, MapPin, Search } from "lucide-react";
import { useEffect, useState } from "react";
import Profil1 from "./../../images/exemple-profil-candidat/1.png";
import Profil2 from "./../../images/exemple-profil-candidat/2.jpeg";
import Profil3 from "./../../images/exemple-profil-candidat/3.jpeg";
import Profil4 from "./../../images/exemple-profil-candidat/4.jpeg";
import Profil5 from "./../../images/exemple-profil-candidat/5.jpeg";
import Profil6 from "./../../images/exemple-profil-candidat/6.jpeg";
import Profil7 from "./../../images/exemple-profil-candidat/7.jpg";
import Profil8 from "./../../images/exemple-profil-candidat/8.jpeg";
import { useApiConfig } from "../../../ApiUrlConfiguration";
import axios from "axios";

export default function Candidats() {
  const { ApiURL } = useApiConfig();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 6;

  useEffect(() => {
    axios
      .get(`${ApiURL}/liste-des-candidats`)
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.resultat);
        }
      })
      .catch((error) => {
        console.log("Erreur inattendue: ", error);
      });
  }, []);

  const listeCandidats = data.map((d) => ({
    image: Profil1,
    nom: d.user.name,
    poste: d.poste_travail,
    email:d.user.email,
    lieu: d.adresse_actuel,
  }));

  const totalPages = Math.ceil(listeCandidats.length / dataPerPage);

  const startIndex = (currentPage - 1) * dataPerPage;
  const endIndex = startIndex + dataPerPage;
  const dataToShow = listeCandidats.slice(startIndex, endIndex);

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
                  placeholder="Poste du candidat"
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
          {dataToShow.map((l, index) => (
            <div
              key={index}
              className="bg-gray-950 hover:bg-gray-800 col-span-3 flex p-5 rounded-md cursor-pointer"
            >
              <img
                src={l.image}
                className="hidden md:flex rounded-md w-1/4 mr-6"
              />
              <div className="leading-8">
                <h1 className="text-white font-[Sora] font-bold text-[19px] mb-1">
                  {l.nom}
                </h1>
                <p className="flex items-center text-gray-500 font-[Sora] font-light text-[15px]">
                  {/* <BriefcaseBusiness className="mr-2" /> */}
                  {l.poste}
                </p>
                <p className="flex items-center text-gray-500 font-[Sora] font-light text-[15px]">
                  <Mail className="mr-2" />
                  {l.email}
                </p>
                <p className="flex items-center text-gray-500 font-[Sora] font-light text-[15px]">
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
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
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
              )
            )}
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
