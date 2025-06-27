import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useApiConfig } from "../../../../ApiUrlConfiguration";

export default function ModifierOffre({
  id,
  open,
  setOpen,
  fermerModifierOffre,
}) {
  const { ApiURL } = useApiConfig();
  const token = localStorage.getItem("token");
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (open) {
      axios
        .get(`${ApiURL}/offres/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setTitre(response.data.resultat.titre_offre);
          setDescription(response.data.resultat.description);
        })
        .catch((error) => {
          console.log("Erreur inattendue:", error);
        });
    }
  }, [open]);

  const miseAjour = (e) => {
    e.preventDefault();

    const data = {
      titre_offre: titre,
      description: description,
    };

    axios
      .put(`${ApiURL}/offres/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.message);
        setOpen(false);
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  return (
    <React.Fragment>
      <Dialog
        sx={{ marginTop: 6 }}
        fullWidth
        maxWidth={"sm"}
        open={open}
        scroll="paper"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ fontFamily: "Sora", fontSize: 18 }}
        >
          {"Modification de l'offre"}
        </DialogTitle>
        <DialogContent>
          <div className="mb-4">
            <label className="font-[Sora]">Titre</label>
            <input
              className="w-full font-[Sora] bg-white p-2 border border-gray-200 rounded-md focus:outline-none"
              placeholder="Ajouter un titre"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="font-[Sora]">Description</label>
            <textarea
              rows={3}
              className="w-full font-[Sora] bg-white p-2 border border-gray-200 rounded-md focus:outline-none"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={fermerModifierOffre}
            sx={{ fontFamily: "Sora", textTransform: "inherit" }}
          >
            Annuler
          </Button>
          <Button
            onClick={miseAjour}
            sx={{ fontFamily: "Sora", textTransform: "inherit" }}
          >
            Modifier
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
