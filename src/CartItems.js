import React from "react";
import { FaMinus } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { useStateContext } from "./Context/StateContext";
// import { product } from "./ProductArray";
// import { product } from "./ProductArray";
// import { product } from "./ProductArray";
// import productImage1 from "./assets/images/product1.png";
// import productImage2 from "./assets/images/product2.png";

const CartItems = ({ product, productImage, productName, productPrice }) => {
  const {
    removeFromCart,
    incrementCartItem,
    decrementCartItem,
    totalPrice
  } = useStateContext();

  return (
    <div className="flex relative flex-col justify-center items-center bg-slate-100 rounded-2xl dark:text-black text-black w-[22rem] md:w-[35rem] xl:w-[25rem]  gap-y-10 md:font-light md:p-6 mb-[1rem] ">
      <div className="flex md:flex-row w-full  justify-between md:justify-center xl:justify-between xl:gap-[2rem] md:gap-[1rem] items-center p-4 rounded-lg">
        <div className="flex justify-center items-center w-full">
          <img
            src={productImage}
            alt=""
            className="h-[8rem] md:h-[10rem] xl:h-[9rem] "
          />
        </div>
        <div className="md:flex-row xl:flex-none w-[13rem] xl:w-[11rem] md:w-[15rem]  space-y-5 ">
          <div className="flex flex-col md:flex-row justify-center items-start md:gap-[2rem] xl:gap-1 gap-y-2 xl:flex-col  ">
            <div className="flex md:flex-col xl:flex-row  justify-between  w-full">
              <h1 className="font-bold">Product</h1>
              <h1>{productName}</h1>
            </div>
            <div className="flex  md:flex-col  xl:flex-row justify-between w-full">
              <h1 className="font-bold">Price</h1>
              <p>{productPrice}</p>
            </div>
            <div className="flex md:flex-col  xl:flex-row justify-between items-center w-full ">
              <h1>Total</h1>
              <h1>Ghc {productPrice * product.quantity}</h1>
            </div>
          </div>
          <div className="flex gap-8 justify-center items-center p-2 rounded-lg">
            <button
              onClick={() => decrementCartItem(product)}
              type="button"
              className="border border-gray-400 rounded-lg items-center"
            >
              <FaMinus size={20} />
            </button>
            <span className="">
              <p className="">{product.quantity}</p>
            </span>
            <button
              onClick={() => incrementCartItem(product)}
              type="button"
              className="border border-gray-400 rounded-lg items-center"
            >
              <IoAdd size={20} />
            </button>
          </div>
          <button
            onClick={() => removeFromCart(product)}
            type="button"
            className="hover:bg-red-400/10 text-red-400 w-full py-2 text-[18px] px-2 rounded-xl transition-all ease-in-out duration-200"
          >
            Remove Item
          </button>
        </div>
      </div>
      <>
        <div className="flex fixed  flex-col justify-center items-center text-black text-[1rem] w-full md:w-[30rem]  px-2 py-1 gap-2 mb-5 -bottom-5 dark:bg-[#FFFAFA] bg-[#191A1A]">
          <button
            type="button"
            className="flex justify-between items-center w-full bg-gray-100 p-5 rounded-xl "
          >
            <span>Tax</span>
            <span>Ghc 0</span>
          </button>
          <button
            type="button"
            className="flex justify-between items-center w-full bg-gray-100 p-5 rounded-xl font-bold"
          >
            <span>Total</span>
            <span>Ghc {totalPrice}</span>
          </button>
          <button
            type="button"
            className="flex justify-center items-center w-full bg-[#000000] p-5 rounded-xl text-white font-bold"
          >
            Buy Now
          </button>
        </div>
      </>
    </div>
  );
};

export default CartItems;
