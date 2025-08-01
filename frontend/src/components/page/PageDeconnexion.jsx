import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useApiConfig } from "../../ApiUrlConfiguration";
import axios from "axios";
import { useNavigate } from "react-router";

export default function PageDeconnexion({ open, setOpen, handleClose }) {
  const { ApiURL } = useApiConfig();
  const redirection = useNavigate();
  const token = localStorage.getItem("token");

  const seDeconnecter = () => {
    axios
      .delete(`${ApiURL}/deconnexion`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setOpen(false);
          localStorage.removeItem("token");
          redirection("/authentification");
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
          {"Déconnexion"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontFamily: "Sora", fontSize: 14 }}
          >
            Voulez vous vraiment vous déconnecter ?
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
            onClick={seDeconnecter}
            sx={{ fontFamily: "Sora", fontSize: 14, textTransform: "inherit" }}
          >
            Oui
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
