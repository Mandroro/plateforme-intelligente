import { ArrowRight, MapPin } from "lucide-react";
import React from "react";
import Logo1 from "./../images/exemple-logo-societe/archetype-consulting.jpeg";
import Logo2 from "./../images/exemple-logo-societe/ciec-group.jpeg";
import Logo3 from "./../images/exemple-logo-societe/circuit.jpeg";
import Logo4 from "./../images/exemple-logo-societe/confluence.jpeg";
import Logo5 from "./../images/exemple-logo-societe/eci-ingenierie.jpeg";
import Logo6 from "./../images/exemple-logo-societe/felixe.jpeg";
import Logo7 from "./../images/exemple-logo-societe/holateams.jpeg";
import Logo8 from "./../images/exemple-logo-societe/pixoshare.jpeg";
import Logo9 from "./../images/exemple-logo-societe/Valsoft.jpeg";

export default function Offre() {
  const listeOffre = [
    {
      image: Logo1,
      nom: "Archetype Consulting",
      poste: "Developpeur ReactJs/NextJs",
      lieu: "Paris, France",
    },
    {
      image: Logo2,
      nom: "Ciec Group",
      poste: "Developpeur ReactJs/NextJs",
      lieu: "Paris, France",
    },
    {
      image: Logo3,
      nom: "Circuit",
      poste: "Developpeur ReactJs/NextJs",
      lieu: "Paris, France",
    },
    {
      image: Logo4,
      nom: "Confluence",
      poste: "Developpeur ReactJs/NextJs",
      lieu: "Paris, France",
    },
    {
      image: Logo5,
      nom: "ECI Ingénierie",
      poste: "Developpeur ReactJs/NextJs",
      lieu: "Paris, France",
    },
    {
      image: Logo6,
      nom: "Felixe",
      poste: "Developpeur ReactJs/NextJs",
      lieu: "Paris, France",
    },
    {
      image: Logo7,
      nom: "Holateams",
      poste: "Developpeur Frontend ReactJs",
      lieu: "Paris, France",
    },
    {
      image: Logo8,
      nom: "Pixoshare",
      poste: "Developpeur Backend JAVA",
      lieu: "Allemagne",
    },
    {
      image: Logo9,
      nom: "Valsoft",
      poste: "Developpeur FullStack ReactJs/NextJs - Python",
      lieu: "Paris, France",
    },
  ];

  return (
    <section className="bg-gray-900 py-8">
      <div className="container mx-auto p-8">
        <div className="text-center mb-10">
          <h1 className="text-white font-[Sora] font-bold text-[30px]">
            Découvrez les offres publié dernièrement
          </h1>
        </div>
        <div class="grid grid-cols-6 gap-4 mb-8">
          {listeOffre.map((l) => (
            <div class="bg-gray-950 col-start-2 col-end-6 flex p-5">
              <img src={l.image} className="rounded-md w-1/6 mr-6" />
              <div className="leading-8">
                <h1 className="text-white font-[Sora] font-bold text-[19px]">
                  {l.poste}
                </h1>
                <p className="flex items-center text-white font-[Sora] font-thin text-[15px] ">
                  <MapPin className="mr-2" />
                  {l.lieu}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="justify-items-center">
          <button className="text-white bg-blue-600 rounded-full font-[Sora] font-light p-3 flex cursor-pointer">
            Voir toutes les offres
            <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
