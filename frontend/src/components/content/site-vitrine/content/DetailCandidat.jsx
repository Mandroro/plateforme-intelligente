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

export default function DetailOffre() {
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
            Détails sur le candidats :
          </h1>
          <h1 className="text-white font-[Sora] font-bold text-[40px] uppercase">
            {data.titre_offre}
          </h1>
          <ul className="text-white font-[Sora] font-extralight flex items-center justify-center space-x-10 mb-8">
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
          </ul>
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
            Retour vers les offres
          </Button>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-6 gap-8 mb-8">
            <div className="col-start-2 col-end-6">
              <div className="p-4 rounded-md mb-3">
                <h1 className="text-white font-[Sora] font-bold">
                  Description
                </h1>
                <p className="text-gray-400 font-[Sora] font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, aut minus nisi voluptates in esse error fugit,
                  officia repellat quo obcaecati animi quam suscipit fugiat nemo
                  corporis quibusdam impedit libero.
                </p>
              </div>
              <div className="p-4 rounded-md mb-3">
                <h1 className="text-white font-[Sora] font-bold">Mission</h1>
                <ul className="mt-3">
                  <li className="text-gray-400 font-[Sora] font-extralight flex items-center mb-3">
                    <CheckCircle2Icon className="mr-2" />
                    Mission 1
                  </li>
                  <li className="text-gray-400 font-[Sora] font-extralight flex items-center mb-3">
                    <CheckCircle2Icon className="mr-2" />
                    Mission 1
                  </li>
                  <li className="text-gray-400 font-[Sora] font-extralight flex items-center mb-3">
                    <CheckCircle2Icon className="mr-2" />
                    Mission 1
                  </li>
                  <li className="text-gray-400 font-[Sora] font-extralight flex items-center mb-3">
                    <CheckCircle2Icon className="mr-2" />
                    Mission 1
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-md">
                <h1 className="text-white font-[Sora] font-bold">
                  Compétence requis
                </h1>
                <ul className="mt-3">
                  <li className="text-gray-400 font-[Sora] font-extralight flex items-center mb-3">
                    <Check className="mr-2" />
                    Mission 1
                  </li>
                  <li className="text-gray-400 font-[Sora] font-extralight flex items-center mb-3">
                    <Check className="mr-2" />
                    Mission 1
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
