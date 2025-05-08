import { BadgeCheck } from "lucide-react";
import React from "react";

export default function Tarif() {
  return (
    <div className="bg-gray-900 py-8">
      <div className="container mx-auto">
        <div className="justify-items-center leading-5 mb-8">
          <h1 className="text-white font-[Sora] font-bold text-[30px]">
            Tarifs d'abonnements
          </h1>
          <p className="text-gray-500 font-[Sora] font-light text-[15px] p-4 w-1/2">
            Boostez votre visibilité et attirez plus de talents grâce à nos
            tarifs d'abonnement avantageux auprès de la grande communauté de freelancers de JobRemote.
          </p>
        </div>
        <div class="grid grid-cols-6 gap-4">
          <div class="bg-gray-950 col-start-1 col-end-3 p-4 rounded-md">
            <div className="text-center mb-2">
              <h1 className="text-green-600 font-[Sora] font-bold text-[40px]">
                0
              </h1>
              <p className="text-gray-500 font-[Sora] font-light">£ / MOIS</p>
            </div>
            <div class="flex items-center justify-center w-full">
              <div class="w-1/4 border-b border-gray-500"></div>
              <h1 class="mx-4 text-center text-white font-[Sora] font-bold text-[20px]">
                Gratuit
              </h1>
              <div class="w-1/4 border-b border-gray-500"></div>
            </div>
            <ul className="text-gray-500 font-[Sora] font-light text-[15px] leading-9">
              <li className="flex items-center justify-left">
                <BadgeCheck className="mr-2" />
                Publication de 3 offres/mois
              </li>
              <li className="flex items-center justify-left">
                <BadgeCheck className="mr-2" />
                Gestionnaire de compte et offre d'emploi
              </li>
              <li className="flex items-center justify-left">
                <BadgeCheck className="mr-2" />
                Matching automatique
              </li>
              <li className="flex items-center justify-left">
                <BadgeCheck className="mr-2" />
                Accès au profil des candidats
              </li>
            </ul>
          </div>
          <div class="bg-gray-950 col-start-3 col-end-5 p-4 rounded-md">
            <div className="text-center mb-2">
              <h1 className="text-green-600 font-[Sora] font-bold text-[40px]">
                10
              </h1>
              <p className="text-gray-500 font-[Sora] font-light">£ / MOIS</p>
            </div>
            <div class="flex items-center justify-center w-full">
              <div class="w-1/4 border-b border-gray-500"></div>
              <h1 class="mx-4 text-center text-white font-[Sora] font-bold text-[20px]">
                Lite
              </h1>
              <div class="w-1/4 border-b border-gray-500"></div>
            </div>
            <ul className="text-gray-500 font-[Sora] font-light text-[15px] leading-9">
              <li className="flex items-center justify-left">
                <BadgeCheck className="mr-2" />
                Publication de 15 offres/mois
              </li>
              <li className="flex items-center justify-left">
                <BadgeCheck className="mr-2" />
                Gestionnaire de compte et offre d'emploi
              </li>
              <li className="flex items-center justify-left">
                <BadgeCheck className="mr-2" />
                Matching automatique
              </li>
              <li className="flex items-center justify-left">
                <BadgeCheck className="mr-2" />
                Accès au profil des candidats
              </li>
            </ul>
          </div>
          <div class="bg-gray-950 col-start-5 col-end-8 p-4 rounded-md">
            <div className="text-center mb-2">
              <h1 className="text-green-600 font-[Sora] font-bold text-[40px]">
                20
              </h1>
              <p className="text-gray-500 font-[Sora] font-light">£ / MOIS</p>
            </div>
            <div class="flex items-center justify-center w-full">
              <div class="w-1/4 border-b border-gray-500"></div>
              <h1 class="mx-4 text-center text-white font-[Sora] font-bold text-[20px]">
                Premium
              </h1>
              <div class="w-1/4 border-b border-gray-500"></div>
            </div>
            <ul className="text-gray-500 font-[Sora] font-light text-[15px] leading-9">
              <li className="flex items-center justify-left">
                <BadgeCheck className="mr-2" />
                Publication de 20 offres/mois
              </li>
              <li className="flex items-center justify-left">
                <BadgeCheck className="mr-2" />
                Gestionnaire de compte et offre d'emploi
              </li>
              <li className="flex items-center justify-left">
                <BadgeCheck className="mr-2" />
                Matching automatique
              </li>
              <li className="flex items-center justify-left">
                <BadgeCheck className="mr-2" />
                Accès au profil des candidats
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
