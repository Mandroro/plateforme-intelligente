import { CalendarDays, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useApiConfig } from "../../../ApiUrlConfiguration";
import { Button } from "@mui/material";

export default function OffresFreelancer() {
  const { ApiURL } = useApiConfig();
  const token = localStorage.getItem("token");
  const [matchingAuto, setMatchingAuto] = useState([]);
  const [idFreelance, setIdFreelancer] = useState("");

  useEffect(() => {
    utilisateur();
  }, []);

  const utilisateur = () => {
    axios
      .get(`${ApiURL}/utilisateur`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // getListeOffre(response.data.id);
        getFreelancer(response.data.id);
      }).catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  // Obtenir la liste des offres depuis matching IA
  const getListeOffre = (id) => {
    axios
      .get(`${ApiURL}/matching-offre/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMatchingAuto(response.data.matched_offres);
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
        setIdFreelancer(response.data.resultat.id);
        console.log("ID Freelance =>",response.data.resultat.id);
      });
  }

  const matching = [
    {
      offre: {
        id: 1,
        titre_offre: "D\u00e9veloppeur Fullstack ReactJS/Laravel",
        description:
          "On recherche (02) d\u00e9veloppeur expriment\u00e9 et ma\u00eetrise ReactJS et PHP avec le framework Laravel",
        created_at: "2025-06-19T15:21:07.000000Z",
        updated_at: "2025-06-27T14:58:39.000000Z",
        recruteur_id: 2,
        recruteur: {
          id: 2,
          url_siteweb: null,
          adresse_actuel: "Paris, France",
          num_telephone: "0349785641",
          secteur_travail: "Informatique",
          logo_entreprise: null,
          user_id: 4,
          created_at: "2025-06-19T15:09:51.000000Z",
          updated_at: "2025-07-15T16:45:01.000000Z",
          user: {
            id: 4,
            name: "hi-tech",
            email: "hitech@gmail.com",
            role: "Recruteur",
            created_at: "2025-06-19T15:09:51.000000Z",
            updated_at: "2025-06-19T15:09:51.000000Z",
          },
        },
        missions: [
          {
            id: 4,
            description:
              "Concevoir et Impl\u00e9menter de nouveau fonctionnalit\u00e9",
            offre_id: 1,
            created_at: "2025-06-27T16:05:27.000000Z",
            updated_at: "2025-06-27T16:05:27.000000Z",
          },
          {
            id: 8,
            description: "Faire une int\u00e9gration de maquette",
            offre_id: 1,
            created_at: "2025-07-15T16:47:19.000000Z",
            updated_at: "2025-07-15T16:47:19.000000Z",
          },
        ],
        criteres: [
          {
            id: 1,
            description: "Ma\u00eetrise PHP",
            offre_id: 1,
            created_at: "2025-06-27T17:12:03.000000Z",
            updated_at: "2025-06-27T17:12:03.000000Z",
          },
          {
            id: 2,
            description: "Ma\u00eetrise ReactJS, Javascript",
            offre_id: 1,
            created_at: "2025-07-15T16:46:11.000000Z",
            updated_at: "2025-07-15T16:46:11.000000Z",
          },
          {
            id: 7,
            description: "Connaissance de base de donn\u00e9es MySQL",
            offre_id: 1,
            created_at: "2025-07-18T08:45:22.000000Z",
            updated_at: "2025-07-18T08:45:22.000000Z",
          },
        ],
      },
      score: 50.5,
      niveau: "non compatible",
    },
    {
      offre: {
        id: 8,
        titre_offre: "Designer 3D",
        description: null,
        created_at: "2025-06-27T13:09:53.000000Z",
        updated_at: "2025-06-27T13:09:53.000000Z",
        recruteur_id: 2,
        recruteur: {
          id: 2,
          url_siteweb: null,
          adresse_actuel: "Paris, France",
          num_telephone: "0349785641",
          secteur_travail: "Informatique",
          logo_entreprise: null,
          user_id: 4,
          created_at: "2025-06-19T15:09:51.000000Z",
          updated_at: "2025-07-15T16:45:01.000000Z",
          user: {
            id: 4,
            name: "hi-tech",
            email: "hitech@gmail.com",
            role: "Recruteur",
            created_at: "2025-06-19T15:09:51.000000Z",
            updated_at: "2025-06-19T15:09:51.000000Z",
          },
        },
        missions: [
          {
            id: 9,
            description: "Cr\u00e9er un maquette 3D",
            offre_id: 8,
            created_at: "2025-07-18T08:38:42.000000Z",
            updated_at: "2025-07-18T08:38:42.000000Z",
          },
          {
            id: 10,
            description: "Concevoir un architeture de maison",
            offre_id: 8,
            created_at: "2025-07-18T08:39:33.000000Z",
            updated_at: "2025-07-18T08:39:33.000000Z",
          },
          {
            id: 11,
            description: "Cr\u00e9er des mod\u00e8les",
            offre_id: 8,
            created_at: "2025-07-18T08:43:58.000000Z",
            updated_at: "2025-07-18T08:43:58.000000Z",
          },
        ],
        criteres: [
          {
            id: 3,
            description: "Ma\u00eetriser Unity 3D",
            offre_id: 8,
            created_at: "2025-07-18T08:40:55.000000Z",
            updated_at: "2025-07-18T08:40:55.000000Z",
          },
          {
            id: 4,
            description: "Ma\u00eetriser AutoCAD",
            offre_id: 8,
            created_at: "2025-07-18T08:41:59.000000Z",
            updated_at: "2025-07-18T08:41:59.000000Z",
          },
          {
            id: 5,
            description: "Ma\u00eetriser AutoCAD",
            offre_id: 8,
            created_at: "2025-07-18T08:42:18.000000Z",
            updated_at: "2025-07-18T08:42:18.000000Z",
          },
          {
            id: 6,
            description: "Ma\u00eetriser AutoCAD",
            offre_id: 8,
            created_at: "2025-07-18T08:42:23.000000Z",
            updated_at: "2025-07-18T08:42:23.000000Z",
          },
        ],
      },
      score: 38.1,
      niveau: "non compatible",
    },
    {
      offre: {
        id: 14,
        titre_offre: "Data Scientist",
        description:
          "On recherche des d\u00e9veloppeur Python passionn\u00e9 par les traitement de donn\u00e9es et l'intelligence artificielle",
        created_at: "2025-07-18T08:56:15.000000Z",
        updated_at: "2025-07-23T07:21:36.000000Z",
        recruteur_id: 2,
        recruteur: {
          id: 2,
          url_siteweb: null,
          adresse_actuel: "Paris, France",
          num_telephone: "0349785641",
          secteur_travail: "Informatique",
          logo_entreprise: null,
          user_id: 4,
          created_at: "2025-06-19T15:09:51.000000Z",
          updated_at: "2025-07-15T16:45:01.000000Z",
          user: {
            id: 4,
            name: "hi-tech",
            email: "hitech@gmail.com",
            role: "Recruteur",
            created_at: "2025-06-19T15:09:51.000000Z",
            updated_at: "2025-06-19T15:09:51.000000Z",
          },
        },
        missions: [
          {
            id: 12,
            description: "Mettre en place d'un module de pr\u00e9diction",
            offre_id: 14,
            created_at: "2025-07-23T07:20:04.000000Z",
            updated_at: "2025-07-23T07:20:04.000000Z",
          },
        ],
        criteres: [
          {
            id: 8,
            description: "Ma\u00eetriser Python",
            offre_id: 14,
            created_at: "2025-07-23T07:20:31.000000Z",
            updated_at: "2025-07-23T07:20:31.000000Z",
          },
        ],
      },
      score: 19.74,
      niveau: "non compatible",
    },
    {
      offre: {
        id: 2,
        titre_offre: "D\u00e9veloppeur Fullstack",
        description: null,
        created_at: "2025-06-19T15:21:18.000000Z",
        updated_at: "2025-06-19T15:21:18.000000Z",
        recruteur_id: 2,
        recruteur: {
          id: 2,
          url_siteweb: null,
          adresse_actuel: "Paris, France",
          num_telephone: "0349785641",
          secteur_travail: "Informatique",
          logo_entreprise: null,
          user_id: 4,
          created_at: "2025-06-19T15:09:51.000000Z",
          updated_at: "2025-07-15T16:45:01.000000Z",
          user: {
            id: 4,
            name: "hi-tech",
            email: "hitech@gmail.com",
            role: "Recruteur",
            created_at: "2025-06-19T15:09:51.000000Z",
            updated_at: "2025-06-19T15:09:51.000000Z",
          },
        },
        missions: [],
        criteres: [],
      },
      score: 12.28,
      niveau: "non compatible",
    },
  ];

  const postulerCandidature = (idOffre) => {
    
    const data = {
      freelancer_id:idFreelance,
      offre_id:idOffre
    };

    axios.post(`${ApiURL}/postule-candidature`, data, {
      headers:{
        "Authorization": `Bearer ${token}`,
        "Content-Type":"application/json"
      }
    }).then((response) => {
      console.log(response.data.message);
    }).catch((error) => {
      console.log("Erreur inattendue:", error);
    })
  }
  return (
    <div className="p-10">
      <div className="font-[Sora] mb-4">
        <h1 className="font-bold text-[25px] text-white">Offre disponible</h1>
        <p className="text-gray-200 font-extralight text-[15px]">
          Voici la liste des offres disponible pour votre profil
        </p>
      </div>
      <div className="grid grid-col-1 md:grid-cols-6 gap-4 mb-8">
        {matching.map((l, index) => (
          <div
            key={index}
            className="bg-gray-800 col-span-6 flex items-center justify-between p-5 rounded-md "
          >
            <div className="flex items-center">
              <div className="bg-green-200 w-30 h-30 text-center rounded-md mr-5">
                <h1 className="text-green-600 text-[80px]">
                  {l.offre.titre_offre.charAt(0)}
                </h1>
              </div>
              <div className="leading-8">
                <h1 className="text-white font-[Sora] font-bold text-[20px]">
                  {l.offre.titre_offre}
                </h1>
                <p className="text-gray-500 font-[Sora] font-light text-[15px] uppercase">
                  {l.offre.recruteur.user.name}
                </p>
                <p className="flex items-center text-gray-500 font-[Sora] font-light text-[15px]">
                  <CalendarDays className="mr-2" />{l.created_at}
                </p>
                <p className="flex items-center text-gray-500 font-[Sora] font-light text-[15px] ">
                  <MapPin className="mr-2" />
                  {l.offre.recruteur.adresse_actuel}
                </p>
              </div>
            </div>
            <Button
              onClick={() => postulerCandidature(l.offre.id)}
              variant="contained"
              sx={{
                fontFamily: "Sora",
                borderRadius: 50,
                textTransform: "inherit",
              }}
            >
              Postuler
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
