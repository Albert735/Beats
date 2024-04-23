import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import beatsstudiopro from "../assets/images/beatsstudiopro.png";

const PreLoader = () => {
  useGSAP(() => {
    gsap.from(".text1", {
      opacity: 0,
      x: -800,
      duration: 3,
      repeatDelay: 0,
      delay: 4.5,
    });
    gsap.from(".text2", {
      opacity: 0,
      x: -1000,
      duration: 5,
      repeatDelay: 0,
      delay: 2.5,
      rawSVG: 0,
    });
    gsap.from(".text3", {
      opacity: 0,
      x: -1200,
      duration: 2,
      repeatDelay: 0,
      delay: 3,
    });
    gsap.from(".text4", {
      opacity: 0,
      x: -1400,
      duration: 1.5,
      repeatDelay: 0,
      delay: 2,
    });
    gsap.from(".text5", {
      opacity: 0,
      x: -1600,
      duration: 1,
      repeatDelay: 0,
      delay: 1,
    });
    gsap.to(".preloader-container", { y: 1500, duration: 2, delay: 15 });
    gsap.from(".beat", { y: -1500, duration: 5, delay: 5 });
    gsap.from(".studio", { y: 1000, duration: 5, delay: 8 });
    gsap.from(".pro", { y: 1000, duration: 5, delay: 8 });
  });
  return (
    <div className="fixed preloader-container bg-[#F1E9E9] dark:text-black h-[100vh] w-[100%] top-0 right-0 bottom-0 left-0 z-50 flex flex-col justify-center items-center overflow-hidden">
      <div className="span-container absolute xl:-top-[5rem] -top-[2rem]  flex z-10 justify-center items-center w-[100vw] h-[100vh] gap-5 xl:gap-[8rem] overflow-hidden">
        <span className="text1 text-[3rem] md:text-[5rem] xl:text-[10rem] font-bold font-sans">
          B
        </span>
        <span className="text2 text-[3rem] md:text-[5rem] xl:text-[10rem] font-bold font-sans">
          E
        </span>
        <span className="text3 text-[3rem] md:text-[5rem] xl:text-[10rem] font-bold font-sans">
          A
        </span>
        <span className="text4 text-[3rem] md:text-[5rem] xl:text-[10rem] font-bold font-sans">
          T
        </span>
        <span className="text5 text-[3rem] md:text-[5rem] xl:text-[10rem] font-bold font-sans">
          S
        </span>
      </div>
      <div className="flex absolute justify-center items-center gap-4 mt-[2rem] xl:mt-[3rem] leading-loose">
        <div className="studio md:text-[1.5rem] font-bold">
          <span className="text-6">S</span>
          <span className="text-7">T</span>
          <span className="text-8">U</span>
          <span className="text-9">D</span>
          <span className="text-10">I</span>
          <span className="text-11">O</span>
        </div>

        <div className="pro md:text-[1.5rem] font-light">
          <span className="text-12">P</span>
          <span className="text-13">r</span>
          <span className="text-14">o</span>
        </div>
      </div>
      <div className="flex absolute bottom-0 justify-center w-full items-center gap-4 my-[3rem] leading-loose xl:px-6 px-3">
        <div className="xl:text-[1rem] text-[12px] font-sans font-bold flex justify-between items-center w-full gap-4">
          <div className=" flex justify-center space-x-6 xl:space-x-20 items-center">
            <span>I</span>
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>I</span>
            <span>C</span>
          </div>

          <div className=" flex justify-center space-x-6 xl:space-x-20 items-center">
            <span>S</span>
            <span>O</span>
            <span>U</span>
            <span>N</span>
            <span>D</span>
          </div>
        </div>
      </div>
      <img
        src={beatsstudiopro}
        alt=""
        className="flex beat justify-center items-center absolute  "
      />
    </div>
  );
};

export default PreLoader;
