import React from "react";
import {
  BriefcaseBusiness,
  House,
  MapPin,
  Search,
  User,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gray-900 py-25">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-6 mb-20">
          <div className="col-start-1 col-end-7 text-center">
            <p className="text-white text-base/14 font-[Sora] font-light text-[50px] mb-14">
              Plongez dans le monde des offres d'emploi flexibles
              et à distance.
            </p>
          </div>
          <div className="col-start-2 col-end-6">
            <div className="flex">
              <div className="relative flex items-center w-full mr-2">
                <BriefcaseBusiness className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-white border border-gray-200 rounded-md p-3 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Je recherche"
                />
              </div>
              <div className="relative flex items-center w-full mr-2">
                <MapPin className="absolute left-4 text-gray-500" />
                <input
                  className="w-full bg-white border border-gray-200 rounded-md p-3 pl-14 font-[Sora] focus:outline-none"
                  placeholder="Ville, Région"
                />
              </div>
              <button
                type="button"
                className="bg-gray-700 text-white font-[Sora] font-light rounded-md p-3 cursor-pointer"
              >
                <Search className="size-8" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
            <div className="flex space-x-20">
              <div className="flex items-center">
                <div className="bg-purple-900 p-3 rounded-full">
                  <BriefcaseBusiness className="text-white size-7" />
                </div>
                <div className="ml-2">
                  <h5 className="text-white text-[30px] font-[Sora] font-light leading-none">
                    100
                  </h5>
                  <h6 className="text-[16px] font-[Sora] font-light text-white">
                    Missions
                  </h6>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-red-900 p-3 rounded-full">
                  <User className="text-white size-7" />
                </div>
                <div className="ml-2">
                  <h5 className="text-white text-[30px] font-[Sora] font-bold leading-none">
                    100
                  </h5>
                  <h6 className="text-[16px] font-[Sora] font-light text-gray-300">
                    Freelancers
                  </h6>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-700 p-3 rounded-full">
                  <House className="text-white size-7" />
                </div>
                <div className="ml-2">
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
    </section>
  );
}
