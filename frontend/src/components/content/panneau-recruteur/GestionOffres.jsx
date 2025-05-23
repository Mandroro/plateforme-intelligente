import * as React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  ChevronLeft,
  ChevronRight,
  PenBox,
  Plus,
  Search,
  Trash,
} from "lucide-react";
import { Tooltip } from "@mui/material";
import NouveauOffre from "./modal/NouveauOffre";

const columns = [
  { id: "titre", label: "Titre", minWidth: 100 },
  { id: "date", label: "Date", minWidth: 100 },
  { id: "action", label: "", minWidth: 10 },
];

function createData(titre, date, action) {
  return { titre, date, action };
}

const rows = [
  createData(
    "Developpeur Fullstack ReactJS",
    "2025-05-10",
    <div className="flex space-x-1">
      <Tooltip title="Modifier">
        <button className="bg-gray-600 p-2 rounded-md cursor-pointer">
          <PenBox />
        </button>
      </Tooltip>
      <Tooltip title="Supprimer">
        <button className="bg-blue-600 p-2 rounded-md cursor-pointer">
          <Trash />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "Lead Developpeur ReactJS",
    "2025-05-10",
    <div className="flex space-x-1">
      <Tooltip title="Modifier">
        <button className="bg-gray-600 p-2 rounded-md cursor-pointer">
          <PenBox />
        </button>
      </Tooltip>
      <Tooltip title="Supprimer">
        <button className="bg-blue-600 p-2 rounded-md cursor-pointer">
          <Trash />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "Developpeur Fullstack ReactJS/Symfony",
    "2025-05-10",
    <div className="flex space-x-1">
      <Tooltip title="Modifier">
        <button className="bg-gray-600 p-2 rounded-md cursor-pointer">
          <PenBox />
        </button>
      </Tooltip>
      <Tooltip title="Supprimer">
        <button className="bg-blue-600 p-2 rounded-md cursor-pointer">
          <Trash />
        </button>
      </Tooltip>
    </div>
  ),
  createData(
    "Developpeur Fulstack ReactJS/NodeJs",
    "2025-05-10",
    <div className="flex space-x-1">
      <Tooltip title="Modifier">
        <button className="bg-gray-600 p-2 rounded-md cursor-pointer">
          <PenBox />
        </button>
      </Tooltip>
      <Tooltip title="Supprimer">
        <button className="bg-blue-600 p-2 rounded-md cursor-pointer">
          <Trash />
        </button>
      </Tooltip>
    </div>
  ),
];

export default function GestionOffres() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRows, setFilteredRows] = useState(rows);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);

  const ouvrirFormulaireOffre = () => {
    setOpen(true);
  };

  const fermerFormulaireOffre = () => {
    setOpen(false);
  };

  // Fonction de recherche
  useEffect(() => {
    const results = rows.filter((row) =>
      row.titre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRows(results);
    setCurrentPage(1);
  }, [searchTerm, rows]);

  // Calcul de la pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredRows.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="p-6 md:p-4">
      <div className="md:flex items-center justify-between mb-4">
        <h1 className="text-white font-[Sora] text-[15px] mb-4 md:mb-0">
          Liste des offres publié
        </h1>
        <div className="flex items-center space-x-1">
          <div className="relative flex-grow flex items-center w-full">
            <Search className="absolute left-4 text-gray-500" />
            <input
              className="w-full bg-white border border-gray-200 rounded-md p-2 pl-14 font-[Sora] focus:outline-none"
              placeholder="Je chercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={ouvrirFormulaireOffre}
            className="hidden md:flex p-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-[Sora] items-center justify-center w-full"
          >
            <Plus className="text-white mr-2" />
            Nouveau
          </button>

          {/* Bouton mobile */}
          <button className="md:hidden p-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-[Sora] w-1-/2">
            <Plus className="text-white" />
          </button>
        </div>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden", bgcolor: "#1e2939" }}>
        <TableContainer>
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
              {currentRows.length > 0 ? ( // Condition pour vérifier si des données sont présentes
                currentRows.map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1}>
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
                              justifyItems: "end",
                            }}
                          >
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
              ) : (
                // Afficher le message si aucune donnée n'est trouvée
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    align="center"
                    sx={{
                      color: "#fff",
                      fontFamily: "Sora",
                      fontSize: "16px",
                      borderColor: "#1e2939",
                    }}
                  >
                    Aucune donnée correspondante
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Pagination */}
      {filteredRows.length > 0 && ( // Afficher la pagination seulement s'il y a des données filtrées
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight />
          </button>
        </div>
      )}

      {/* Formulaire offre */}
      <NouveauOffre
        open={open}
        setOpen={setOpen}
        fermerFormulaireOffre={fermerFormulaireOffre}
      />
    </div>
  );
}
