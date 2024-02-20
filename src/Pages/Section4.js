import React from "react";
import section4Image from "../assets/images/hp-register--fitpro-solo3.png.large.2x.png";
import AOS from "aos";

import "aos/dist/aos.css";

AOS.init();

const Section4 = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center max-w-screen-xl mx-auto my-[10rem]">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="flex "
      >
        <img
          src={section4Image}
          alt=""
          className="h-[20rem] xl:h-[20rem] hover:scale-105 duration-500 hover:ease-in-out "
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="flex-col"
      >
        <h1 className="text-[2rem] font-semibold xl:text-[3rem]">
          Register Your Beats
        </h1>
        <button className="dark:bg-[#f6e7e7] dark:text-black text-white bg-[#191A1A]  duration-500 hover:scale-110   flex justify-center my-5  p-3 rounded-[3rem]  xl:w-[12rem]">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Section4;
