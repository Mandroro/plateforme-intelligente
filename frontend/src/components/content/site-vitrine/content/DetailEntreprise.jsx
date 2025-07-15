import { useLocation } from "react-router";
import { useApiConfig } from "../../../../ApiUrlConfiguration";
import { Button } from "@mui/material";
import {
  BriefcaseBusiness,
  Building,
  CalendarDays,
  Check,
  CheckCircle2Icon,
  ChevronLeft,
  Circle,
  MapPin,
} from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DetailEntreprise() {
  const { ApiURL } = useApiConfig();
  const id = localStorage.getItem("OFFRE_ID_DETAIL");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${ApiURL}/liste-des-offres/${id}`)
      .then((response) => {
        console.log(response.data.resultat);
        setData(response.data.resultat);
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  }, [id]);

  return (
    <>
      <div className="bg-gray-800 my-12 p-20">
        <div className="text-center space-y-4">
          <h1 className="text-white font-[Sora] text-[18px]">
            Détails sur l'entreprise :
          </h1>
          <h1 className="text-white font-[Sora] font-bold text-[40px] uppercase">
            Nom de l'entreprise
          </h1>
          {/* <ul className="text-white font-[Sora] font-extralight flex items-center justify-center space-x-10 mb-8">
            <li className="flex items-center">
              <Building className="mr-2" />
              Recruteur : Hi-tech
            </li>
            <li className="flex items-center">
              <MapPin className="mr-2" />
              Lieu : Paris, France
            </li>
            <li className="flex items-center">
              <CalendarDays className="mr-2" />
              Publié le : 19 Juin 2025
            </li>
          </ul> */}
          <Button
            variant="contained"
            sx={{
              color: "white",
              fontFamily: "Sora",
              textTransform: "inherit",
              borderRadius: 50,
            }}
            startIcon={<ChevronLeft />}
          >
            Retour vers la liste des entreprises
          </Button>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-6 gap-6 mb-8">
            <div className="col-start-2 col-end-6">
              <div className="mb-4 space-y-2">
                <h1 className="text-white font-[Sora] font-bold">
                  Adresse email
                </h1>
                <p className="text-gray-400 font-[Sora] font-light bg-gray-800 p-4 rounded-md">
                  example@gmail.com
                </p>
              </div>
              <div className="mb-4 space-y-2">
                <h1 className="text-white font-[Sora] font-bold">Secteur de travail</h1>
                <p className="text-gray-400 font-[Sora] font-light bg-gray-800 p-4 rounded-md">
                  Exemple de secteur de travail
                </p>
              </div>
              <div className="mb-4 space-y-2">
                <h1 className="text-white font-[Sora] font-bold">URL du site web</h1>
                <p className="text-gray-400 font-[Sora] font-light bg-gray-800 p-4 rounded-md">
                  example de url site web
                </p>
              </div>
              <div className="mb-4 space-y-2">
                <h1 className="text-white font-[Sora] font-bold">Contact</h1>
                <p className="text-gray-400 font-[Sora] font-light bg-gray-800 p-4 rounded-md">
                  000000000
                </p>
              </div>
              <div className="mb-4 space-y-2">
                <h1 className="text-white font-[Sora] font-bold">Lieu</h1>
                <p className="text-gray-400 font-[Sora] font-light bg-gray-800 p-4 rounded-md">
                  Example_lieu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
