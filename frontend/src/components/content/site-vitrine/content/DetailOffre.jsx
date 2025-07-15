import { useNavigate } from "react-router";
import { useApiConfig } from "../../../../ApiUrlConfiguration";
import { Button, Typography } from "@mui/material";
import {
  CalendarDays,
  Check,
  CheckCircle2Icon,
  ChevronLeft,
  House,
  MapPin,
} from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DetailOffre() {
  const { ApiURL } = useApiConfig();
  const redirection = useNavigate();
  const id = localStorage.getItem("OFFRE_ID_DETAIL");
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [dataRecruteur, setDataRecruteur] = useState([]);
  const [dataMission, setDataMission] = useState([]);
  const [dataCritere, setDataCritere] = useState([]);

  useEffect(() => {
    axios
      .get(`${ApiURL}/liste-des-offres/${id}`)
      .then((response) => {
        if (response.status === 200 && response.data.resultat !== null) {
          listeMissions(response.data.resultat.id);
          listeCriteres(response.data.resultat.id);
          setData(response.data.resultat);
          setDataRecruteur(response.data.resultat.recruteur);
          setDataUser(response.data.resultat.recruteur.user);
        }
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  }, [id]);

  const listeMissions = (id) => {
    axios
      .get(`${ApiURL}/liste-des-missions/${id}`)
      .then((response) => {
        console.log("Liste missions:", response.data.resultat);
        setDataMission(response.data.resultat);
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  const listeCriteres = (id) => {
    axios
      .get(`${ApiURL}/liste-des-criteres/${id}`)
      .then((response) => {
        console.log("Liste criteres:", response.data.resultat);
        setDataCritere(response.data.resultat);
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  const retourOffre = () => {
    localStorage.removeItem("OFFRE_ID_DETAIL");
    redirection('/offres');
  }

  return (
    <>
      <div className="bg-gray-800 my-12 p-20">
        <div className="text-center space-y-4">
          <h1 className="text-white font-[Sora] text-[18px]">
            Détails sur l'offre :
          </h1>
          <h1 className="text-white font-[Sora] font-bold text-[40px] uppercase">
            {data.titre}
          </h1>
          <ul className="text-white font-[Sora] font-extralight flex items-center justify-center space-x-10 mb-8">
            <li className="flex items-center">
              <House className="mr-2" />
              Recruteur : <Typography sx={{ml:1, fontFamily:"Sora", fontWeight:"light", textTransform:"capitalize"}}>{dataUser.name}</Typography>
            </li>
            <li className="flex items-center">
              <MapPin className="mr-2" />
              Lieu : {dataRecruteur.adresse}
            </li>
            <li className="flex items-center">
              <CalendarDays className="mr-2" />
              Publié le : {data.created_at}
            </li>
          </ul>
          <Button
            onClick={retourOffre}
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
                  {data.description || <p className="text-gray-400 font-[Sora] font-extralight">Aucun données disponible</p>}
                </p>
              </div>
              <div className="p-4 rounded-md mb-3">
                <h1 className="text-white font-[Sora] font-bold">Mission</h1>
                <ul className="mt-3">
                  {dataMission.length > 0
                    ? dataMission.map((d, index) => (
                        <li className="text-gray-400 font-[Sora] font-extralight flex items-center mb-3">
                          <CheckCircle2Icon className="mr-2" />
                          {d.description}
                        </li>
                      ))
                    : <p className="text-gray-400 font-[Sora] font-extralight">Aucun données disponible</p>}
                </ul>
              </div>
              <div className="p-4 rounded-md">
                <h1 className="text-white font-[Sora] font-bold">
                  Compétence requis
                </h1>
                <ul className="mt-3">
                  {dataCritere.length > 0
                    ? dataCritere.map((d, index) => (
                        <li className="text-gray-400 font-[Sora] font-extralight flex items-center mb-3">
                          <Check className="mr-2" />
                          {d.description}
                        </li>
                      ))
                    : <p className="text-gray-400 font-[Sora] font-extralight">Aucun données disponible</p>}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
