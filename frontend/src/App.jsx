import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import SiteFreelancer from "./components/page/SiteFreelancer";
import PageInscription from "./components/page/PageInscription";
import PageAuthentification from "./components/page/PageAuthentification";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteFreelancer />} />
        <Route path="/inscription" element={<PageInscription/>} />
        <Route path="/espace-recruteur" element={"Page recruteur"} />
        <Route path="/authentification" element={<PageAuthentification/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
