import React from "react";
import Header from "./../contenue-site-freelancer/layout/Header";
import Hero from "./../contenue-site-freelancer/content/Hero";
import About from "./../contenue-site-freelancer/content/About";
import Offre from "./../contenue-site-freelancer/content/Offre";
import Footer from "./../contenue-site-freelancer/layout/Footer";

export default function SiteFreelancer() {
  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Offre/>
      <Footer />
    </>
  );
}
