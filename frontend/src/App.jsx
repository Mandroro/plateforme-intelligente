import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import PageInscription from "./components/page/PageInscription";
import PageAuthentification from "./components/page/PageAuthentification";
import SiteVitrine from "./components/page/SiteVitrine";
import Accueil from "./components/content/site-vitrine/Accueil";
import Offres from "./components/content/site-vitrine/Offres";
import Entreprises from "./components/content/site-vitrine/Entreprises";
import Candidats from "./components/content/site-vitrine/Candidats";
import PannelFreelancer from "./components/page/PannelFreelancer";
import OffresFreelancer from "./components/content/panneau-freelancer/OffresFreelancer";
import CompteFreelancer from "./components/content/panneau-freelancer/CompteFreelancer";
import DashboardFreelancer from "./components/content/panneau-freelancer/DashboardFreelance";
import PannelRecruteur from "./components/page/PannelRecruteur";
import CompteRecruteur from "./components/content/panneau-recruteur/CompteRecruteur";
import ListeCandidatures from "./components/content/panneau-recruteur/ListeCandidatures";
import GestionOffres from "./components/content/panneau-recruteur/GestionOffres";
import DashboardRecruteur from "./components/content/panneau-recruteur/DashboardRecruteur";
import { ApiUrlConfiguration } from "./ApiUrlConfiguration";
import ProtectedRouter from "./ProtectedRouter";
import DetailOffre from "./components/content/site-vitrine/content/DetailOffre";
import DetailEntreprise from "./components/content/site-vitrine/content/DetailEntreprise";
import DetailCandidat from "./components/content/site-vitrine/content/DetailCandidat";
import CandidatureFreelancer from "./components/content/panneau-freelancer/CandidatureFreelancer";
import CandidatIdeal from "./components/content/panneau-recruteur/CandidatIdeal";

function App() {
  return (
    <BrowserRouter>
      <ApiUrlConfiguration>
      <Routes>
        {/* ROUTES SITE VITRINE */}
        <Route path="/" element={<SiteVitrine />}>
          <Route index element={<Navigate to="accueil" replace />} />
          <Route path="accueil" element={<Accueil />} />
          <Route path="offres" element={<Offres />} />
          <Route path="offres/details" element={<DetailOffre/>} />
          <Route path="candidats" element={<Candidats />} />
          <Route path="candidats/details" element={<DetailCandidat/>} />
          <Route path="entreprises" element={<Entreprises />} />
          <Route path="entreprises/details" element={<DetailEntreprise />} />
        </Route>

        <Route path="/authentification" element={<PageAuthentification />} />
        <Route path="/inscription" element={<PageInscription />} />

        <Route path="/pannel-freelancer" element={<ProtectedRouter><PannelFreelancer /></ProtectedRouter>}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardFreelancer />} />
          <Route path="offres" element={<OffresFreelancer />} />
          <Route path="compte" element={<CompteFreelancer/>} />
          <Route path="candidature" element={<CandidatureFreelancer/>} />
        </Route>

        <Route path="/pannel-recruteur" element={<ProtectedRouter><PannelRecruteur /></ProtectedRouter>}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardRecruteur/>} />
          <Route path="offres" element={<GestionOffres/>} />
          <Route path="offres/candidats" element={<CandidatIdeal/>} />
          <Route path="candidature" element={<ListeCandidatures/>} />
          <Route path="compte" element={<CompteRecruteur/>} />
        </Route>
      </Routes>
      </ApiUrlConfiguration>
    </BrowserRouter>
  );
}

export default App;
