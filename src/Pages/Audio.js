import React from "react";
import audioImage from "../assets/images/studiopro-pdp-p07.png.large.2x.png";

const Audio = () => {
  return (
    <div className="flex justify-center items-center  md:m-[10rem]">
      <img src={audioImage} alt="" className="h-[13rem] md:h-[30rem] drop-shadow-2xl hover:drop-shadow-xl" />
      <div className="flex-col">
        <hi>Lossless Audio</hi>
        <h2>Lossless</h2>
        <p>
          Beats Studio Pro has a built in Digital-to-Analog Converter (DAC) that
          delivers high-fidelity lossless audio via USB-C.2
        </p>
      </div>
    </div>
  );
};

export default Audio;
