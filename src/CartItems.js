import React from "react";
import { FaMinus } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import productImage1 from "./assets/images/product1.png";
// import productImage2 from "./assets/images/product2.png";

const CartItems = () => {
  return (
    <div className="flex relative flex-col justify-center items-center dark:text-black w-full md:w-[30rem] gap-y-7 md:font-light md:p-6">
      <div className="flex w-full justify-between items-center p-4 rounded-lg">
        <div className="flex justify-center items-start">
          <img src={productImage1} alt="" className="h-[8rem] md:h-[10rem]" />
        </div>
        <div className="w-[13rem] space-y-5 ">
          <div className="flex  justify-between items-center w-full">
            <div className="flex flex-col justify-between items-start w-full">
              <h1>Product</h1>
              <h1>Price</h1>
            </div>
            <div className="flex flex-col justify-center items-end w-full">
              <h1>Black</h1>
              <p>Ghc 800</p>
            </div>
          </div>
          <div className="flex gap-8 justify-center items-center p-2 rounded-lg">
            <button
              type="button"
              className="border border-gray-400 rounded-lg items-center"
            >
              <FaMinus size={20} />
            </button>
            <span className="">
              <p className=""> 0</p>
            </span>
            <button
              type="button"
              className="border border-gray-400 rounded-lg items-center"
            >
              <IoAdd size={20} />
            </button>
          </div>
          <button
            type="button"
            className="hover:bg-red-400/10 text-red-400 w-full py-2 text-[18px] px-2 rounded-xl transition-all ease-in-out duration-200"
          >
            Remove Item
          </button>
        </div>
      </div>
      {/* <div className="flex w-full justify-between items-center p-4 rounded-lg">
        <div className="flex justify-center items-start">
          <img src={productImage2} alt="" className="h-[8rem] md:h-[10rem]" />
        </div>
        <div className="w-[13rem] space-y-5 ">
          <div className="flex  justify-between items-center w-full">
            <div className="flex flex-col justify-between items-start w-full">
              <h1>Product</h1>
              <h1>Price</h1>
            </div>
            <div className="flex flex-col justify-center items-end w-full">
              <h1>Black</h1>
              <p>Ghc 800</p>
            </div>
          </div>
          <div className="flex gap-8 justify-center items-center p-2 rounded-lg">
            <button
              type="button"
              className="border border-gray-400 rounded-lg items-center"
            >
              <FaMinus size={20} />
            </button>
            <span className="">
              <p className=""> 0</p>
            </span>
            <button
              type="button"
              className="border border-gray-400 rounded-lg items-center"
            >
              <IoAdd size={20} />
            </button>
          </div>
          <button
            type="button"
            className="hover:bg-red-400/10 text-red-400 w-full py-2 text-[18px] px-2 rounded-xl transition-all ease-in-out duration-200"
          >
            Remove Item
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between items-center p-4 rounded-lg">
        <div className="flex justify-center items-start">
          <img src={productImage2} alt="" className="h-[8rem] md:h-[10rem]" />
        </div>
        <div className="w-[13rem] space-y-5 ">
          <div className="flex  justify-between items-center w-full">
            <div className="flex flex-col justify-between items-start w-full">
              <h1>Product</h1>
              <h1>Price</h1>
            </div>
            <div className="flex flex-col justify-center items-end w-full">
              <h1>Black</h1>
              <p>Ghc 800</p>
            </div>
          </div>
          <div className="flex gap-8 justify-center items-center p-2 rounded-lg">
            <button
              type="button"
              className="border border-gray-400 rounded-lg items-center"
            >
              <FaMinus size={20} />
            </button>
            <span className="">
              <p className=""> 0</p>
            </span>
            <button
              type="button"
              className="border border-gray-400 rounded-lg items-center"
            >
              <IoAdd size={20} />
            </button>
          </div>
          <button
            type="button"
            className="hover:bg-red-400/10 text-red-400 w-full py-2 text-[18px] px-2 rounded-xl transition-all ease-in-out duration-200"
          >
            Remove Item
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between items-center p-4 rounded-lg">
        <div className="flex justify-center items-start">
          <img src={productImage2} alt="" className="h-[8rem] md:h-[10rem]" />
        </div>
        <div className="w-[13rem] space-y-5 ">
          <div className="flex  justify-between items-center w-full">
            <div className="flex flex-col justify-between items-start w-full">
              <h1>Product</h1>
              <h1>Price</h1>
            </div>
            <div className="flex flex-col justify-center items-end w-full">
              <h1>Black</h1>
              <p>Ghc 800</p>
            </div>
          </div>
          <div className="flex gap-8 justify-center items-center p-2 rounded-lg">
            <button
              type="button"
              className="border border-gray-400 rounded-lg items-center"
            >
              <FaMinus size={20} />
            </button>
            <span className="">
              <p className=""> 0</p>
            </span>
            <button
              type="button"
              className="border border-gray-400 rounded-lg items-center"
            >
              <IoAdd size={20} />
            </button>
          </div>
          <button
            type="button"
            className="hover:bg-red-400/10 text-red-400 w-full py-2 text-[18px] px-2 rounded-xl transition-all ease-in-out duration-200"
          >
            Remove Item
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between items-center p-4 rounded-lg">
        <div className="flex justify-center items-start">
          <img src={productImage1} alt="" className="h-[8rem] md:h-[10rem]" />
        </div>
        <div className="w-[13rem] space-y-5 ">
          <div className="flex  justify-between items-center w-full">
            <div className="flex flex-col justify-between items-start w-full">
              <h1>Product</h1>
              <h1>Price</h1>
            </div>
            <div className="flex flex-col justify-center items-end w-full">
              <h1>Black</h1>
              <p>Ghc 800</p>
            </div>
          </div>
          <div className="flex gap-8 justify-center items-center p-2 rounded-lg">
            <button
              type="button"
              className="border border-gray-400 rounded-lg items-center"
            >
              <FaMinus size={20} />
            </button>
            <span className="">
              <p className=""> 0</p>
            </span>
            <button
              type="button"
              className="border border-gray-400 rounded-lg items-center"
            >
              <IoAdd size={20} />
            </button>
          </div>
          <button
            type="button"
            className="hover:bg-red-400/10 text-red-400 w-full py-2 text-[18px] px-2 rounded-xl transition-all ease-in-out duration-200"
          >
            Remove Item
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between items-center p-4 rounded-lg mb-[15rem]">
        <div className="flex justify-center items-start">
          <img src={productImage2} alt="" className="h-[8rem] md:h-[10rem]" />
        </div>
        <div className="w-[13rem] space-y-5 ">
          <div className="flex  justify-between items-center w-full">
            <div className="flex flex-col justify-between items-start w-full">
              <h1>Product</h1>
              <h1>Price</h1>
            </div>
            <div className="flex flex-col justify-center items-end w-full">
              <h1>Black</h1>
              <p>Ghc 800</p>
            </div>
          </div>
          <div className="flex gap-8 justify-center items-center p-2 rounded-lg">
            <button
              type="button"
              className="border border-gray-400 rounded-lg items-center"
            >
              <FaMinus size={20} />
            </button>
            <span className="">
              <p className=""> 0</p>
            </span>
            <button
              type="button"
              className="border border-gray-400 rounded-lg items-center"
            >
              <IoAdd size={20} />
            </button>
          </div>
          <button
            type="button"
            className="hover:bg-red-400/10 text-red-400 w-full py-2 text-[18px] px-2 rounded-xl transition-all ease-in-out duration-200"
          >
            Remove Item
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default CartItems;
