import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import SiteFreelancer from "./components/page/SiteFreelancer";
import PageInscription from "./components/page/PageInscription";
import PageAuthentification from "./components/page/PageAuthentification";
import SiteRecruteur from "./components/page/SiteRecruteur";
import PageInscriptionRecruteur from "./components/page/PageInscriptionRecruteur";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteFreelancer />} />
        <Route path="/authentification" element={<PageAuthentification/>} />
        <Route path="/inscription" element={<PageInscription/>} />
        <Route path="/espace-recruteur" element={<SiteRecruteur/>} />
        <Route path="/inscription-recruteur" element={<PageInscriptionRecruteur/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
