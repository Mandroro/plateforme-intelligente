import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useApiConfig } from "../../../../ApiUrlConfiguration";

export default function SupprimerCompetence({ id, open, setOpen, handleClose }) {
  const { ApiURL } = useApiConfig();
  const token = localStorage.getItem("token");

  const supprimer = () => {
    axios
      .delete(`${ApiURL}/competences/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("Message: ", response.data.message);
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
            Voulez vous vraiment supprimer cette compétence ?
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
            onClick={supprimer}
            sx={{ fontFamily: "Sora", fontSize: 14, textTransform: "inherit" }}
          >
            Oui
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
