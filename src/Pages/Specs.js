import React from "react";
import { IoIosBluetooth } from "react-icons/io";
import { IoIosBatteryFull } from "react-icons/io";
import { MdOutlinePower } from "react-icons/md";
import { HiOutlineMicrophone } from "react-icons/hi";
import specImage from "../assets/images/specs.png";

const Specs = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto  md:m-[10rem] ">
      <h1 className="w-full text-center text-[4rem] font-bold">Specs</h1>

      <div className="flex  justify-center items-center m-[5rem] gap-[6rem]">
        <div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-start m-5">
              <IoIosBluetooth size={24} />
              <h3>Connectivity</h3>
              <span>Bluetooth</span>
            </div>
          </div>

          <div className="flex-col m-5">
            <IoIosBatteryFull size={24} />
            <h3>Battery</h3>
            <span>Duration 40hrs</span>
          </div>

          <div className="flex-col m-5">
            <MdOutlinePower size={24} />
            <h3>Power</h3>
            <span>Fast charge 4.2-AAC</span>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-start m-5">
              <HiOutlineMicrophone size={24} />
              <h3>Microphone</h3>
              <span>
                Support Apple Siri and <br /> Google
              </span>
            </div>
          </div>
        </div>

        <img
          src={specImage}
          alt=""
          className="h-[11rem] md:h-[20rem] drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Specs;
