// import React, { useEffect, useState } from "react";
import audioImage from "../assets/images/beatpods.png";
// import audioImage2 from "../assets/images/low-poly-grid-haikei-2.png";
import AOS from "aos";

import "aos/dist/aos.css";
// import { useState } from "react";
// import { useEffect } from "react";

AOS.init();

const Audio = () => {
  // const [background, setBackground] = useState("bg-light");

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark").matches) {
  //     //setBackground("bg-dark");
  //     document.documentElement.classList.replace("bg-light", "bg-dark");
  //   } else {
  //     //setBackground("bg-light");
  //     document.documentElement.classList.replace("bg-dark", "bg-light");
  //   }

  //   console.log("run");
  // }, [window.matchMedia("(prefers-color-scheme: dark").matches]);

  return (
    <div
      id="newImage"
      className={`flex flex-col xl:flex-row justify-center items-center  bg-light p-[5rem] dark:text-[#191A1A]`}
    >
      <div
        //Animation On Scroll
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="ease-in-out"
        className="flex flex-col justify-center items-center xl:items-start bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F]"
      >
        <h1 className="text-[2rem] xl:text-[3.5rem] font-semibold">
          Coming Soon!
        </h1>
        <p className="text-[1.3rem] xl:text-[2rem]">The Beats Buds</p>
      </div>
      <div
        //Animation On Scroll
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="ease-in-out"
        className="flex flex-col justify-center items-center xl:-top-[5rem]  "
      >
        <img
          src={audioImage}
          alt=""
          className="h-[15rem]  xl:h-[20rem] hover:scale-110 duration-500 hover:ease-in-out"
        />
      </div>
    </div>
  );
};

export default Audio;
