import React from "react";
import {
  ClipboardList,
  Globe,
  Settings,
  Users,
} from "lucide-react";

export default function Service() {
  return (
    <div className="bg-gray-950 py-8">
      <div className="container mx-auto">
        <div className="justify-items-center leading-5 mb-8">
          <h1 className="text-white font-[Sora] font-bold text-[30px]">
            Nos services
          </h1>
          <p className="text-gray-500 font-[Sora] font-light text-[15px] p-4 w-1/2">
            Découvrez nos services pour améliorer vos processus de
            recrutement ainsi votre visibilté auprès de la grande communauté des
            freelancers de JobRemote.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-2 mb-2">
          <div className="bg-gray-900 col-start-2 col-end-4 p-4 rounded-md">
            <div className="w-fit bg-orange-700 p-2 rounded-md mb-2">
              <Globe className="text-white size-12" />
            </div>
            <h1 className="text-white font-[Sora] font-bold text-[18px]">
              Diffusion des offres d'emploi
            </h1>
            <p className="text-gray-500 font-[Sora] font-light text-[15px]">
              Amplifiez la portée de vos offres d'emploi en les diffusant au
              sein de la communauté dynamique et engagée de freelancers
              talentueux de JobRemote
            </p>
          </div>
          <div className="bg-gray-900 col-start-4 col-end-6 p-4 rounded-md">
            <div className="w-fit bg-purple-900 p-2 rounded-md mb-2">
              <Settings className="text-white size-12" />
            </div>
            <h1 className="text-white font-[Sora] font-bold text-[20px]">
              Gestion des offre d'emploi
            </h1>
            <p className="text-gray-500 font-[Sora] font-light text-[15px]">
              Permet aux entreprises de publier facilement leurs postes vacants,
              de spécifier les critères de recherche.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2">
          <div className="bg-gray-900 col-start-2 col-end-4 p-4 rounded-md">
            <div className="w-fit bg-red-900 p-2 rounded-md mb-2">
              <ClipboardList className="text-white size-12" />
            </div>
            <h1 className="text-white font-[Sora] font-bold text-[20px]">
              Speed recruiting
            </h1>
            <p className="text-gray-500 font-[Sora] font-light text-[15px]">
              Facilite et optimisez votre processus de recrutement grâce à
              l'intelligence artificielle intégrée à JobRemote.
            </p>
          </div>
          <div className="bg-gray-900 col-start-4 col-end-6 p-4 rounded-md">
            <div className="w-fit bg-green-900 p-2 rounded-md mb-2">
              <Users className="text-white size-12" />
            </div>
            <h1 className="text-white font-[Sora] font-bold text-[18px]">
              Accès au profils des candidats
            </h1>
            <p className="text-gray-500 font-[Sora] font-light text-[15px]">
              Offre aux recruteurs de consulte les profils de candidats
              correspondant à leurs besoins spécifiques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
