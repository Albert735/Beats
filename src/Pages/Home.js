import React from "react";

import logo from "../assets/images/home-2.png";

const Home = () => {
  return (
    <div className="flex  justify-center items-center">
      <div className="flex justify-center items-centerrelative">
        <img
          src={logo}
          alt=""
          className="md:h-[36.5rem] h-[27rem] absolute md:-top-[4rem] -top-[9.75rem] md:left-[5.5rem] right-10  "
        />
      </div>
      <div className="flex-col mt-[1rem] ">
        <h1>Over Head Bagna Beats</h1>
        <h2>Overview</h2>
        <p>
          Enjoy award-winning Beats sound with wireless listening freedom and a
          sleek, streamlined design with comfortable padded earphones,
          delivering first-rate playback.
        </p>
        <button type="button" className="bg-[#FFFAFA]">
          Add to Bag GHC1799
        </button>
      </div>
    </div>
  );
};

export default Home;
