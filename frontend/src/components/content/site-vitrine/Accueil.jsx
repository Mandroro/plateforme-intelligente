import React from "react";
import HeroImage from "./../../images/image-hero.png";
import AboutImage from "./../../images/image-about.png";
import { NavLink } from "react-router";
import {
  BriefcaseBusiness,
  ClipboardList,
  Globe,
  House,
  Mail,
  Search,
  Send,
  Settings,
  User,
  Users,
} from "lucide-react";
export default function Accueil() {
  return (
    <>
      {/* Section Bienvenu */}
      <section className="bg-gray-900 py-25 md:py-45">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-6">
            <div className="md:hidden col-start-1 col-end-7 mb-4">
              <img src={HeroImage} />
            </div>
            <div className="col-start-1 col-end-7 md:col-end-5 ml-4 md:ml-8">
              <h1 className="text-white font-[Sora] font-bold text-[25px] md:text-[40px]  leading-9 md:leading-12 mb-4">
                Découvrez votre futurs collaborateur à distance
              </h1>
              <p className="text-gray-500 font-[Sora] font-light text-[16px] mb-8">
                Rejoignez notre communauté de freelancers et de recruteurs pour
                construire ensemble un avenir meilleur avec des nouveaux
                opportunités à travers le monde entier.Inscrivez-vous
                dés-maintenant si vous n'avez pas encore de compte.
              </p>
              <div className="md:flex md:space-x-2 md:space-y-0 space-y-3 mb-18">
                <NavLink to="/offres" className="text-white w-full md:w-1/3 bg-green-600 font-[Sora] font-light text-[14px] p-3 rounded-md flex items-center justify-center cursor-pointer">
                  Voir les offres disponibles
                </NavLink>
                <NavLink
                  to="/inscription"
                  className="w-full md:w-1/4 text-white bg-blue-600 font-[Sora] font-light text-[14px] p-3 rounded-md flex items-center justify-center cursor-pointer"
                >
                  Créer un compte
                </NavLink>
              </div>

              {/* Stat */}
              <div className="flex space-x-8 md:space-x-20">
                <div className="md:flex md:items-center justify-items-center">
                  <div className="bg-purple-900 w-fit p-3 rounded-full mb-3 md:mb-0">
                    <BriefcaseBusiness className="text-white size-7" />
                  </div>
                  <div className="justify-items-center md:ml-2">
                    <h5 className="text-white text-[30px] font-[Sora] font-bold leading-none">
                      100
                    </h5>
                    <h6 className="text-[16px] font-[Sora] font-light text-white">
                      Missions
                    </h6>
                  </div>
                </div>
                <div className="md:flex md:items-center justify-items-center">
                  <div className="bg-red-900 w-fit p-3 rounded-full mb-3 md:mb-0">
                    <User className="text-white size-7" />
                  </div>
                  <div className="justify-items-center md:ml-2">
                    <h5 className="text-white text-[30px] font-[Sora] font-bold leading-none">
                      100
                    </h5>
                    <h6 className="text-[16px] font-[Sora] font-light text-gray-300">
                      Freelancers
                    </h6>
                  </div>
                </div>
                <div className="md:flex md:items-center justify-items-center">
                  <div className="bg-orange-700 w-fit p-3 rounded-full mb-3 md:mb-0">
                    <House className="text-white size-7" />
                  </div>
                  <div className="justify-items-center md:ml-2">
                    <h5 className="text-white text-[30px] font-[Sora] font-bold leading-none">
                      100
                    </h5>
                    <h6 className="text-[16px] font-[Sora] font-light text-gray-300">
                      Entreprises
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex col-start-1 md:col-start-5 col-end-6 md:col-end-7">
              <img src={HeroImage} />
            </div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalité */}
      <section className="bg-gray-950 py-8 md:py-10">
        <div className="container mx-auto p-4">
          <div className="justify-items-center leading-5 mb-8">
            <h1 className="text-white font-[Sora] font-bold text-[30px]">
              Fonctionnalité
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-2">
            <div className="bg-gray-900 col-start-1 col-end-7 md:col-end-3 p-4 rounded-md">
              <div className="w-fit bg-blue-900 p-2 rounded-md mb-2">
                <Search className="text-white size-12" />
              </div>
              <h1 className="text-white font-[Sora] font-bold text-[20px]">
                Rechercher d'opportunités
              </h1>
              <p className="text-gray-500 font-[Sora] font-light text-[15px]">
                Permet d'effectuer des recherches spécifiques pour obtenir des
                résultats exacts correspondant aux critères demandés.
              </p>
            </div>
            <div className="bg-gray-900 col-start-1 col-end-7 md:col-start-3 md:col-end-5 p-4 rounded-md">
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
            <div className="bg-gray-900 col-start-1 md:col-start-5 col-end-7 p-4 rounded-md">
              <div className="w-fit bg-purple-900 p-2 rounded-md mb-2">
                <Settings className="text-white size-12" />
              </div>
              <h1 className="text-white font-[Sora] font-bold text-[20px]">
                Gestion des offre d'emploi
              </h1>
              <p className="text-gray-500 font-[Sora] font-light text-[15px]">
                Permet aux entreprises de publier facilement leurs postes
                vacants, de spécifier les critères de recherche.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
            <div className="bg-gray-900 col-start-1 col-end-7 md:col-end-3 p-4 rounded-md">
              <div className="w-fit bg-gray-700 p-2 rounded-md mb-2">
                <Send className="text-white size-12" />
              </div>
              <h1 className="text-white font-[Sora] font-bold text-[20px]">
                Envoi de candidature
              </h1>
              <p className="text-gray-500 font-[Sora] font-light text-[15px]">
                Permet aux freelancers de postuler directement aux offres via la
                plateforme et d'envoyer leur candidature aux recruteurs.
              </p>
            </div>
            <div className="bg-gray-900 col-start-1 col-end-7 md:col-start-3 md:col-end-5 p-4 rounded-md">
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
            <div className="bg-gray-900 col-start-1 md:col-start-5 col-end-7 p-4 rounded-md">
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
      </section>

      {/* Section A propos */}
      <section className="bg-gray-900">
        <div className="container mx-auto p-8">
          <div className="grid grid-col-1 md:grid-cols-6 gap-3">
            <div className="col-start-1 col-end-7 md:col-end-4 p-4">
              <div className="md:hidden col-start-1 md:col-start-4 col-end-7 justify-items-center mb-8">
                <img src={AboutImage} />
              </div>
              <p className="text-green-600 font-[Sora] font-bold text-[30px]">
                JobRemote:
              </p>
              <p className="text-white font-[Sora] font-light text-[21px] md:text-[30px] leading-9 mb-3">
                Portail de recrutement de travail à distance
              </p>
              <p className="text-gray-500 text-justify font-[Sora] font-light text-[15px] mb-4">
                Propulsée par une intelligence artificielle de pointe,{" "}
                <span className="font-bold">JobRemote</span> révolutionne le
                recrutement en ligne. Notre plateforme analyse finement les
                compétences des freelances pour leur proposer des missions
                idéales en un temps record. Côté entreprises, notre IA affine la
                recherche de talents, vous aidant à dénicher rapidement les
                profils les plus pertinents pour propulser votre croissance.
                Rejoignez <span className="font-bold">JobRemote</span> et
                laissez l'intelligence artificielle transformer votre façon de
                trouver des opportunités ou de recruter des experts.
              </p>
              <button className="bg-blue-600 text-white font-[Sora] font-light p-3 rounded-md cursor-pointer">
                Contactez-nous
              </button>
            </div>
            <div className="hidden md:flex item-center col-start-4 col-end-7 justify-center">
              <img src={AboutImage} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
