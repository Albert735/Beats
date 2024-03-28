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
  const { removeFromCart, incrementCartItem, decrementCartItem } =
    useStateContext();

  return (
    <div className="flex  flex-col justify-center items-center bg-gray-100 rounded-2xl dark:text-black text-black w-full    md:w-[35rem] xl:w-[25rem]  md:font-light md:p-6 mb-[1rem] ">
      <div className="flex md:flex-row w-full xl:w-[25rem] justify-between md:justify-center xl:justify-between xl:gap-[2rem] md:gap-[3rem] gap-5 items-center p-4 rounded-lg bg-gray-100 px-11">
        <div className="flex relative justify-center items-center -top-4 md:-top-0 w-[8rem]">
          <img
            src={productImage}
            alt=""
            className="h-[7rem] md:h-[10rem] xl:h-[9rem] "
          />
        </div>
        <div className="md:flex-row xl:flex-none w-[13rem] xl:w-[11rem] md:w-[15rem]  space-y-5 ">
          <div className="flex flex-col md:flex-row justify-center items-start md:gap-[2rem] xl:gap-1 gap-y-2 xl:flex-col  ">
            <div className="flex md:flex-col xl:flex-row  justify-between  w-full">
              <h1 className="font-bold text-[1rem]">Product</h1>
              <h1 className="font-light text-[1rem]">{productName}</h1>
            </div>
            <div className="flex  md:flex-col  xl:flex-row justify-between w-full">
              <h1 className="font-bold  text-[1rem]">Price</h1>
              <p className="font-light text-[1rem]">{productPrice}</p>
            </div>
            <div className="flex md:flex-col  xl:flex-row justify-between w-full ">
              <h1 className="font-light text-[1rem]">Total</h1>
              <h1 className="font-light text-[1rem]">
                Ghc {productPrice * product.quantity}
              </h1>
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
        </div>
      </div>
      <button
        onClick={() => removeFromCart(product)}
        type="button"
        className="hover:bg-red-400/10 text-red-400 w-full py-3  my-3 text-[18px] px-2 rounded-xl transition-all ease-in-out duration-200"
      >
        Remove Item
      </button>
    </div>
  );
};

export default CartItems;
