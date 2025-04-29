import React from "react";
import HeroImage from "./../../assets/image-AI.png";
import ListImage from "./../../assets/image-3D-List.png";

export default function Hero() {
  return (
    <section className="py-25">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-3">
          <div className="col-span-2 text-left">
            <p className="text-white text-base/14 font-[Sora] font-bold text-[50px] mb-3">
              Discovering the best{" "}
              <span className="text-green-500">Freelancers</span> and{" "}
              <span className="text-green-500">Remote Jobs</span>
            </p>
            <p className="text-white text-base/8 font-[Sora] font-thin text-[20px] mb-5">
              Unlock your potential and grow your business! Our platform offers
              freelancers the tools to expand their network and access promising
              projects. For companies, this is an opportunity to find agile and
              competent talent to drive their growth. Don't wait any longer,
              sign up and explore a world of possibilities!
            </p>
            <button className="border border-green-600 text-white font-[Sora] rounded-full p-3 w-1/5 mr-2">
              Let's started
            </button>
            <button className="border border-green-600 text-white font-[Sora] rounded-full p-3 w-1/5">
              About
            </button>
          </div>
          <div className="absolute z-1 top-28 right-4">
            <img src={HeroImage} className="w-[70%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
