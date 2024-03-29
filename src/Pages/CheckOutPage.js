import React from "react";
import Navbar from "../Components/Navbar";
import CheckOut from "./CheckOut";

const CheckOutPage = () => {
  return (
    <div className="dark:bg-[#0E0F10] dark:text-white bg-[#FFFAFA] h-full">
      <Navbar />
      <CheckOut />
    </div>
  );
};

export default CheckOutPage;
