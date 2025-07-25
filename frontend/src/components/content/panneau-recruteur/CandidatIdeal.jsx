import {
  Avatar,
  Button,
  Chip,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useApiConfig } from "../../../ApiUrlConfiguration";
import axios from "axios";
import { useEffect, useState } from "react";
import { ChevronLeft, MapPin } from "lucide-react";
import { useNavigate } from "react-router";

export default function CandidatIdeal() {
  const { ApiURL } = useApiConfig();
  const idOffre = localStorage.getItem("OFFRE_ID");
  const token = localStorage.getItem("token");
  const redirection = useNavigate();
  const [dataCandidat, setDataCandidat] = useState([]);

  useEffect(() => {
    getListeCandidat();
  }, []);

  // Matching
  const matching = [
    {
      freelancer: {
        id: 1,
        nom: "Yves Aimable",
        email: "yvesaimable@gmail.com",
        specialite: "D\u00e9veloppeur Fullstack",
        adresse: "Mahajanga, Madagascar",
      },
      score: 62.32,
      niveau: "compatible moyen",
    },
    {
      freelancer: {
        id: 2,
        nom: "Jean Marc",
        email: "jeanmarc@gmail.com",
        specialite: "D\u00e9veloppeur FullStack Web/Mobile",
        adresse: "Mahajanga",
      },
      score: 50.5,
      niveau: "non compatible",
    },
  ];

  // Obtenir la liste des freelancers depuis matching IA
  const getListeCandidat = () => {
    axios
      .get(`${ApiURL}/matching-freelancer/${idOffre}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDataCandidat(response.data.matched_freelancers);
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  // Retour vers tous les offres
  const retourOffre = () => {
    localStorage.removeItem("OFFRE_ID");
    redirection("/pannel-recruteur/offres");
  };

  return (
    <div className="p-10">
      <Chip
        onClick={retourOffre}
        color="primary"
        sx={{ mb: 3 }}
        icon={<ChevronLeft />}
        label="Retour"
      />
      <div className="font-[Sora] mb-4">
        <h1 className="text-white font-[Sora] text-[25px]">Candidats idéals</h1>
        <p className="text-gray-400 font-extralight">
          Voici la liste des candidats à cette offre publié
        </p>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {matching.length > 0
          ? matching.map((d, index) => (
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
                            {d.freelancer.nom.charAt(0)}
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
                              {d.freelancer.nom}
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
                                {d.freelancer.specialite}
                              </Typography>
                            </li>
                            <li>
                              <Typography
                                variant="p"
                                sx={{
                                  fontFamily: "Sora",
                                  fontWeight: 100,
                                  color: "white",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <MapPin className="mr-1" />{" "}
                                {d.freelancer.adresse}
                              </Typography>
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
                    Plus de détails
                  </Button>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
