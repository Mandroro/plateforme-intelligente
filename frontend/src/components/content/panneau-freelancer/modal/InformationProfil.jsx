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
  const [idFreelancer, setIdFreelancer] = useState("");
  const [posteEnvisage, setPosteEnvisage] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");

  useEffect(() => {
    if (open) {
      axios
        .get(`${ApiURL}/freelancers/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setIdFreelancer(response.data.resultat.freelancer.id);
          setPosteEnvisage(response.data.resultat.freelancer.poste_travail);
          setAdresse(response.data.resultat.freelancer.adresse_actuel);
          setTelephone(response.data.resultat.freelancer.num_telephone);
        })
        .catch((error) => {
          console.log("Erreur inattendue:", error);
        });
    }
  }, [open]);

  const mettreAjour = (e) => {
    e.preventDefault();

    const data = {
      poste_travail: posteEnvisage,
      adresse_actuel: adresse,
      num_telephone: telephone
    }

    axios.put(`${ApiURL}/freelancers/${idFreelancer}`, data, {
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
            <label className="font-[Sora]">Poste envisagé</label>
            <input
              className="w-full bg-white p-2 border border-gray-200 rounded-md focus:outline-none font-[Sora] text-gray-500"
              placeholder="Entrer votre poste"
              value={posteEnvisage || ""}
              onChange={(e) => setPosteEnvisage(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="font-[Sora]">Adresse</label>
            <textarea
              rows={2}
              className="w-full bg-white p-2 border border-gray-200 rounded-md focus:outline-none font-[Sora] text-gray-500"
              placeholder="Saisir votre adresse actuel"
              value={adresse || ""}
              onChange={(e) => setAdresse(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="font-[Sora]">Conctact</label>
            <input
              className="w-full bg-white p-2 border border-gray-200 rounded-md focus:outline-none font-[Sora] text-gray-500"
              placeholder="Entrer votre numéro téléphone"
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
