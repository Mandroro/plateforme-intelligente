import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import PageInscription from "./components/page/PageInscription";
import PageAuthentification from "./components/page/PageAuthentification";
import SiteVitrine from "./components/page/SiteVitrine";
import Accueil from "./components/content/site-vitrine/Accueil";
import Offres from "./components/content/site-vitrine/Offres";
import Entreprises from "./components/content/site-vitrine/Entreprises";
import Candidats from "./components/content/site-vitrine/Candidats";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ROUTES SITE VITRINE */}
        <Route path="/" element={<SiteVitrine />}>
          <Route index element={<Navigate to="accueil" replace />} />
          <Route path="accueil" element={<Accueil/>} />
          <Route path="offres" element={<Offres/>} />
          <Route path="candidats" element={<Candidats/>} />
          <Route path="entreprises" element={<Entreprises/>} />
        </Route>

        <Route path="/authentification" element={<PageAuthentification />} />
        <Route path="/inscription" element={<PageInscription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
