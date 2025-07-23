import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useApiConfig } from "../../../../ApiUrlConfiguration";
import axios from "axios";
import { Button } from "@mui/material";

export default function InformationProfil({
  id,
  open,
  setOpen,
  fermerInformationProfil,
}) {
  const { ApiURL } = useApiConfig();
  const token = localStorage.getItem("token");
  const [idRecruteur, setIdRecruteur] = useState("");
  const [secteurTravail, setSecteurTravail] = useState("");
  const [urlSite, setUrlSite] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");

  useEffect(() => {
    if (open && id) {
      axios
        .get(`${ApiURL}/recruteurs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setIdRecruteur(response.data.resultat.recruteur.id);
          setSecteurTravail(response.data.resultat.recruteur.secteur_travail);
          setUrlSite(response.data.resultat.recruteur.url_siteweb);
          setAdresse(response.data.resultat.recruteur.adresse_actuel);
          setTelephone(response.data.resultat.recruteur.numero_telephone);
        })
        .catch((error) => {
          console.log("Erreur inattendue:", error);
        });
    }
  }, [open, id]);

  const mettreAjour = (e) => {
    e.preventDefault();

    const data = {
      secteur_travail: secteurTravail,
      url_siteweb: urlSite,
      adresse_actuel: adresse,
      num_telephone: telephone
    }

    axios.put(`${ApiURL}/recruteurs/${idRecruteur}`, data, {
      headers:{
        "Authorization":`Bearer ${token}`,
        "Content-Type":"application/json"
      }
    }).then((response) => {
      if(response.status === 200){
        console.log(response.data.message);
        setOpen(false);
      }
    }).catch((error) => {
      console.log("Erreur inattendue:", error);
    })
  };

  return (
    <React.Fragment>
      <Dialog
        sx={{ marginTop: 6 }}
        fullWidth
        maxWidth={"xs"}
        open={open}
        scroll="paper"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{fontFamily:"Sora", fontSize:18}}>
          {"Information sur mon profil"}
        </DialogTitle>
        <DialogContent>
          <div className="mb-4">
            <label className="font-[Sora]">Secteur d'activité</label>
            <input
              className="w-full bg-white p-2 border border-gray-200 rounded-md focus:outline-none font-[Sora] text-gray-500"
              placeholder="Ajouter un titre"
              value={secteurTravail || ""}
              onChange={(e) => setSecteurTravail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="font-[Sora]">URL du site web</label>
            <input
              className="w-full bg-white p-2 border border-gray-200 rounded-md focus:outline-none font-[Sora] text-gray-500"
              placeholder="URL du site web"
              value={urlSite || ""}
              onChange={(e) => setUrlSite(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="font-[Sora]">Adresse</label>
            <textarea
              rows={2}
              className="w-full bg-white p-2 border border-gray-200 rounded-md focus:outline-none font-[Sora] text-gray-500"
              placeholder="Adresse"
              value={adresse || ""}
              onChange={(e) => setAdresse(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="font-[Sora]">Conctact</label>
            <input
              className="w-full bg-white p-2 border border-gray-200 rounded-md focus:outline-none font-[Sora] text-gray-500"
              placeholder="Contact"
              value={telephone || ""}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={fermerInformationProfil}
            sx={{ fontFamily: "Sora", fontSize: 14, textTransform: "inherit" }}
          >
            Annuler
          </Button>
          <Button
            onClick={mettreAjour}
            sx={{ fontFamily: "Sora", fontSize: 14, textTransform: "inherit" }}
          >
            Modifier
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
