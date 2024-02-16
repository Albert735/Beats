import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import caseImage from "../assets/images/case.png";

const Case = () => {
  return (
    <div className="flex flex-col justify-center items-center md:m-[10rem]">
      <h1 className="w-full text-center text-[4rem]">Case</h1>
      <div className="flex ">
        <img src={caseImage} alt="" className="h-[15rem] md:h-[30rem] drop-shadow-2xl" />
        <div>
          <p>
            With a comfortable and adaptable case so that you can store it
            whenever you want, and keep your durability forever.
          </p>
          <button className="flex items-center gap-1 px-[1rem] rounded-md py-[1.5rem]">
            <IoIosInformationCircleOutline size={24} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Case;
