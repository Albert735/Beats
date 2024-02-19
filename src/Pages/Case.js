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
      // data-aos="fade-up"
      // data-aos-delay="1000"
      // data-aos-easing="linear"
      className="flex flex-col justify-center items-center md:m-[10rem]"
    >
      <h1 className="w-full text-center text-[4rem] text-[#8d8485] font-bold">Case</h1>
      <div className="flex flex-col md:flex-row">
        <img
          src={caseImage}
          alt=""
          className="mx-auto max-w-full h-[15rem] md:h-[30rem] drop-shadow-2xl"
        />
        <div className="flex flex-col justify-center items-start p-[5rem]">
          <p className="leading-loose text-[1.3rem]">
            With a comfortable and <br />
            adaptable case so that you
            <br /> can store it whenever you
            <br /> want, and keep your durability <br /> forever.
          </p>
          <button className="bg-[#f6e7e7] dark:bg-[#191A1A] gap-1 flex mt-[2rem]  p-4 rounded-[3rem] drop-shadow-md md:hover:ml-3 hover:ease-in-out duration-500">
            <IoIosInformationCircleOutline size={24} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Case;
