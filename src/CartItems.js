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
  const { removeFromCart, incrementCartItem, decrementCartItem ,totalPrice} =
    useStateContext();

  return (
    <div className="flex relative flex-col justify-center items-center bg-slate-100 rounded-2xl dark:text-black text-black w-[24rem] md:w-[28rem] gap-y-10 md:font-light md:p-6 mb-[1rem] ">
      <div className="flex w-full justify-between items-center p-4 rounded-lg">
        <div className="flex justify-center items-start">
          <img src={productImage} alt="" className="h-[8rem] md:h-[10rem]" />
        </div>
        <div className="w-[13rem] space-y-5 ">
          <div className="flex flex-col justify-center items-center  ">
            <div className="flex  justify-between  w-full">
              <h1 className="font-bold">Product</h1>
              <h1>{productName}</h1>
            </div>
            <div className="flex justify-between  w-full">
              <h1 className="font-bold">Price</h1>
              <p>{productPrice}</p>
            </div>
            <div className="flex justify-between items-center w-full border-t-4">
              <h1>Total</h1>
              <h1>{totalPrice}</h1>
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
    </div>
  );
};

export default CartItems;
