import React from "react";
import AboutImage from "./../images/image-about.png";

export default function About() {
  return (
    <section className="bg-gray-950">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-6 gap-3">
          <div className="col-start-1 col-end-4 p-4">
            <p className="text-green-600 font-[Sora] font-bold text-[30px]">
              JobRemote:
            </p>
            <p className="text-white font-[Sora] font-light text-[30px] leading-9 mb-3">
              Portail de recrutement qui utilise de l'Intelligence Artificielle
            </p>
            <p className="text-white text-justify font-[Sora] font-thin text-[16px] mb-4">
              Propulsée par une intelligence artificielle de pointe,{" "}<span className="font-bold">JobRemote</span>{" "}
              révolutionne le recrutement en ligne. Notre plateforme analyse
              finement les compétences des freelances pour leur proposer des
              missions idéales en un temps record. Côté entreprises, notre IA
              affine la recherche de talents, vous aidant à dénicher rapidement
              les profils les plus pertinents pour propulser votre croissance.
              Rejoignez {" "}<span className="font-bold">JobRemote</span>{" "} et laissez l'intelligence artificielle
              transformer votre façon de trouver des opportunités ou de recruter
              des experts.
            </p>
            <button className="bg-blue-600 text-white font-[Sora] font-light p-3 rounded-md mr-2">Inscrirez-vous</button>
            <button className="bg-green-700 text-white font-[Sora] font-light p-3 rounded-md">Rejoignez l'espace recruteur</button>
          </div>
          <div className="col-start-4 col-end-7 justify-items-center">
            <img src={AboutImage} className="w-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}
