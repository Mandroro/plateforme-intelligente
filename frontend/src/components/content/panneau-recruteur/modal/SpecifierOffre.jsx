import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Plus } from "lucide-react";
import axios from "axios";
import { useApiConfig } from "../../../../ApiUrlConfiguration";

export default function SpecifierOffre({ id, open, fermerSpecifierOffre }) {
  const { ApiURL } = useApiConfig();
  const token = localStorage.getItem("token");
  const [mission, setMission] = useState("");
  const [competence, setCompetence] = useState("");
  const [dataCompetence, setDataCompetence] = useState([]);
  const [dataMission, setDataMission] = useState([]);

  // Fonction pour récupérer les missions
  const fetchMissions = () => {
    axios
      .get(`${ApiURL}/missions/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDataMission(response.data.resultat);
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  // Fonction pour récupérer les compétences
  const fetchCompetences = () => {
    axios
      .get(`${ApiURL}/criteres/${id}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDataCompetence(response.data.resultat);
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  useEffect(() => {
    if (open) {
      setCompetence("");
      setMission("");
      fetchMissions();
      fetchCompetences();
    }
  }, [open]);

  // Ajouter une mission
  const addMission = (e) => {
    e.preventDefault();

    const data = {
      description: mission,
      offre_id: id,
    };
    axios
      .post(`${ApiURL}/missions/create`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data.message);
          setMission("");
          fetchMissions(); // actualiser la liste des missions
        }
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  // Ajouter une compétence
  const addCompetence = (e) => {
    e.preventDefault();

    const data = {
      description: competence,
      offre_id: id,
    };
    axios
      .post(`${ApiURL}/criteres/create`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data.message);
          setCompetence("");
          fetchCompetences(); // actualiser la liste des compétences
        }
      })
      .catch((error) => {
        console.log("Erreur inattendue:", error);
      });
  };

  return (
    <React.Fragment>
      <Dialog
        sx={{ marginTop: 6 }}
        fullWidth
        maxWidth={"sm"}
        open={open}
        scroll="paper"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ fontFamily: "Sora", fontSize: 18 }}
        >
          {"Spécification d'une offre"}
        </DialogTitle>
        <DialogContent>
          <div className="mb-4">
            <label className="font-[Sora]">Réference</label>
            <input
              className="w-full bg-white p-2 border border-gray-200 rounded-md focus:outline-none"
              placeholder="Réference"
              value={id}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="font-[Sora]">Mission</label>
            <div className="flex">
              <input
                className="w-full bg-white p-2 border border-gray-200 rounded-l-md focus:outline-none"
                placeholder="Ajouter une mission"
                value={mission}
                onChange={(e) => setMission(e.target.value)}
              />
              <button
                onClick={addMission}
                className="bg-blue-600 p-2 rounded-r-md text-white cursor-pointer"
              >
                <Plus />
              </button>
            </div>
            {dataMission.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {dataMission.map((m) => (
                  <span
                    key={m.id}
                    className="bg-blue-100 text-blue-800 text-[14px] font-[Sora] p-2 rounded-full"
                  >
                    {m.description}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="font-[Sora]">Compétence requise</label>
            <div className="flex">
              <input
                className="w-full bg-white p-2 border border-gray-200 rounded-l-md focus:outline-none"
                placeholder="Ajouter un compétence"
                value={competence}
                onChange={(e) => setCompetence(e.target.value)}
              />
              <button
                onClick={addCompetence}
                className="bg-blue-600 p-2 rounded-r-md text-white cursor-pointer"
              >
                <Plus />
              </button>
            </div>
            {dataCompetence.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {dataCompetence.map((c) => (
                  <span
                    key={c.id}
                    className="bg-blue-100 text-blue-800 text-[14px] font-[Sora] p-2 rounded-full"
                  >
                    {c.description}
                  </span>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={fermerSpecifierOffre}
            sx={{ fontFamily: "Sora", textTransform: "inherit" }}
          >
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
