import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useApiConfig } from "../../../ApiUrlConfiguration";

export default function DashboardFreelancer() {
  const { ApiURL } = useApiConfig();
  const token = localStorage.getItem("token");
  const [nbOffre, setNbOffre] = useState(0);
  const [nbCandidature, setNbCandidature] = useState(0);
  const [historique, setHistorique] = useState([]);

  useEffect(() => {
    freelancer();
  }, []);

  const freelancer = () => {
    axios
      .get(`${ApiURL}/utilisateur`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dashboardCanditaure(response.data.id);
        dashboardOffre();
        historiqueCandidature(response.data.id);
      });
  };

  const dashboardOffre = () => {
    axios
      .get(`${ApiURL}/nombre-offre`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setNbOffre(response.data.resultat);
        }
      });
  };

  const dashboardCanditaure = (id) => {
    axios
      .get(`${ApiURL}/nombre-candidature-envoye/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setNbCandidature(response.data.resultat);
        }
      });
  };

  const historiqueCandidature = (id) => {
    axios
      .get(`${ApiURL}/historique-candidature-envoye/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setHistorique(response.data.resultat);
        }
      });
  };

  const columns = [
    { id: "date", label: "Date", minWidth: 20 },
    { id: "offre", label: "Offres", minWidth: 100 },
    { id: "recruteur", label: "Recruteur", minWidth: 100 },
  ];

  function createData(offre, recruteur, date) {
    return { offre, recruteur, date };
  }

  const rows = historique.map((d) =>
    createData(d.titre_offre, d.recruteur_nom, d.date_candidature)
  );

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-7">
        <div className="bg-gray-800 col-start-1 col-end-7 md:col-end-4 p-4 rounded-md">
          <div className="flex justify-between">
            <div className="font-[Sora] text-white">
              <h1>Offres disponible</h1>
              <p className="text-[30px]">{nbOffre}</p>
            </div>
            <div className="text-white p-4 bg-purple-900 rounded-full">
              <BusinessCenterIcon sx={{ width: 40, height: 40 }} />
            </div>
          </div>
        </div>
        <div className="bg-gray-800 col-start-1 md:col-start-4 col-end-7 p-4 rounded-md">
          <div className="flex justify-between">
            <div className="font-[Sora] text-white">
              <h1>Candidature envoyé</h1>
              <p className="text-[30px]">{nbCandidature}</p>
            </div>
            <div className="text-white p-4 bg-green-600 rounded-full">
              <MarkEmailReadIcon sx={{ width: 40, height: 40 }} />
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-white font-[Sora] text-[15px] font-light mb-2">
        Dernière candidature envoyé
      </h1>
      <Paper sx={{ width: "100%", overflow: "hidden", bgcolor: "#1e2939" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontWeight: "bold",
                      color: "#fff",
                      backgroundColor: "#364153",
                      fontFamily: "Sora",
                      borderColor: "#1e2939",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            fontFamily: "Sora",
                            fontSize: "14px",
                            color: "#fff",
                            borderColor: "#1e2939",
                          }}
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
