import { useApiConfig } from "../../../../ApiUrlConfiguration";
import { Button } from "@mui/material";
import {
  BriefcaseBusiness,
  Building,
  CalendarDays,
  Check,
  CheckCircle2Icon,
  ChevronLeft,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function DetailCandidat() {
  const { ApiURL } = useApiConfig();
  const redirection = useNavigate();
  const id = localStorage.getItem("CANDIDAT_ID_DETAIL");
  const [data, setData] = useState([]);
  const [dataFreelancer, setDataFreelancer] = useState([]);
  const [dataFormation, setDataFormation] = useState([]);
  const [dataCompetence, setDataCompetence] = useState([]);

  useEffect(() => {
    axios
      .get(`${ApiURL}/liste-des-candidats/${id}`)
      .then((response) => {
        console.log(response.data.resultat);
        setData(response.data.resultat);
        setDataFreelancer(response.data.resultat.freelancer);
        setDataFormation(response.data.resultat.freelancer.formations);
        setDataCompetence(response.data.resultat.freelancer.competences);
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  }, [id]);

  const retourCandidats = () => {
    localStorage.removeItem("CANDIDAT_ID_DETAIL");
    redirection("/candidats");
  };

  return (
    <>
      <div className="bg-gray-800 my-12 p-20">
        <div className="text-center space-y-4">
          <h1 className="text-white font-[Sora] text-[18px]">
            Détails sur le candidats :
          </h1>
          <h1 className="text-white font-[Sora] font-bold text-[40px] uppercase">
            {data.name}
          </h1>
          <ul className="text-white font-[Sora] font-extralight flex items-center justify-center space-x-10 mb-8">
            <li className="flex items-center">
              <BriefcaseBusiness className="mr-2" />
              Poste : {dataFreelancer.poste_travail}
            </li>
            <li className="flex items-center">
              <MapPin className="mr-2" />
              Lieu : {dataFreelancer.adresse_actuel}
            </li>
            <li className="flex items-center">
              <Mail className="mr-2" />
              Email : {data.email}
            </li>
          </ul>
          <Button
            onClick={retourCandidats}
            variant="contained"
            sx={{
              color: "white",
              fontFamily: "Sora",
              textTransform: "inherit",
              borderRadius: 50,
            }}
            startIcon={<ChevronLeft />}
          >
            Retour vers la liste des candidats
          </Button>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-6 gap-8 mb-8">
            <div className="col-start-2 col-end-6">
              <div className="p-4 rounded-md mb-3">
                <h1 className="text-white font-[Sora] font-bold">Formation</h1>
                <ul className="mt-3">
                  {dataFormation.length > 0 ? (
                    dataFormation.map((d) => (
                      <li className="text-gray-400 font-[Sora] font-extralight mb-3">
                        <h1 className="text-white  font-[Sora]">
                          {d.titre_formation} - {d.annee_formation}
                        </h1>
                        <p className="text-gray-500  font-[Sora]">
                          {d.etablissement} - {d.lieu_formation}
                        </p>
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-400 font-[Sora] font-extralight">
                      Aucun données disponible
                    </p>
                  )}
                </ul>
              </div>
              <div className="p-4 rounded-md">
                <h1 className="text-white font-[Sora] font-bold">Compétence</h1>
                <ul className="mt-3">
                  {dataCompetence.length > 0 ? (
                    dataCompetence.map((d, index) => (
                      <li className="text-gray-400 font-[Sora] font-extralight flex items-center mb-3">
                        <Check className="mr-2" />
                        {d.description}
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-400 font-[Sora] font-extralight">
                      Aucun données disponible
                    </p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
