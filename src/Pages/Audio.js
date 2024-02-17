import React from "react";
import audioImage from "../assets/images/beatpods.png";


const Audio = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center  bg-image max-w-screen-xl mx-auto p-[5rem]">
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-[3.5rem] font-semibold">COMING SOON!!!</h1>
        <p className="text-[2rem]">The Beats Buds</p>
      </div>
      <div className="flex flex-col justify-center items-center  md:-top-[5rem]  h-fit ">
        <img
          src={audioImage}
          alt=""
          className="h-[10rem] md:w-full md:h-[20rem]  drop-shadow-2xl "
        />
      </div>
    </div>
  );
};

export default Audio;
