import { BriefcaseBusiness } from "lucide-react";
import React from "react";

export default function Service() {
  return (
    <div className="py-2">
      <div className="container mx-auto p-4">
        <div className="text-center mb-4">
          <h1 className="text-green-600 font-[Sora] font-bold text-[35px]">
            Services
          </h1>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-end-4 bg-gray-800 p-6 rounded-md flex flex-col space-y-4">
            <div className="bg-gray-700 p-3 rounded-md w-fit">
              <BriefcaseBusiness className="text-white size-7" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white">Service 1</h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-start-4 col-end-6 bg-gray-800 p-6 rounded-md flex flex-col space-y-4">
            <div className="bg-gray-700 p-3 rounded-md w-fit">
              <BriefcaseBusiness className="text-white size-7" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white">Service 2</h1>
              <p className="text-gray-400">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="col-start-2 col-end-4 bg-gray-800 p-6 rounded-md flex flex-col space-y-4">
            <div className="bg-gray-700 p-3 rounded-md w-fit">
              <BriefcaseBusiness className="text-white size-7" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white">Service 3</h1>
              <p className="text-gray-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div className="col-start-4 col-end-6 bg-gray-800 p-6 rounded-md flex flex-col space-y-4">
            <div className="bg-gray-700 p-3 rounded-md w-fit">
              <BriefcaseBusiness className="text-white size-7" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white">Service 4</h1>
              <p className="text-gray-400">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
