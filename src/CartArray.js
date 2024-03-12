import React from "react";
import { FaMinus } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";

const CartArray = () => {
  return (
    <div>
      <div>
        <h1>Home</h1>
      </div>
      <div>
        <button type="button">
          <FaMinus />
        </button>
        <span>
          <p>kl</p>
        </span>
        <button type="button">
          <IoAdd />
        </button>
      </div>
    </div>
  );
};

export default CartArray;
