import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  ChevronLeft,
  ChevronRight,
  PenBox,
  Plus,
  Search,
  Trash,
} from "lucide-react";
import {
  Avatar,
  Button,
  Chip,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import NouveauOffre from "./modal/NouveauOffre";
import { useApiConfig } from "../../../ApiUrlConfiguration";
import axios from "axios";
import ModifierOffre from "./modal/ModifierOffre";
import SpecifierOffre from "./modal/SpecifierOffre";
import { useNavigate } from "react-router";
import SupprimerOffre from "./modal/SupprimerOffre";

export default function GestionOffres() {
  const { ApiURL } = useApiConfig();
  const token = localStorage.getItem("token");
  const redirection = useNavigate();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const [idOffre, setIdOffre] = useState("");
  const [openSpecifierOffre, setOpenSpecifierOffre] = useState(false);
  const [openModifierOffre, setOpenModifierOffre] = useState(false);
  const [openSupprimer, setOpenSupprimer] = useState(false);

  useEffect(() => {
    recruteur();
    const interval = setInterval(recruteur, 8000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const recruteur = () => {
    axios
      .get(`${ApiURL}/utilisateur`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        fetchOffre(response.data.id);
      });
  };

  const fetchOffre = (id) => {
    axios
      .get(`${ApiURL}/liste-offres/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data.resultat);
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  // Ajout d'une offre
  const ouvrirFormulaireOffre = () => {
    setOpen(true);
  };
  const fermerFormulaireOffre = () => {
    setOpen(false);
  };

  // Spécification d'une offre
  const ouvrirSpecifierOffre = (id) => {
    setIdOffre(id);
    setOpenSpecifierOffre(true);
  };
  const fermerSpecifierOffre = () => {
    setOpenSpecifierOffre(false);
  };

  // Modification d'une offre
  const ouvrirModifierOffre = (id) => {
    setIdOffre(id);
    setOpenModifierOffre(true);
  };
  const fermerModifierOffre = () => {
    setOpenModifierOffre(false);
  };

  // Voir les candidats idéal à l'offre
  const voirCandidat = (id) => {
    localStorage.setItem("OFFRE_ID", id);
    redirection('/pannel-recruteur/offres/candidats');
  }

  // Suppression d'une offre
  const handleClickSupprimer = (id) => {
    setIdOffre(id);
    setOpenSupprimer(true);
  }
  const handleCloseSupprimer = () => {
    setOpenSupprimer(false);
  }

  return (
    <div className="p-6 md:p-10">
      <div className="md:flex items-center justify-between mb-4">
        <div className="font-[Sora]">
          <h1 className="text-white font-bold text-[25px]">
            Gestion des offres
          </h1>
          <p className="text-gray-200 font-extralight text-[15px]">
            Voici la liste des offres déjà publié
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={ouvrirFormulaireOffre}
            className="hidden md:flex p-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-[Sora] items-center justify-center w-full"
          >
            <Plus className="text-white mr-2" />
            Publier une offre
          </button>

          {/* Bouton mobile */}
          <button className="md:hidden p-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-[Sora] w-1-/2">
            <Plus className="text-white" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {data.length > 0
          ? data.map((d, index) => (
              <div className="col-span-6 bg-gray-800 p-2" key={index}>
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          variant="square"
                          sx={{
                            width: 100,
                            height: 100,
                            borderRadius: 2,
                            mr: 4,
                            bgcolor: "oklch(96.2% 0.044 156.743)",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Sora",
                              fontSize: "60px",
                              color: "oklch(62.7% 0.194 149.214)",
                            }}
                          >
                            {d.titre.charAt(0)}
                          </Typography>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <div className="flex items-center">
                            <Typography
                              variant="h5"
                              sx={{
                                fontFamily: "Sora",
                                fontWeight: "semibold",
                                mr: 4,
                                color: "white",
                              }}
                            >
                              {d.titre}
                            </Typography>
                          </div>
                        }
                        secondary={
                          <ul className="space-y-1">
                            <li className="mb-3">
                              <Typography
                                variant="p"
                                sx={{
                                  fontFamily: "Sora",
                                  fontWeight: 100,
                                  color: "white",
                                }}
                              >
                                Publié le {d.created_at}
                              </Typography>
                            </li>
                            <li className="space-x-1">
                              <Chip
                                onClick={() => ouvrirSpecifierOffre(d.id)}
                                sx={{
                                  fontFamily: "Sora",
                                  cursor: "pointer",
                                  color: "white",
                                  background: "none",
                                  ":hover": {
                                    background: "none",
                                    color: "oklch(70.7% 0.165 254.624)",
                                    "& .MuiSvgIcon-root": {
                                      color: "oklch(70.7% 0.165 254.624)",
                                    },
                                  },
                                  "& .MuiSvgIcon-root": {
                                    color: "white",
                                  },
                                }}
                                icon={<AddOutlinedIcon />}
                                label="Spécifier l'offre"
                              />
                              <Chip
                                onClick={() => ouvrirModifierOffre(d.id)}
                                sx={{
                                  fontFamily: "Sora",
                                  color: "white",
                                  background: "none",
                                  cursor: "pointer",
                                  ":hover": {
                                    background: "none",
                                    color: "oklch(70.7% 0.165 254.624)",
                                    "& .MuiSvgIcon-root": {
                                      color: "oklch(70.7% 0.165 254.624)",
                                    },
                                  },
                                  "& .MuiSvgIcon-root": {
                                    color: "white",
                                  },
                                }}
                                icon={<EditOutlinedIcon />}
                                label="Modifier l'offre"
                              />
                              <Chip
                              onClick = {() => handleClickSupprimer(d.id)}
                                sx={{
                                  fontFamily: "Sora",
                                  cursor: "pointer",
                                  color: "white",
                                  background: "none",
                                  ":hover": {
                                    background: "none",
                                    color: "oklch(70.4% 0.191 22.216)",
                                    "& .MuiSvgIcon-root": {
                                      color: "oklch(70.4% 0.191 22.216)",
                                    },
                                  },
                                  "& .MuiSvgIcon-root": {
                                    color: "white",
                                  },
                                }}
                                icon={<DeleteOutlineOutlinedIcon />}
                                label="Supprimer l'offre"
                              />
                            </li>
                          </ul>
                        }
                      />
                    </ListItem>
                  </div>
                  <Button onClick={()=> voirCandidat(d.id)} variant="contained" sx={{fontFamily:"Sora", fontWeight:300, borderRadius:50, textTransform:"inherit"}}>Voir les candidats idéals</Button>
                </div>
              </div>
            ))
          : ""}
      </div>

      {/* Formulaire offre */}
      <NouveauOffre
        open={open}
        setOpen={setOpen}
        fermerFormulaireOffre={fermerFormulaireOffre}
      />

      {/* Spécification offre */}
      <SpecifierOffre
        id={idOffre}
        open={openSpecifierOffre}
        setOpen={setOpenSpecifierOffre}
        fermerSpecifierOffre={fermerSpecifierOffre}
      />

      {/* Modification offre */}
      <ModifierOffre
        id={idOffre}
        open={openModifierOffre}
        fermerModifierOffre={fermerModifierOffre}
      />

      {/* Supprimer offre */}
      <SupprimerOffre id={idOffre} open={openSupprimer} setOpen={setOpenSupprimer} handleClose={handleCloseSupprimer}/>
    </div>
  );
}
