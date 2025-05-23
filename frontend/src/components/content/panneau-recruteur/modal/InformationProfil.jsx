import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function InformationProfil({
  open,
  setOpen,
  fermerInformationProfil,
}) {
  useEffect(() => {
    if (open) {
      console.log("Open");
    }
  }, [open]);

  const mettreAjour = () => {
    console.log("Save");
    setOpen(false);
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
        <DialogTitle id="alert-dialog-title">
          {"Information sur mon profil"}
        </DialogTitle>
        <DialogContent dividers>
          <div className="mb-4">
            <label className="font-[Sora]">Nom de l'entreprise</label>
            <input
              className="w-full bg-white p-2 border border-gray-200 rounded-md focus:outline-none font-[Sora] text-gray-500"
              placeholder="Réference"
              value="Archetype Consulting"
            />
          </div>
          <div className="mb-4">
            <label className="font-[Sora]">Secteur d'activité</label>
            <input
              className="w-full bg-white p-2 border border-gray-200 rounded-md focus:outline-none font-[Sora] text-gray-500"
              placeholder="Ajouter un titre"
              value="Entreprise de service informatique"
            />
          </div>
          <div className="mb-4">
            <label className="font-[Sora]">URL du site web</label>
            <input
              className="w-full bg-white p-2 border border-gray-200 rounded-md focus:outline-none font-[Sora] text-gray-500"
              placeholder="URL du site web"
              value="https://example.example"
            />
          </div>
          <div className="mb-4">
            <label className="font-[Sora]">Adresse</label>
            <textarea
              rows={2}
              className="w-full bg-white p-2 border border-gray-200 rounded-md focus:outline-none font-[Sora] text-gray-500"
              placeholder="Adresse"
              value="Antananarivo, Madagascar"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="font-[Sora]">Conctact</label>
            <input
              className="w-full bg-white p-2 border border-gray-200 rounded-md focus:outline-none font-[Sora] text-gray-500"
              placeholder="Contact"
              value="0348574101"
            />
          </div>
          <div className="mb-4">
            <label className="font-[Sora]">Email</label>
            <input
              className="w-full bg-white p-2 border border-gray-200 rounded-md focus:outline-none font-[Sora] text-gray-500"
              placeholder="Description"
              value="example@example.com"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <button
            className="bg-gray-200 hover:bg-gray-300 w-1/4 rounded-md text-gray-950 font-[Sora] p-2 cursor-pointer"
            onClick={fermerInformationProfil}
          >
            Annuler
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 w-1/4 rounded-md text-white font-[Sora] p-2 cursor-pointer"
            onClick={mettreAjour}
          >
            Modifier
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
