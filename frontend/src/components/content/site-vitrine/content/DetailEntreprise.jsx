import { useNavigate } from "react-router";
import { useApiConfig } from "../../../../ApiUrlConfiguration";
import { Button } from "@mui/material";
import {
  ChevronLeft,
} from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DetailEntreprise() {
  const { ApiURL } = useApiConfig();
  const redirection = useNavigate();
  const id = localStorage.getItem("ENTREPRISE_ID_DETAIL");
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    axios
      .get(`${ApiURL}/liste-des-entreprises/${id}`)
      .then((response) => {
        console.log(response.data.resultat);
        setData(response.data.resultat);
        setDataUser(response.data.resultat.user);
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  }, [id]);

  const retourEntreprise = () => {
    localStorage.removeItem("ENTREPRISE_ID_DETAIL");
    redirection("/entreprises");
  }


  return (
    <>
      <div className="bg-gray-800 my-12 p-20">
        <div className="text-center space-y-4">
          <h1 className="text-white font-[Sora] text-[18px]">
            Détails sur l'entreprise :
          </h1>
          <h1 className="text-white font-[Sora] font-bold text-[40px] uppercase mb-8">
            {dataUser.name}
          </h1>
          <Button
          onClick={retourEntreprise}
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
                  {dataUser.email}
                </p>
              </div>
              <div className="mb-4 space-y-2">
                <h1 className="text-white font-[Sora] font-bold">Secteur de travail</h1>
                <p className="text-gray-400 font-[Sora] font-light bg-gray-800 p-4 rounded-md">
                  {data.secteur_travail || "Aucun"}
                </p>
              </div>
              <div className="mb-4 space-y-2">
                <h1 className="text-white font-[Sora] font-bold">URL du site web</h1>
                <p className="text-gray-400 font-[Sora] font-light bg-gray-800 p-4 rounded-md">
                  {data.url_siteweb || "Aucun"}
                </p>
              </div>
              <div className="mb-4 space-y-2">
                <h1 className="text-white font-[Sora] font-bold">Contact</h1>
                <p className="text-gray-400 font-[Sora] font-light bg-gray-800 p-4 rounded-md">
                  {data.num_telephone || "Aucun"}
                </p>
              </div>
              <div className="mb-4 space-y-2">
                <h1 className="text-white font-[Sora] font-bold">Lieu</h1>
                <p className="text-gray-400 font-[Sora] font-light bg-gray-800 p-4 rounded-md">
                  {data.adresse_actuel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
