import React from "react";
import error from "../assets/Svg/404 Error Page not Found with people connecting a plug-amico.svg";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-4">
      <img src={error} alt="error" className="h-[50rem]" />
      <Link to='/'>
        <button className="bg-blue-600 w-[20rem] p-[1rem] rounded-lg">
          <p className="text-white">Home</p>
        </button>
      </Link>
    </div>
  );
};

export default Page404;
