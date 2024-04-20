import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const PreLoader = () => {
  useGSAP(() => {
    gsap.from(".text1", { opacity:0, x: -800, duration: 8, repeatDelay: 0, delay:4.5 });
    gsap.from(".text2", { opacity:0, x: -1000, duration: 5, repeatDelay:0, delay:4, rawSVG: 0});
    gsap.from(".text3", { opacity:0, x: -1200, duration: 4, repeatDelay: 0, delay:3});
    gsap.from(".text4", { opacity:0, x: -1400, duration: 3, repeatDelay: 0, delay:2});
    gsap.from(".text5", { opacity:0, x: -1600, duration: 2, repeatDelay: 0 , delay:1});
    gsap.to(".preloader-container", { y: 1000, duration: 5, delay: 13 });



    // gsap.to(".container-1",{y:-50, duration:1, repeatDelay:0});
    // gsap.to(".container-2",{y:-50, duration:2, repeatDelay:0});
    // gsap.to(".container-3",{y:-50, duration:3, repeatDelay:0});
    // gsap.to(".span-1",{y:100, duration:1, repeatDelay:0});
    // gsap.to(".span-2",{y:2, duration:2, repeatDelay:0});
  });
  return (
    <div className="fixed preloader-container bg-initial dark:text-white h-[100vh] w-[100%] top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center overflow-hidden">
      <div className="span-container flex justify-center items-center w-[100vw]  h-[100vh] gap-5 md:gap-[5rem] overflow-hidden">
        <span className="text1 text-[3rem] md:text-[10rem]">B</span>
        <span className="text2 text-[3rem] md:text-[10rem]">E</span>
        <span className="text3 text-[3rem] md:text-[10rem]">A</span>
        <span className="text4 text-[3rem] md:text-[10rem]">T</span>
        <span className="text5 text-[3rem] md:text-[10rem]">S</span>
      </div>
      {/* <span className="absolute font-mono text-[1rem] flex justify-center items-center bottom-[20rem] gap-5 w-[100%]">
        <span className="container-1">
          <span className="span-1">B</span>
          <span className="span-2">u</span>
          <span className="span-3">i</span>
          <span className="span-4">l</span>
          <span className="span-5">t</span>
        </span>

        <span className="container-2">
          <span className="span-6">B</span>
          <span className="span-7">y</span>
        </span>
        <span className="container-3">
          <span className="span-8">J</span>
          <span className="span-9">a</span>
          <span className="span-10">y</span>
          <span className="span-11">t</span>
          <span className="span-12">e</span>
          <span className="span-13">e</span>
        </span>
      </span> */}
    </div>
  );
};

export default PreLoader;
