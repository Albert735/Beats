import React from "react";
import productImage1 from "../assets/images/product1.png";
import { FaCartShopping } from "react-icons/fa6";
const PopCard = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-white bg-opacity-10 flex justify-center items-center ">
      <div className="bg-white text-black dark:bg-[#323536] dark:text-white flex justify-center items-center max-w-screen-xl mx-auto p-10 w-full rounded-md">
        <div className="w-full">
          <img src={productImage1} alt="" className="" />
        </div>
        <div className="flex flex-col justify-center items-start w-full ">
          <div>
            <h1 className="font-semibold text-[2rem] my-[1rem]">Just In</h1>
            <p className="font-light leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              ut praesentium vitae explicabo repellat asperiores voluptates
              perferendis recusandae, ipsum eveniet molestias. Aut possimus
              repellendus debitis sapiente quibusdam id deserunt consectetur.
            </p>
          </div>

          <div className="my-3 font-light">
            <h1 className="font-semibold">Available Sizes</h1>
            <ul className="m-2">
              <li className="m-2">Small </li>
              <li className="m-2">Medium </li>
              <li className="m-2">Large</li>
              <li className="m-2">Big size/Not Available</li>
            </ul>
          </div>

          <div className="flex gap-7 ">
            <button
              onClick={onClose}
              className=" dark:bg-[#f6e7e7] dark:text-black text-white bg-[#191A1A]  mt-[2rem] px-5 py-2 rounded-[3rem] drop-shadow-md  hover:scale-110 hover:ease-in-out duration-500 flex justify-center items-center gap-2"
            >
              Add to cart <FaCartShopping />
            </button>
            <button
              onClick={onClose}
              className=" dark:bg-[#f6e7e7] dark:text-black text-white bg-[#191A1A] gap-1 flex mt-[2rem] px-5 py-2 rounded-[3rem] drop-shadow-md  hover:scale-110 hover:ease-in-out duration-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopCard;
