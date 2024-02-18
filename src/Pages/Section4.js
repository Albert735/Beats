import React from "react";
import section4Image from "../assets/images/hp-register--fitpro-solo3.png.large.2x.png";

const Section4 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center max-w-screen-xl mx-auto my-[10rem]">
      <div className="flex ">
        <img src={section4Image} alt="" className="h-[20rem] md:h-[20rem] " />
      </div>
      <div className="flex-col">
        <h1 className="text-[3rem] font-semibold">REGISTER YOUR BEATS</h1>
        <button className="bg-[#f6e7e7] dark:bg-[#191A1A]  flex justify-center mt-[3rem]  p-3 rounded-[3rem] drop-shadow-md md:w-[12rem]">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Section4;
