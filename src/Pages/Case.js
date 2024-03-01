import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import caseImage from "../assets/images/case.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Case = () => {
  return (
    <div 
      id="case"
    className="flex flex-col w-full justify-center items-center xl:mb-[10rem] ">
      <h1 className="w-full text-center text-[4rem] bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F] font-bold">
        Case
      </h1>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="flex flex-col xl:flex-row md:flex-row"
      >
        <img
          src={caseImage}
          alt=""
          className="mx-auto max-w-full h-[15rem] md:h-[25rem] xl:h-[30rem] drop-shadow-2xl hover:scale-110 duration-500 hover:ease-in-out"
        />
        <div
          data-aos="fade-up"
          data-aos-duration="1300"
          data-aos-easing="ease-in-out"
          className="flex flex-col justify-center items-start p-[5rem]"
        >
          <p className="leading-loose text-[1.3rem]">
            With a comfortable and <br />
            adaptable case so that you
            <br /> can store it whenever you
            <br /> want, and keep your durability <br /> forever.
          </p>
          <button className="dark:bg-[#f6e7e7] dark:text-black text-white bg-[#191A1A] gap-1 flex mt-[2rem]  py-3 px-7 rounded-[3rem] drop-shadow-md xl:hover:ml-3 hover:scale-110 hover:ease-in-out duration-500">
            <IoIosInformationCircleOutline size={24} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Case;
