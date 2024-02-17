import React from "react";
import audioImage from "../assets/images/blackbeats.png";
import { BsSpeakerFill } from "react-icons/bs";

const Audio = () => {
  return (
    <div className="flex flex-row justify-center items-center  bg-image max-w-screen-xl mx-auto p-[5rem]">
      <div className="flex relative flex-col justify-center items-center  px-[10rem] py-[5rem] md:-top-[5rem]  h-fit ">
        <img
          src={audioImage}
          alt=""
          className="h-[10rem] md:w-full md:h-[20rem]  drop-shadow-xl hover:drop-shadow-xl absolute"
        />
      </div>

      <div className="flex-col">
        <hi className="font-semibold text-[2rem] mb-[3rem]">Lossless Audio</hi>
        <div className="flex gap-3">
          <BsSpeakerFill size={24} />
          <h2 className="text-[1.2rem]">Lossless</h2>
        </div>

        <p className="leading-loose">
          Beats Studio Pro has a built
          <br /> in Digital-to-Analog Converter (DAC)
          <br /> that delivers high-fidelity lossless audio
          <br /> via USB-C.2
        </p>
      </div>
    </div>
  );
};

export default Audio;
