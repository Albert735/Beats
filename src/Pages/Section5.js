import React from "react";
import Applecare from "../assets/images/applecare-plus-logo.png.large.2x.png";
import { IoLogoApple } from "react-icons/io5";

const Section5 = () => {
  return (
    <div className="flex flex-col md:flex justify-center items-center gap-[3rem] mt-[5rem] mb-[7rem]">
      <img src={Applecare} alt="" className="h-[5rem] drop-shadow-md" />
      <p className="font-semi-bold md:text-[3rem] text-[1.5rem] text-center">
        <span className="font-bold">AppleCare+</span> for Headphones
      </p>
      <button className="flex justify-center items-center text-white gap-3 bg-[#DF1D3C] p-[1rem] rounded-full">
        Learn More <IoLogoApple size={24} />
      </button>
    </div>
  );
};

export default Section5;
