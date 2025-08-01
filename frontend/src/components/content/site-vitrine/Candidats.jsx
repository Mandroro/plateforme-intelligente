import { BriefcaseBusiness, Mail, MapPin, Search, User } from "lucide-react";
import { useEffect, useState } from "react";
import Profil1 from "./../../images/exemple-profil-candidat/1.png";
import { useApiConfig } from "../../../ApiUrlConfiguration";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Candidats() {
  const { ApiURL } = useApiConfig();
  const redirection = useNavigate();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 6;

  useEffect(() => {
    donneesCandidats();
    const interval = setInterval(donneesCandidats, 8000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const donneesCandidats = () => {
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
  };

  const listeCandidats = data.map((d) => ({
    id: d.id,
    image: Profil1,
    nom: d.user.nom,
    poste: d.poste,
    email: d.user.email,
    lieu: d.adresse,
  }));

  const totalPages = Math.ceil(listeCandidats.length / dataPerPage);

  const startIndex = (currentPage - 1) * dataPerPage;
  const endIndex = startIndex + dataPerPage;
  const dataToShow = listeCandidats.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const voirDetail = (id) => {
    localStorage.setItem("CANDIDAT_ID_DETAIL", id);
    redirection("/candidats/details");
  };

  return (
    <div className="bg-gray-900">
      <div className="bg-gray-800 p-10 md:p-20 font-[Sora] text-white text-center">
        <h1 className="text-[30px] md:text-[40px] mt-16 md:mt-10 font-bold uppercase">Nos talents freelancers</h1>
        <p className=" font-extralight">
          Découvrez les freelancers talentueux inscrits sur notre
          plateforme.
        </p>
      </div>
      <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-col-1 md:grid-cols-6 gap-4 mb-8">
          {dataToShow.map((l, index) => (
            <div
              key={index}
              onClick={() => voirDetail(l.id)}
              className="bg-gray-950 hover:bg-gray-800 col-span-3 flex p-5 rounded-md cursor-pointer"
            >
              <div className="hidden md:flex w-30 h-30 items-center justify-center bg-green-200 rounded-md mr-6">
                <h1 className="font-[Sora] text-[80px] text-green-600">
                  {l.nom.charAt(0)}
                </h1>
              </div>
              <div className="leading-8">
                <h1 className="text-white font-[Sora] font-bold text-[19px] uppercase">
                  {l.nom}
                </h1>
                <p className="flex items-center text-gray-500 font-[Sora] font-light text-[15px]">
                  Poste : {l.poste}
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
