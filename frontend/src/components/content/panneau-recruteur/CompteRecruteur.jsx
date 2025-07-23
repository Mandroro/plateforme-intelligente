import { useState, useEffect } from "react";
import Profil1 from "./../../images/exemple-logo-societe/archetype-consulting.jpeg";
import { PenBox } from "lucide-react";
import InformationProfil from "./modal/InformationProfil";
import { useApiConfig } from "../../../ApiUrlConfiguration";
import axios from "axios";
import { Button } from "@mui/material";

export default function CompteRecruteur() {
  const { ApiURL } = useApiConfig();
  const token = localStorage.getItem("token");
  const [id, setId] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [secteurTravail, setSecteurTravail] = useState("");
  const [urlSite, setUrlSite] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");
  const [open, setOpen] = useState(false);

  const [newPassword, setNewPassword] = useState("");


  useEffect(() => {
    donneesUtilisateur();
    const interval = setInterval(donneesUtilisateur, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [])

  const donneesUtilisateur = () => {
    axios.get(`${ApiURL}/utilisateur`,{
      headers:{
        "Authorization":`Bearer ${token}`
      }
    }).then((response) => {
      setId(response.data.id);
      setNom(response.data.name);
      setEmail(response.data.email);
      recruteur(response.data.id);
    }).catch((error) => {
      console.log("Erreur inattendue:", error);
    })
  }

  const recruteur = (id) => {
    axios.get(`${ApiURL}/recruteurs/${id}`, {
      headers:{
        "Authorization":`Bearer ${token}`
      }
    }).then((response) => {
      setSecteurTravail(response.data.resultat.recruteur.secteur_travail);
      setUrlSite(response.data.resultat.recruteur.url_siteweb);
      setAdresse(response.data.resultat.recruteur.adresse_actuel);
      setTelephone(response.data.resultat.recruteur.num_telephone);
    }).catch((error) => {
      console.log("Erreur inattendue:", error);
    })
  }

  const ouvrirInformationProfil = () => {
    setOpen(true);
  };
  const fermerInformationProfil = () => {
    setOpen(false);
  };

    // Gérer mot de passe
  const changerMotpasse = (e) => {
    e.preventDefault();

    const data = {
      password: newPassword,
    };

    axios
      .put(`${ApiURL}/utilisateurs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setNewPassword("");
          console.log(response.data.message);
        }
      }).catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  return (
    <>
      <div className="bg-gray-800 p-18 md:p-20 relative mb-18 md:mb-14">
        <div className="absolute top-14 left-8 text-center bg-green-700 font-[Sora] w-40 h-40 rounded-full">
          <h1 className="text-[110px] text-white uppercase">{nom.charAt(0)}</h1>
        </div>
      </div>

      <div className="p-8">

        {/* Information compte */}
        <div className="grid grid-cols-6 gap-2 mb-8">
          <div className="col-start-1 col-end-7 md:col-end-4 bg-gray-800 rounded-md p-3">
            <label className="text-white font-[Sora]">
              Nom de l'entreprise
            </label>
            <input
              className=" w-full border-gray-200 text-gray-500 font-[Sora] focus:outline-none"
              value={nom}
              readOnly
            />
          </div>
          <div className="col-start-1 md:col-start-4 col-end-7 bg-gray-800 rounded-md p-3">
            <label className="text-white font-[Sora]">Email</label>
            <input
              className="w-full border-gray-200 text-gray-500  font-[Sora] focus:outline-none"
              value={email}
              readOnly
            />
          </div>
        </div>

        {/* Information profil */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="text-white font-[Sora] text-[16px]">
              Information sur mon profil
            </h1>
            <button
              onClick={ouvrirInformationProfil}
              className="p-2 text-white hover:text-gray-500 rounded-md cursor-pointer"
            >
              <PenBox />
            </button>
          </div>
          <div className="grid grid-cols-6 gap-2">
            <div className="col-start-1 col-end-7 md:col-end-4 bg-gray-800 rounded-md p-3">
              <label className="text-white font-[Sora]">
                Secteur d'activité
              </label>
              <input
                className="w-full border-gray-200 text-gray-500  font-[Sora] focus:outline-none"
                value={secteurTravail || "Aucun"}
                readOnly
              />
            </div>
            <div className="col-start-1 md:col-start-4 col-end-7  bg-gray-800 rounded-md p-3">
              <label className="text-white font-[Sora]">URL du site web</label>
              <input
                className="w-full border-gray-200 text-gray-500  font-[Sora] focus:outline-none"
                value={urlSite || "Aucun"}
                readOnly
              />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-2">
            <div className="col-start-1 col-end-7 md:col-end-4  bg-gray-800 rounded-md p-3">
              <label className="text-white font-[Sora]">Adresse</label>
              <input
                className="w-full border-gray-200 text-gray-500 font-[Sora] focus:outline-none"
                value={adresse || "Aucun"}
                readOnly
              />
            </div>
            <div className="col-start-1 md:col-start-4 col-end-7 bg-gray-800 rounded-md p-3">
              <label className="text-white font-[Sora]">Contact</label>
              <input
                className="w-full border-gray-200 text-gray-500  font-[Sora] focus:outline-none"
                value={telephone || "Aucun"}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Gérer mot de passe */}
        <div className="space-y-2">
          <h1 className="text-white font-[Sora] text-[16px]">
            Gérer le mot de passe de mon compte
          </h1>
          <div className="grid grid-cols-6 gap-2 mb-4">
            <div className="col-start-1 col-end-7 bg-gray-800 rounded-md p-4">
              <label className="text-white font-[Sora]">
                Nouveau mot de passe
              </label>
              <input
                className=" w-full border-gray-200 text-gray-500 font-[Sora] focus:outline-none"
                type="password"
                placeholder="Saisir le nouveau mot de passe "
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="md:text-end">
            <Button variant="contained" onClick={changerMotpasse} sx={{fontFamily:"Sora", fontSize:13, textTransform:"inherit"}}>
              Mettre à jour le mot de passe
            </Button>
          </div>
        </div>
      </div>

      {/* Formulaire information profil */}
      <InformationProfil
        id={id}
        open={open}
        setOpen={setOpen}
        fermerInformationProfil={fermerInformationProfil}
      />
    </>
  );
}
