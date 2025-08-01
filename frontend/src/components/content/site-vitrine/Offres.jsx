import {
  BriefcaseBusiness,
  CalendarDays,
  House,
  MapPin,
  Search,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Logo1 from "./../../images/exemple-logo-societe/archetype-consulting.jpeg";
import { useApiConfig } from "../../../ApiUrlConfiguration";
import { Button } from "@mui/material";
import axios from "axios";

export default function Offres() {
  const { ApiURL } = useApiConfig();
  const [data, setData] = useState([]);
  const [titre, setTitre] = useState("");
  const [lieu, setLieu] = useState("");
  const redirection = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const offresPerPage = 6;

  useEffect(() => {
    donneesOffres();
    const interval = setInterval(donneesOffres, 8000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const donneesOffres = () => {
    axios
      .get(`${ApiURL}/liste-des-offres`)
      .then((response) => {
        if (response.status === 200) {
          setData(response.data.resultat);
        }
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  const listeOffres = data.map((d) => ({
    id: d.id,
    image: Logo1,
    nom: d.recruteur.user.name,
    poste: d.titre,
    date: d.created_at,
    lieu: d.recruteur.adresse,
  }));

  const totalPages = Math.ceil(listeOffres.length / offresPerPage);

  const startIndex = (currentPage - 1) * offresPerPage;
  const endIndex = startIndex + offresPerPage;
  const offresToShow = listeOffres.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Voir les détails sur l'offre
  const voirDetail = (id) => {
    localStorage.setItem("OFFRE_ID_DETAIL", id);
    redirection("/offres/details");
  };

  return (
    <div className="bg-gray-900">
      <div className="bg-gray-800 p-10 md:p-20 text-center text-white font-[Sora]">
        <h1 className="text-[32px] md:text-[40px] font-bold mt-16 md:mt-10 uppercase">Offre d'emploi disponible</h1>
        <p className="font-extralight">Découvrez les nouveaux opportunités disponibles sur notre plateforme</p>
      </div>
      <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-col-1 md:grid-cols-8 gap-4 mb-8">
          {offresToShow.map((l) => (
            <div
              key={l.id}
              onClick={() => voirDetail(l.id)}
              className="bg-gray-950 hover:bg-gray-800 col-span-4 flex p-5 rounded-md cursor-pointer"
            >
              <div className="hidden md:flex items-center w-30 h-30 justify-center bg-green-200 rounded-md mr-5">
                <h1 className="text-green-600 font-[Sora] text-[80px] uppercase">
                  {l.poste.charAt(0)}
                </h1>
              </div>
              <div className="leading-8">
                <h1 className="text-white font-[Sora] font-bold text-[19px] uppercase">
                  {l.poste}
                </h1>
                <h1 className="text-gray-500 font-[Sora] font-light text-[15px] capitalize">
                  {l.nom}
                </h1>
                <p className="flex items-center text-gray-500 font-[Sora] font-light text-[15px]">
                  <CalendarDays className="mr-2" />
                  Publié le : {l.date}
                </p>
                <p className="flex items-center text-gray-500 font-[Sora] font-light text-[15px] ">
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
