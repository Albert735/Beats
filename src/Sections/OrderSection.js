import React from "react";
// import product1 from "../assets/images/product1.png";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useStateContext } from "../Context/StateContext";

const OrderSection = ({ product, productImage, productName, productPrice }) => {
  const { totalPrice, removeFromCart, incrementCartItem, decrementCartItem } =
    useStateContext();
  return (
    <div className="flex flex-col  items-centerp-[3rem] h-screene w-full  md:rounded-3xl">
      <h1 className="text-start text-[2rem] w-full"> Order summary</h1>

      <div className="md:flex grid  grid-cols-3 gap-5 justify-between items-center w-full border-b-2 p-5">
        <img
          src={productImage}
          alt=""
          className="h-[5.5rem] items-center bg-slate-50 p-3 w-[5rem] rounded-xl"
        />
        <div>
          <p>{productName}</p>
          <p>{productPrice}</p>
        </div>

        <span className="flex flex-row gap-3 justify-center items-center bg-white p-3 rounded-lg text-black ring ring">
          <p>{product.quantity}</p>
          <span>
            <IoIosArrowUp onClick={() => incrementCartItem(product)} />
            <IoIosArrowDown onClick={() => decrementCartItem(product)} />
          </span>
        </span>
        <span className="flex flex-row-reverse md:flex gap-3">
          <IoIosCloseCircleOutline
            size={26}
            onClick={() => removeFromCart(product)}
          />
          <p>Ghc {productPrice}</p>
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
          <p>Ghc{totalPrice}</p>
        </span>
      </div>

      <div className="flex flex-col justify-center w-full p-5 gap-y-4">
        <input
          type="text"
          placeholder="Coupon Code"
          className="rounded-lg bg-transparent"
        />
        <button className=" bg-blue-600 w-full rounded-lg ring">
          <p className="p-3 text-white">Apply</p>
        </button>
      </div>
    </div>
  );
};

export default OrderSection;
