import React from "react";

import logo from "../assets/images/home-2.png";

const Home = () => {
  return (
    <div className="flex justify-center items-center relative mt-[2rem] mb-[20rem]">
      <div className="flex flex-wrap justify-center items-center relative  w-full">
        <img
          src={logo}
          alt=""
          className="md:h-[43rem] md:w-[20rem]  h-[27rem] absolute md:-top-[25rem] -top-[19rem] md:left-[10rem] left-[25rem]  drop-shadow-2xl"
        />
      </div>

      <div className="">
        <h1 className="text-[5rem] font-bold">
          <span className="ml-[5rem]">Over Head</span> <br />
          <span className="">Bagna Beats </span>
        </h1>
        <h2 className="text-[1.5rem] mb-5">Overview</h2>
        <p className="text-">
          Enjoy award-winning Beats sound with wireless listening freedom and a
          sleek, streamlined design with comfortable padded earphones,
          delivering first-rate playback.
        </p>
        <button
          type="button"
          className="bg-[#f6e7e7] gap-5 flex mt-[3rem]  p-4 rounded-[3rem]"
        >
          <p>Add to Bag</p>
          <p> GHC1799</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
