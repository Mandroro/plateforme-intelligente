import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Check } from "lucide-react";

export default function DetailsCandidat({
  user,
  freelancer,
  formation,
  competence,
  open,
  handleClose,
}) {
  return (
    <React.Fragment>
      <Dialog
        fullWidth
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ fontFamily: "Sora", fontSize: 18 }}
        >
          {"Détails sur le profil du candidats"}
        </DialogTitle>
        <DialogContent>
          <div className="p-4">
            <h1 className="text-gray-800 font-[Sora] font-bold text-[40px] text-center uppercase mb-4">
              {user.name}
            </h1>
            <h1 className="text-gray-800 font-[Sora] font-bold">A propos</h1>
            <ul className="text-gray-800 font-[Sora] font-extralight">
              <li>Poste : {freelancer.poste_travail}</li>
              <li>Lieu : {freelancer.adresse_actuel}</li>
              <li>Email : {user.email}</li>
            </ul>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-start-1 col-end-7">
              <div className="p-4">
                <h1 className="text-gray-800 font-[Sora] font-bold">
                  Formation
                </h1>
                <ul className="mt-3">
                  {formation.length > 0 ? (
                    formation.map((d) => (
                      <li className="text-gray-800 font-[Sora] font-extralight mb-3">
                        <h1 className="text-gray-800  font-[Sora]">
                          {d.titre_formation} - {d.annee_formation}
                        </h1>
                        <p className="text-gray-800  font-[Sora]">
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
              <div className="p-4">
                <h1 className="text-gray-800 font-[Sora] font-bold">
                  Compétence
                </h1>
                <ul className="mt-3">
                  {competence.length > 0 ? (
                    competence.map((d, index) => (
                      <li className="text-gray-800 font-[Sora] font-extralight flex items-center mb-3">
                        <Check className="mr-2" />
                        {d.description}
                      </li>
                    ))
                  ) : (
                    <p className="text-gray-800 font-[Sora] font-extralight">
                      Aucun données disponible
                    </p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ fontFamily: "Sora", fontSize: 14, textTransform: "inherit" }}
          >
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
