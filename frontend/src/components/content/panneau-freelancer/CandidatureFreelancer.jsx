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
import { useEffect, useState } from "react";
import axios from "axios";

export default function CandidatureFreelancer() {
  const { ApiURL } = useApiConfig();
  const token = localStorage.getItem("token");
  const [dataCandidature, setDataCandidature] = useState([]);

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
        getFreelancer(response.data.id);
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  // Obtenir ID Freelancer
  const getFreelancer = (id) => {
    axios
      .get(`${ApiURL}/freelancers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        listeCandidature(response.data.resultat.id);
      }).catch((error) => {
        console.log("Erreur inattendue:", error)
      });
  };

  // Liste des candidaure du freelancer
  const listeCandidature = (id) => {
    axios
      .get(`${ApiURL}/liste-candidature-envoye/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDataCandidature(response.data.resultat);
      }).catch((error) => {
        console.log("Erreur inattendue:", error)
      });
  };
  return (
    <div className="p-10">
      <div className="font-[Sora] mb-4">
        <h1 className="font-bold text-[25px] text-white">Candidature envoyé</h1>
        <p className="text-gray-200 font-extralight text-[15px]">
          Voici la liste des candidatures que vous avez déjà déposer
        </p>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {
          dataCandidature.length > 0 ? dataCandidature.map((d,index) => (
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
                      {d.titre_offre.charAt(0)}
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
                        {d.titre_offre}
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
                            textTransform:"uppercase"
                          }}
                        >
                          {d.recruteur_nom}
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
                          Postule le : {d.date_candidature}
                        </Typography>
                      </li>
                    </ul>
                  }
                />
              </ListItem>
            </div>
            <Button
              variant="contained"
              color="error"
              sx={{
                fontFamily: "Sora",
                fontWeight: 300,
                borderRadius: 50,
                textTransform: "inherit",
              }}
            >
              Retirer
            </Button>
          </div>
        </div>
          )) : ""
        }
      </div>
    </div>
  );
}
