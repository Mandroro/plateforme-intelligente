import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useApiConfig } from "../../../../ApiUrlConfiguration";
import axios from "axios";

export default function NouveauCompetence({
  id,
  open,
  setOpen,
  fermerCompetence,
}) {
  const { ApiURL } = useApiConfig();
  const token = localStorage.getItem("token");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [description, setDescription] = useState();

  useEffect(() => {
    if (open) {
      setDescription("");
    }
  }, [open]);

  const enregistrer = (e) => {
    e.preventDefault();

    const data = {
      description: description,
      freelancer_id: id,
    };

    axios
      .post(`${ApiURL}/competences/create`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data.message);
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
          {"Ajout d'une compétence"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <input
              className=" w-full rounded-md p-2 border-1 border-gray-200 text-gray-500 font-[Sora] focus:outline-none"
              placeholder="Entrer un compétence"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={fermerCompetence}
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
