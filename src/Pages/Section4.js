import React from "react";
import section4Image from "../assets/images/hp-register--fitpro-solo3.png.large.2x.png";

const Section4 = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={section4Image} alt="" className="h-[13rem] md:h-[40rem] " />
      <div className="flex-col">
        <h1>REGISTER YOUR BEATS</h1>
        <button>Register Now</button>
      </div>
    </div>
  );
};

export default Section4;
