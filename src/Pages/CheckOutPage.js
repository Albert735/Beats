import React from "react";
import Navbar2 from "../Components/Navbar2";
import CheckOut from "./CheckOut";

const CheckOutPage = () => {
  return (
    <div className="dark:bg-[#0E0F10] dark:text-white bg-[#FFFAFA] h-full">
      <Navbar2 />
      <CheckOut />
    </div>
  );
};

export default CheckOutPage;
