import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Plus } from "lucide-react";

export default function NouveauOffre({ open, setOpen, fermerFormulaireOffre }) {
  const [mission, setMission] = useState("");
  const [competence, setCompetence] = useState("");
  const [dataCompetence, setDataCompetence] = useState([]);
  const [dataMission, setDataMission] = useState([]);

  useEffect(() => {
    if (open) {
      setCompetence("");
      setMission("");
      setDataCompetence([]);
      setDataMission([]);
    }
  }, [open]);

  const addMission = () => {
    if (mission.trim() !== "") {
      setDataMission([...dataMission, mission]);
      setMission("");
    }
  };

  const addCompetence = () => {
    if (competence.trim() !== "") {
      setDataCompetence([...dataCompetence, competence]);
      setCompetence("");
    }
  };

  const enregistrerOffre = () => {
    console.log("Competencies to save:", dataCompetence);
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
        <DialogTitle id="alert-dialog-title">{"Nouvelle offre"}</DialogTitle>
        <DialogContent dividers>
          <div className="mb-4">
            <label className="font-[Sora]">Réference</label>
            <input
              className="w-full bg-white p-2 border border-gray-200 rounded-md focus:outline-none"
              placeholder="Réference"
            />
          </div>
          <div className="mb-4">
            <label className="font-[Sora]">Titre</label>
            <input
              className="w-full bg-white p-2 border border-gray-200 rounded-md focus:outline-none"
              placeholder="Ajouter un titre"
            />
          </div>
          <div className="mb-4">
            <label className="font-[Sora]">Description</label>
            <textarea
              rows={4}
              className="w-full bg-white p-2 border border-gray-200 rounded-md focus:outline-none"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="font-[Sora]">Mission</label>
            <div className="flex">
              <input
                className="w-full bg-white p-2 border border-gray-200 rounded-l-md focus:outline-none"
                placeholder="Ajouter une mission"
                value={mission}
                onChange={(e) => setMission(e.target.value)}
              />
              <button onClick={addMission} className="bg-blue-600 p-2 rounded-r-md text-white cursor-pointer">
                <Plus />
              </button>
            </div>
            {dataMission.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {dataMission.map((mis, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-[14px] font-[Sora] p-2 rounded-full"
                  >
                    {mis}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="font-[Sora]">Compétence requise</label>
            <div className="flex">
              <input
                className="w-full bg-white p-2 border border-gray-200 rounded-l-md focus:outline-none"
                placeholder="Ajouter un compétence"
                value={competence}
                onChange={(e) => setCompetence(e.target.value)}
              />
              <button
                onClick={addCompetence}
                className="bg-blue-600 p-2 rounded-r-md text-white cursor-pointer"
              >
                <Plus />
              </button>
            </div>
            {dataCompetence.length > 0 && ( // Only render if there are competencies
              <div className="mt-3 flex flex-wrap gap-2">
                {dataCompetence.map((comp, index) => (
                  <span
                    key={index} // Consider a more robust key for production (e.g., a unique ID if competencies have them)
                    className="bg-blue-100 text-blue-800 text-[14px] font-[Sora] p-2 rounded-full"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <button
            className="bg-gray-200 hover:bg-gray-300 w-1/4 rounded-md text-gray-950 font-[Sora] p-2 cursor-pointer"
            onClick={fermerFormulaireOffre}
          >
            Annuler
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 w-1/4 rounded-md text-white font-[Sora] p-2 cursor-pointer"
            onClick={enregistrerOffre}
          >
            Enregistrer
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
