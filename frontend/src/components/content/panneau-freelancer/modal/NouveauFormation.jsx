import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import { useApiConfig } from "../../../../ApiUrlConfiguration";

export default function NouveauFormation({
  id,
  open,
  setOpen,
  fermerFormation,
}) {
  const { ApiURL } = useApiConfig();
  const token = localStorage.getItem("token");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [titre, setTitre] = useState("");
  const [annee, setAnnee] = useState("");
  const [etablissement, setEtablissement] = useState("");
  const [lieu, setLieu] = useState("");

  useEffect(() => {
    if (open) {
      setTitre("");
      setAnnee("");
      setEtablissement("");
      setLieu("");
    }
  }, [open]);

  const enregistrer = (e) => {
    e.preventDefault();

    const data = {
      titre_formation: titre,
      annee_formation: annee,
      etablissement: etablissement,
      lieu_formation: lieu,
      freelancer_id: id,
    };

    axios
      .post(`${ApiURL}/formations/create`, data, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          console.log("Message:", response.data.message);
          setOpen(false);
        }
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          sx={{ fontFamily: "Sora", fontSize: 18 }}
        >
          {"Ajout d'une formation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="mb-4">
              <label className="text-gray-900 font-[Sora]">Titre</label>
              <input
                className=" w-full rounded-md p-2 border-1 border-gray-200 text-gray-500 font-[Sora] focus:outline-none"
                placeholder="Entrer le titre de la formation"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-900 font-[Sora]">Année</label>
              <input
                className=" w-full rounded-md p-2 border-1 border-gray-200 text-gray-500 font-[Sora] focus:outline-none"
                placeholder="Saisir l'année de la formation"
                value={annee}
                onChange={(e) => setAnnee(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-900 font-[Sora]">Etablissement</label>
              <input
                className=" w-full rounded-md p-2 border-1 border-gray-200 text-gray-500 font-[Sora] focus:outline-none"
                placeholder="Entrer le nom de l'établissement"
                value={etablissement}
                onChange={(e) => setEtablissement(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-900 font-[Sora]">Lieu</label>
              <input
                className=" w-full rounded-md p-2 border-1 border-gray-200 text-gray-500 font-[Sora] focus:outline-none"
                placeholder="Entrer le lieu de la formation"
                value={lieu}
                onChange={(e) => setLieu(e.target.value)}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={fermerFormation}
            sx={{ fontFamily: "Sora", textTransform: "inherit" }}
          >
            Annuler
          </Button>
          <Button
            onClick={enregistrer}
            sx={{ fontFamily: "Sora", textTransform: "inherit" }}
          >
            Enregistrer
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
