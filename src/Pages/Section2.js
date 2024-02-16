import React from "react";
import { IoLogoApple } from "react-icons/io5";
import { GrSpotify } from "react-icons/gr";
import { ImAmazon } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";

const Section2 = () => {
  return (
    <div className="flex justify-center items-center gap-[9rem]  md:m-[12rem]">
      <IoLogoApple size={90} />
      <GrSpotify size={90} />
      <ImAmazon size={90} />
      <FaYoutube size={90} />
    </div>
  );
};

export default Section2;
