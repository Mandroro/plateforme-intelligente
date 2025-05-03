import React from "react";
import CandidatureImage from "./../../assets/image-candidature.png";
import RecruteurImage from "./../../assets/image-recruteur.png";
import {
  MessageCircleQuestion,
  NotebookPen,
  NotebookText,
  Send,
} from "lucide-react";
export default function Inscription() {
  return (
    <div className="bg-gray-950 py-4">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-6 gap-3 mb-4">
          <div className="bg-gray-900 col-start-2 col-end-4 rounded-md p-4 justify-items-center">
            <img src={CandidatureImage} className="w-1/2" />
            <h1 className="text-white font-[Sora] font-bold text-[30px] mb-3">
              Pour les freelancers
            </h1>
            <p className="text-white font-[Sora] font-thin text-[16px] mb-5 text-center">
              Élargissez vos horizons professionnels grâce à notre plateforme
              innovante, conçue pour mettre en lumière les opportunités de
              carrière qui correspondent parfaitement à votre expertise.
              Découvrez le poste idéal pour propulser votre parcours.
            </p>
            <button className="bg-green-800 text-white font-[Sora] font-light p-2 rounded-full mb-4">
              Créer un profil
            </button>
          </div>
          <div className="bg-gray-900 col-start-4 col-end-6 rounded-md p-4 justify-items-center">
            <img src={RecruteurImage} className="w-1/2" />
            <h1 className="text-white font-[Sora] font-bold text-[30px] mb-3">
              Pour les Entreprises
            </h1>
            <p className="text-white font-[Sora] font-thin text-[16px] mb-5 text-center">
              Élargissez votre portée en publiant gratuitement vos offres
              d'emploi et de recrutement. Identifiez facilement des
              professionnels talentueux pour votre organisation et rationalisez
              l'ensemble de votre gestion des candidatures.
            </p>
            <button className="bg-green-800 text-white font-[Sora] font-light p-2 rounded-full mb-4">
              Créer un compte recuteur
            </button>
          </div>
        </div>
        {/* <div className="grid grid-cols-6 gap-3">
          <div className="col-start-2 col-end-4 bg-gray-900 rounded-md">
            <div className="mt-8 justify-items-center">
              <div className="bg-gray-600 p-3 rounded-md w-fit">
                <MessageCircleQuestion className="text-white size-9" />
              </div>
            </div>
            <div className="p-8 text-center">
              <h1 className="text-xl font-[Sora] font-bold text-[25px] text-white mb-4">
                Comment postuler à une offre d’emploi ?
              </h1>
              <p className="text-white font-[Sora] font-thin text-[15px] text-wrap mb-10">
                À la recherche d'opportunités de télétravail ? Familiarisez-vous
                avec le processus simple et direct pour postuler en ligne aux
                offres d'emploi sur JobRemote.
              </p>
              <button className="bg-blue-800 font-[Sora] p-3 rounded-full text-white font-light">
                Postuler maintenant
              </button>
            </div>
          </div>
          <div className="col-start-4 col-end-6 space-y-2">
            <div className="bg-gray-900 p-4 rounded-md">
              <div className="bg-gray-600 p-3 rounded-md w-fit mb-2">
                <NotebookPen className="text-white size-7" />
              </div>
              <h1 className="text-xl font-[Sora] text-white">
                Inscription gratuite
              </h1>
              <p className="text-white font-[Sora] font-thin text-[15px]">
                Créez un compte gratuitement sur JobRemote, mettez à jour votre
                profil.
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-md">
              <div className="bg-gray-600 p-3 rounded-md w-fit mb-2">
                <NotebookText className="text-white size-7" />
              </div>
              <h1 className="text-xl font-[Sora] text-white">
                Parcourir les offres d’emploi
              </h1>
              <p className="text-white font-[Sora] font-thin text-[15px]">
                Consultez les dernières offres d’emploi à distance qui
                correspondent à vos qualifications.
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-md">
              <div className="bg-gray-600 p-3 rounded-md w-fit mb-2">
                <Send className="text-white size-7" />
              </div>
              <h1 className="text-xl font-[Sora] text-white">
                Envoyer votre candidature
              </h1>
              <p className="text-white font-[Sora] font-thin">
                Postulez directement aux offres d’emploi disponibles.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
