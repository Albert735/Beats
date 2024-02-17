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
      data-aos-delay="500"
      data-aos-easing="ease-in-out"
      className="flex justify-center items-center gap-[9rem] max-w-screen-xl mx-auto md:m-[12rem]"
    >
      <IoLogoApple size={90} />
      <GrSpotify size={90} />
      <ImAmazon size={90} />
      <FaYoutube size={90} />
    </div>
  );
};

export default Section2;
