import React from "react";
import { IoLogoApple } from "react-icons/io5";
import { GrSpotify } from "react-icons/gr";
import { ImAmazon } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Section2 = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-easing="ease-in-out"
      className="flex justify-between md:justify-center  mx-10 md:mx-auto items-center md:gap-[9rem]   md:m-[12rem] m-[5rem]  "
    >
      <div className="hover:mb-[2rem] hover:ease-in-out duration-500">
        <IoLogoApple className="w-11 h-[5rem] md:h-[5rem] md:w-[6rem]" />
      </div>
      <div className="hover:mb-[2rem] hover:ease-in-out duration-500 ">
        <GrSpotify className="w-11 h-[5rem] md:h-[5rem] md:w-[6rem]" />
      </div>

      <div className="hover:mb-[2rem] hover:ease-in-out duration-500 ">
        <ImAmazon className="w-11 h-[5rem] md:h-[5rem] md:w-[6rem]" />
      </div>
      <div className="hover:mb-[2rem]  hover:ease-in-out duration-500 ">
        <FaYoutube className="w-11 h-[5rem] md:h-[5rem] md:w-[6rem]" />
      </div>
    </div>
  );
};

export default Section2;
