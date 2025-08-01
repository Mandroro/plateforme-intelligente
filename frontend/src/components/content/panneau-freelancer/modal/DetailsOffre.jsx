import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Check, CheckCircle2Icon } from "lucide-react";

export default function DetailsOffre({
  data,
  user,
  recruteur,
  mission,
  critere,
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
          {"Détails sur l'offre"}
        </DialogTitle>
        <DialogContent>
          <div className="p-4">
            <h1 className="text-gray-800 font-[Sora] font-bold text-[25px] text-center uppercase mb-4">
              {data.titre}
            </h1>
            <h1 className="text-gray-800 font-[Sora] font-bold">A propos</h1>
            <ul className="text-gray-800 font-[Sora] font-extralight">
              <li>Recruteur: {user.name}</li>
              <li>Lieu : {recruteur.adresse}</li>
              <li>Email : {user.email}</li>
            </ul>
          </div>
          <div className="p-4">
            <h1 className="text-gray-800 font-[Sora] font-bold">Description</h1>
            <p className="text-gray-800 font-[Sora] font-extralight">
              {data.description || (
                <p className="text-gray-800 font-[Sora] font-extralight">
                  Aucun données disponible
                </p>
              )}
            </p>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-start-1 col-end-7">
              <div className="p-4">
                <h1 className="text-gray-800 font-[Sora] font-bold">Mission</h1>
                <ul className="mt-3">
                  {mission.length > 0 ? (
                    mission.map((d) => (
                      <li className="text-gray-800 font-[Sora] font-extralight flex items-center mb-3">
                        <CheckCircle2Icon className="mr-2" />
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
              <div className="p-4">
                <h1 className="text-gray-800 font-[Sora] font-bold">
                  Compétence
                </h1>
                <ul className="mt-3">
                  {critere.length > 0 ? (
                    critere.map((d, index) => (
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
