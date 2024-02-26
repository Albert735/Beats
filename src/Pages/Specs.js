import React from "react";
import { IoIosBluetooth } from "react-icons/io";
import { IoIosBatteryFull } from "react-icons/io";
import { MdOutlinePower } from "react-icons/md";
import { HiOutlineMicrophone } from "react-icons/hi";
import specImage from "../assets/images/specs.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Specs = () => {
  return (
    <div
      // data-aos="fade-right"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
      id="specs"
      className="flex flex-col justify-center items-center  mx-auto  xl:m-[10rem] overflow-hidden my-[5rem]"
    >
      <h1 className="xl:w-full text-center text-[2.5rem] xl:text-[4rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F]">
        Specs
      </h1>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center md:gap-[5rem] m-[5rem] xl:gap-[6rem]">
        <div className="md:flex grid grid-cols-2 md:flex-col justify-center items-start    text-sm xl:text-[1rem] font-light">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="leading-loose "
          >
            <div className="flex flex-col justify-center items-start m-5 ">
              <IoIosBluetooth size={24} />
              <h3 className="font-bold">Connectivity</h3>
              <span>Bluetooth</span>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            className="flex-col   leading-loose"
          >
            <div className="flex flex-col justify-center items-start m-5">
              <IoIosBatteryFull size={24} />
              <h3 className="font-bold">Battery</h3>
              <span>Duration 40hrs</span>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            className="flex-col  leading-loose"
          >
            <div className="flex flex-col justify-center items-start m-5">
              <MdOutlinePower size={24} />
              <h3 className="font-bold">Power</h3>
              <span>Fast charge 4.2-AAC</span>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            data-aos-easing="ease-in-out"
            className="flex justify-center items-center leading-loose"
          >
            <div className="flex flex-col justify-center items-startr m-5">
              <HiOutlineMicrophone size={24} />
              <h3 className="font-bold">Microphone</h3>
              <span>Support Apple Siri and Google</span>
            </div>
          </div>
        </div>

        <img
          src={specImage}
          alt=""
          className="h-[11rem] md:h-[15rem] xl:h-[20rem] drop-shadow-2xl "
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        />
      </div>
    </div>
  );
};

export default Specs;
