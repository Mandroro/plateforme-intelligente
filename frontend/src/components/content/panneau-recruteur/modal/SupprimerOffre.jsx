import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

import { useApiConfig } from "../../../../ApiUrlConfiguration";

export default function SupprimerOffre({ id, open, setOpen, handleClose }) {
  const { ApiURL } = useApiConfig();
  const token = localStorage.getItem("token");

  const supprimerOffre = () => {
    axios
      .delete(`${ApiURL}/offres/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setOpen(false);
        }
      })
      .catch((error) => {
        console.log("Erreur inattendue: ", error);
      });
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ fontFamily: "Sora", fontSize: 18 }}
        >
          {"Confirmation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontFamily: "Sora", fontSize: 14 }}
          >
            Etes-vous sûr de vouloir supprimer vraiment cette offre ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ fontFamily: "Sora", fontSize: 14, textTransform: "inherit" }}
          >
            Non
          </Button>
          <Button
            onClick={supprimerOffre}
            sx={{ fontFamily: "Sora", fontSize: 14, textTransform: "inherit" }}
          >
            Oui
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
