import React from "react";
import digitaze from "../assets/images/digitaze.png";
import track from "../assets/images/track.png";
import Vector from "../assets/images/Vector.png";
const Features = () => {
  return (
    <div className="bg-[#004F95] text-[#F0F8FF] p-6 rounded-3xl flex flex-col md:w-[45%]">
      <div className="text-4xl font-bold text-center">Features</div>
      <div className="flex flex-col gap-16 mt-12">
        <div className="flex">
          <div className="h-[100px] w-[120px] p-1 bg-[#F0F8FF] rounded-lg flex justify-center md:h-[75px] md:w-[85px]">
            <img className="w-fit" src={digitaze} alt=""></img>
          </div>
          <div className="ml-8 flex flex-col gap-3">
            <div className="text-3xl font-semibold">Digitize</div>
            <div className="text-base tracking-wide">A Bird eye view of the entire Biomedical Operations.</div>
          </div>
        </div>

        <div className="flex">
          <div className="md:h-[75px] md:w-[85px] h-[100px] w-[120px] p-1 bg-[#F0F8FF] rounded-lg flex justify-center">
            <img className="w-fit" src={track} alt=""></img>
          </div>
          <div className="ml-8 flex flex-col gap-3">
            <div className="text-3xl font-semibold">Track</div>
            <div className="text-base tracking-wide">Track the product life cycle and service history.</div>
          </div>
        </div>
        <div className="flex">
          <div className="md:h-[75px] md:w-[85px] h-[100px] w-[120px] p-1 bg-[#F0F8FF] rounded-lg flex justify-center">
            <img className="w-fit" src={Vector} alt=""></img>
          </div>
          <div className="ml-8 flex flex-col gap-3">
            <div className="text-3xl font-semibold">Biomedical Budget</div>
            <div className="text-base tracking-wide">
              Regulate and save budget through analysed data and informed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
