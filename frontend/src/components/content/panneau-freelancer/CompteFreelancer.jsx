import { useEffect, useState } from "react";
import Profil1 from "./../../images/exemple-profil-candidat/1.png";
import { PenBox, Plus, XCircle } from "lucide-react";
import { useApiConfig } from "../../../ApiUrlConfiguration";
import axios from "axios";
import NouveauFormation from "./modal/NouveauFormation";
import NouveauCompetence from "./modal/NouveauCompetence";
import InformationProfil from "./modal/InformationProfil";
import SupprimerFormation from "./modal/SupprimerFormation";
import SupprimerCompetence from "./modal/SupprimerCompetence";

export default function CompteFreelancer() {
  const { ApiURL } = useApiConfig();
  const token = localStorage.getItem("token");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [poste, setPoste] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");
  const [open, setOpen] = useState(false);
  const [openFormation, setOpenFormation] = useState(false);
  const [openCompetence, setOpenCompetence] = useState(false);
  const [dataFormation, setDataFormation] = useState([]);
  const [dataCompetence, setDataCompetence] = useState([]);
  const [idFormation, setIdFormation] = useState("");
  const [idCompetence, setIdCompetence] = useState("");
  const [openSupprimerFormation, setOpenSupprimerFormation] = useState(false);
  const [openSupprimerCompetence, setOpenSupprimerCompetence] = useState(false);

  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    axios
      .get(`${ApiURL}/utilisateur`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setId(response.data.id);
        setNom(response.data.name);
        setEmail(response.data.email);
        freelancer(response.data.id);
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  }, []);

  const freelancer = (id) => {
    axios
      .get(`${ApiURL}/freelancers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPoste(response.data.resultat.freelancer.poste_travail);
        setAdresse(response.data.resultat.freelancer.adresse_actuel);
        setTelephone(response.data.resultat.freelancer.num_telephone);
        setDataFormation(response.data.resultat.freelancer.formations);
        setDataCompetence(response.data.resultat.freelancer.competences);
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  // Gérer profil
  const ouvrirInformationProfil = () => {
    setOpen(true);
  };
  const fermerInformationProfil = () => {
    setOpen(false);
  };

  // Gérer formation (Ajout - Suppression)
  const ajouterFormation = () => {
    setOpenFormation(true);
  };
  const fermerFormation = () => {
    setOpenFormation(false);
  };

  const supprimerFormation = (id) => {
    setIdFormation(id);
    setOpenSupprimerFormation(true);
  };
  const fermerSupprimerFormation = () => {
    setOpenSupprimerFormation(false);
  };

  // Gérer compétence (Ajout - Suppression)
  const ajouterCompetence = () => {
    setOpenCompetence(true);
  };
  const fermerCompetence = () => {
    setOpenCompetence(false);
  };

  const supprimerCompetence = (id) => {
    setIdCompetence(id);
    setOpenSupprimerCompetence(true);
  };
  const fermerSupprimerCompetence = () => {
    setOpenSupprimerCompetence(false);
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
      <div className="bg-gray-800 p-18 md:p-20 relative mb-12 md:mb-13">
        <div className="absolute top-5 left-4">
          <img className="rounded-full w-50" src={Profil1} />
        </div>
      </div>
      <div className="p-8 space-y-2">
        <div className="mb-6">
          <div className="grid grid-cols-6 gap-2">
            <div className="col-start-1 col-end-7 md:col-end-4 bg-gray-800 rounded-md p-3">
              <label className="text-white font-[Sora]">Nom/Prénom</label>
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
        </div>

        {/* Gérer mon profil */}
        <div className="mb-6">
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
          <div className="grid grid-cols-6 gap-2 mb-2">
            <div className="col-start-1 col-end-7 bg-gray-800 rounded-md p-3">
              <label className="text-white font-[Sora]">Poste envisagé</label>
              <input
                className="w-full border-gray-200 text-gray-500  font-[Sora] focus:outline-none"
                value={poste || "Aucun"}
                readOnly
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
            <div className="col-start-1 col-end-7 md:col-end-4 bg-gray-800 rounded-md p-3">
              <label className="text-white font-[Sora]">Adresse actuel</label>
              <input
                className="w-full border-gray-200 text-gray-500  font-[Sora] focus:outline-none"
                value={adresse || "Aucun"}
                readOnly
              />
            </div>
            <div className="col-start-1 md:col-start-4 col-end-7 bg-gray-800 rounded-md p-3">
              <label className="text-white font-[Sora]">Téléphone</label>
              <input
                className="w-full border-gray-200 text-gray-500  font-[Sora] focus:outline-none"
                value={telephone || "Aucun"}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Gérer mes formation */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="text-white font-[Sora] text-[16px]">Formation</h1>
            <button
              onClick={ajouterFormation}
              className="p-2 text-white font-[Sora] text-[16px] hover:text-gray-500 flex items-center justify-center rounded-md cursor-pointer"
            >
              <Plus className="mr-1" />
              Ajouter
            </button>
          </div>
          <div className="grid grid-cols-6 gap-2 mb-2">
            {dataFormation.length > 0 ? (
              dataFormation.map((d) => (
                <div
                  key={d.id}
                  className="flex justify-between col-start-1 col-end-7 bg-gray-800 rounded-md p-3"
                >
                  <div>
                    <h1 className="text-white  font-[Sora]">
                      {d.titre_formation} - {d.annee_formation}
                    </h1>
                    <p className="text-gray-500  font-[Sora]">
                      {d.etablissement} - {d.lieu_formation}
                    </p>
                  </div>
                  <button
                    onClick={() => supprimerFormation(d.id)}
                    className="text-white hover:text-gray-500 rounded-md cursor-pointer"
                  >
                    <XCircle />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center col-start-1 col-end-7 bg-gray-800 rounded-md p-3">
                <p className="font-[Sora] text-white">
                  Aucune formation enregistrer
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Gérer mes compétences */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-white font-[Sora] text-[16px]">Compétences</h1>
            <button
              onClick={ajouterCompetence}
              className="p-2 text-white font-[Sora] text-[16px] hover:text-gray-500 flex items-center justify-center rounded-md cursor-pointer"
            >
              <Plus className="mr-1" />
              Ajouter
            </button>
          </div>

          {dataCompetence.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {dataCompetence.map((d) => (
                <span
                  key={d.id}
                  className="flex items-center justify-between bg-gray-800 text-white text-[14px] font-[Sora] p-3 rounded-full"
                >
                  {d.description}
                  <XCircle
                    onClick={() => supprimerCompetence(d.id)}
                    className="ml-4 hover:text-gray-500 cursor-pointer"
                  />
                </span>
              ))}
            </div>
          ) : (
            <div className="text-center col-start-1 col-end-7 bg-gray-800 rounded-md p-3">
              <p className="font-[Sora] text-white">
                Aucune compétencer enregistrer
              </p>
            </div>
          )}
        </div>

        {/* Gérer le mot de passe */}
        <h1 className="text-white font-[Sora] text-[16px]">
          Gérer le mot de passe de mon compte
        </h1>
        <div className="grid grid-cols-6 gap-2">
          <div className="col-start-1 col-end-7 bg-gray-800 rounded-md p-4">
            <label className="text-white font-[Sora]">
              Changer le mot de passe
            </label>
            <input
              className=" w-full border-gray-200 text-gray-500 font-[Sora] focus:outline-none"
              type="password"
              placeholder="Saisir le nouveau mot de passe "
              value={newPassword}
              onChange={(e)=>setNewPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="text-end">
          <button onClick={changerMotpasse} className="bg-green-600 hover:bg-green-700 text-white font-[Sora] text-[14px] p-3 rounded-md cursor-pointer w-full md:w-1/4">
            Mettre à jour le mot de passe
          </button>
        </div>
      </div>

      {/* Formulaire information profil */}
      <InformationProfil
        id={id}
        open={open}
        setOpen={setOpen}
        fermerInformationProfil={fermerInformationProfil}
      />

      {/* Formulaire ajout formation */}
      <NouveauFormation
        id={id}
        open={openFormation}
        setOpen={setOpenFormation}
        fermerFormation={fermerFormation}
      />

      {/* Supprimer un formation */}
      <SupprimerFormation
        id={idFormation}
        open={openSupprimerFormation}
        setOpen={setOpenSupprimerFormation}
        handleClose={fermerSupprimerFormation}
      />

      {/* Formulaire ajout compétence */}
      <NouveauCompetence
        id={id}
        open={openCompetence}
        setOpen={setOpenCompetence}
        fermerCompetence={fermerCompetence}
      />

      {/* Supprimer un compétence */}
      <SupprimerCompetence
        id={idCompetence}
        open={openSupprimerCompetence}
        setOpen={setOpenSupprimerCompetence}
        handleClose={fermerSupprimerCompetence}
      />
    </>
  );
}
