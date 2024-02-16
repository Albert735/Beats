import React from "react";
import section4Image from "../assets/images/hp-register--fitpro-solo3.png.large.2x.png";

const Section4 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="flex ">
        <img src={section4Image} alt="" className="h-[20rem] md:h-[40rem] " />
      </div>
      <div className="flex-col">
        <h1>REGISTER YOUR BEATS</h1>
        <button className="">Register Now</button>
      </div>
    </div>
  );
};

export default Section4;
