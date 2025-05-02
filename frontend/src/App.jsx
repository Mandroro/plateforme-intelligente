import React from "react";
import Header from "./components/menu/Header";
import Hero from "./components/site/Hero";
import About from "./components/site/About";
import Footer from "./components/menu/Footer";
import Offre from "./components/site/Offre";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Offre/>
      <Footer/>
    </>
  );
}

export default App;
