import React from "react";
import product1 from "../assets/images/product1.png";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

const OrderSection = () => {
  return (
    <div className="flex flex-col  items-centerp-[3rem] h-screene w-full  md:rounded-3xl">
      <h1 className="text-start text-[2rem] w-full"> Order summary</h1>

      <div className="md:flex grid  grid-cols-3 gap-5 justify-between items-center w-full border-b-2 p-5">
        <img
          src={product1}
          alt=""
          className="h-[5.5rem] items-center bg-slate-50 p-3 w-[5rem] rounded-xl"
        />
        <div>
          <p>Black</p>
          <p>Ghc 1200</p>
        </div>

        <span className="flex flex-row gap-3 justify-center items-center bg-white p-3 rounded-lg text-black">
          <p>1</p>
          <span>
            <IoIosArrowUp />
            <IoIosArrowDown />
          </span>
        </span>
        <span className="hidden md:flex">
          <IoIosCloseCircleOutline size={26} />
          <p>Ghc 1200</p>
        </span>
      </div>

      <div className="md:flex grid  grid-cols-3  justify-between gap-5 items-center w-full border-b-2 p-5">
        <img
          src={product1}
          alt=""
          className="h-[5.5rem] items-center bg-slate-50 p-3 w-[5rem] rounded-xl"
        />
        <div>
          <p>Black</p>
          <p>Ghc 1200</p>
        </div>

        <span className="flex flex-row gap-3 justify-center items-center bg-white p-3 rounded-lg text-black">
          <p>1</p>
          <span>
            <IoIosArrowUp />
            <IoIosArrowDown />
          </span>
        </span>
        <span className="hidden md:flex">
          <IoIosCloseCircleOutline size={26} />
          <p>Ghc 1200</p>
        </span>
      </div>

      <div className="w-full space-y-[3rem] p-5 border-b-2">
        <span className="flex justify-between">
          <h1>Subtotal</h1>
          <p>Ghc 1200</p>
        </span>
        <span className="flex justify-between">
          <h1>Subtotal</h1>
          <p>Ghc 1200</p>
        </span>
      </div>
      <div className="flex justify-between w-full p-5">
        <span>
          <p>Total</p>
        </span>
        <span>
          <p>Ghc 1200</p>
        </span>
      </div>

      <div className="flex flex-col justify-center w-full p-5 gap-y-4">
        <input type="number" placeholder="Coupon Code" className="rounded-lg bg-transparent"/>
        <button className=" bg-blue-600 w-full rounded-lg ring">
          <p className="p-3 text-white">Apply</p>
        </button>
      </div>
    </div>
  );
};

export default OrderSection;
