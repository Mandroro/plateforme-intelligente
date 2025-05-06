import React from "react";
import HeroImage from "./../images/image-hero.png";
import { useNavigate } from "react-router";
export default function Hero() {
  const redirection = useNavigate();
  const inscrire = () => {
    redirection("/inscription-recruteur");
  };
  return (
    <div className="bg-gray-900 py-25 md:py-45">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-6 mb-20">
          <div className="md:hidden col-start-1 col-end-7 mb-4">
            <img src={HeroImage} />
          </div>
          <div className="col-start-1 col-end-7 md:col-end-5 ml-4 md:ml-8">
            <h1 className="text-white font-[Sora] font-bold text-[25px] md:text-[40px]  leading-9 md:leading-12 mb-4">
              Venez recruter vos futurs collaborateur à distance
            </h1>
            <p className="text-gray-500 font-[Sora] font-light text-[16px] mb-8">
              Rejoignez une communauté sélective de recruteurs visionnaires.
              Ensemble, nous explorons les viviers de talents les plus
              prometteurs, ceux qui ne se contentent pas de répondre aux besoins
              d'aujourd'hui, mais qui possèdent la capacité unique de façonner
              l'avenir des entreprises. En intégrant notre réseau, vous accédez
              à des perspectives inédites et vous positionnez à l'avant-garde de
              la découverte des leaders de demain.
            </p>
            <div className="flex space-x-2">
              <button
                onClick={inscrire}
                className="text-white bg-blue-600 font-[Sora] font-light text-[14px] p-3 rounded-md flex items-center justify-center cursor-pointer"
              >
                Créer un compte recruteur
              </button>
              <a
                href="https://mail.google.com/mail/?view=cm&to=fezaywork@gmail.com&su=Aide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white bg-green-600 font-[Sora] font-light text-[14px] p-3 rounded-md flex items-center justify-center cursor-pointer">
                  Contactez-nous
                </button>
              </a>
            </div>
          </div>
          <div className="hidden md:flex col-start-1 md:col-start-5 col-end-6 md:col-end-7">
            <img src={HeroImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
