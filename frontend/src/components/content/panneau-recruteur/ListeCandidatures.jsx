import {
  Avatar,
  Button,
  Chip,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useApiConfig } from "../../../ApiUrlConfiguration";
import axios from "axios";
import { useEffect, useState } from "react";
import DetailsCandidat from "./modal/DetailsCandidat";

export default function ListeCandidatures() {
  const { ApiURL } = useApiConfig();
  const token = localStorage.getItem("token");
  const [dataCandidature, setDataCandidature] = useState([]);
  const [openDetail, setOpenDetail] = useState(false);
  const [dataUser, setDataUser] = useState([]);
  const [dataFreelancer, setDataFreelancer] = useState([]);
  const [dataFormation, setDataFormation] = useState([]);
  const [dataCompetence, setDataCompetence] = useState([]);

  useEffect(() => {
    utilisateur();
  }, []);

  // Obtenir ID User connecté
  const utilisateur = () => {
    axios
      .get(`${ApiURL}/utilisateur`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getRecruteur(response.data.id);
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  // Obtenir ID Recruteur
  const getRecruteur = (id) => {
    axios
      .get(`${ApiURL}/recruteurs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        listeCandidature(response.data.resultat.recruteur.id);
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  // Liste des candidaure du freelancer
  const listeCandidature = (id) => {
    axios
      .get(`${ApiURL}/liste-candidature-recu/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDataCandidature(response.data.resultat);
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  // Details sur le profil du candidat
  const handleClikDetail = (id) => {
    axios
      .get(`${ApiURL}/freelancers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDataUser(response.data.resultat);
        setDataFreelancer(response.data.resultat.freelancer);
        setDataFormation(response.data.resultat.freelancer.formations);
        setDataCompetence(response.data.resultat.freelancer.competences);
        setOpenDetail(true);
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };
  const handleCloseDetail = () => {
    setOpenDetail(false);
  };

  return (
    <div className="p-10">
      <div className="font-[Sora] mb-4">
        <h1 className="text-white font-[Sora] text-[25px]">Candidature réçu</h1>
        <p className="text-gray-400 font-extralight">
          Voici la liste des candidas qui ont postulé à votre offre
        </p>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {dataCandidature.length > 0
          ? dataCandidature.map((d, index) => (
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
                            {d.freelancer_nom.charAt(0)}
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
                                fontWeight: "bold",
                                mr: 4,
                                color: "white",
                              }}
                            >
                              {d.freelancer_nom}
                            </Typography>
                          </div>
                        }
                        secondary={
                          <ul className="space-y-1">
                            <li>
                              <Typography
                                variant="p"
                                sx={{
                                  fontFamily: "Sora",
                                  fontWeight: 100,
                                  color: "white",
                                }}
                              >
                                Offre : {d.offre_titre}
                              </Typography>
                            </li>
                            <li>
                              <Typography
                                variant="p"
                                sx={{
                                  fontFamily: "Sora",
                                  fontWeight: 100,
                                  color: "white",
                                }}
                              >
                                Date de candidature : {d.date_candidature}
                              </Typography>
                            </li>
                            <li className="space-x-1">
                              <Chip
                                onClick={() =>
                                  handleClikDetail(d.freelancer_id)
                                }
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
                                icon={<InfoOutlinedIcon />}
                                label="Détails sur le profil"
                              />
                            </li>
                          </ul>
                        }
                      />
                    </ListItem>
                  </div>
                  <Button
                    variant="contained"
                    sx={{
                      fontFamily: "Sora",
                      fontWeight: 300,
                      borderRadius: 50,
                      textTransform: "inherit",
                    }}
                  >
                    Accepter
                  </Button>
                </div>
              </div>
            ))
          : ""}
      </div>

      {/* Détails sur le profil du candidat */}
      <DetailsCandidat
        open={openDetail}
        user={dataUser}
        freelancer={dataFreelancer}
        formation={dataFormation}
        competence={dataCompetence}
        handleClose={handleCloseDetail}
      />
    </div>
  );
}
