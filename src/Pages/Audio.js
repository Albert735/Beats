import React from "react";
import audioImage from "../assets/images/studiopro-pdp-p07.png.large.2x.png";
import { BsSpeakerFill } from "react-icons/bs";

const Audio = () => {
  return (
    <div className="flex justify-center items-center  md:m-[10rem]">
      <img
        src={audioImage}
        alt=""
        className="h-[13rem] md:h-[30rem] drop-shadow-2xl hover:drop-shadow-xl"
      />
      <div className="flex-col">
      <hi>Lossless Audio</hi>
        <div className="flex gap-3">
          
          <BsSpeakerFill size={24}/>
          <h2>Lossless</h2>
        </div>

        <p>
          Beats Studio Pro has a built in Digital-to-Analog Converter (DAC) that
          delivers high-fidelity lossless audio via USB-C.2
        </p>
      </div>
    </div>
  );
};

export default Audio;
