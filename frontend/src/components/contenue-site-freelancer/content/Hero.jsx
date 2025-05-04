import React from "react";
import { BriefcaseBusiness, House, MapPin, Search, User } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gray-900 py-12 md:py-25">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-6 mb-10 md:mb-20">
          <div className="col-start-1 col-end-7 text-center">
            <p className="text-white font-[Sora] font-light text-[25px] md:text-[50px] mb-8 md:mb-14">
              Plongez dans le monde des offres d'emploi flexibles et à distance.
            </p>
          </div>
          <div className="col-start-1 md:col-start-2 col-end-7 md:col-end-6">
            <div className="md:flex">
              <div className="relative flex items-center w-full mb-2 md:mb-0 mr-2">
                <BriefcaseBusiness className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-white border border-gray-200 rounded-md p-3 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Je recherche"
                />
              </div>
              <div className="relative flex items-center w-full mr-2 mb-2 md:mb-0">
                <MapPin className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-white border border-gray-200 rounded-md p-3 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Ville, Région"
                />
              </div>

              {/* Affiche button sur mobile */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="bg-gray-700 text-white font-[Sora] font-light w-full rounded-md p-3 cursor-pointer flex items-center justify-center"
                >
                  Rechercher
                </button>
              </div>

              {/* Affiche button sur ordinateur/tablette */}
              <div className="hidden md:flex">
                <button
                  type="button"
                  className="bg-gray-700 text-white font-[Sora] font-light rounded-md p-3 cursor-pointer"
                >
                  <Search className="size-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-start-1 col-end-7">
            <div className="flex items-center justify-center space-x-8 md:space-x-20">
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
        </div>
      </div>
    </section>
  );
}
