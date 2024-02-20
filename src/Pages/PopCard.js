import React from "react";
import productImage1 from "../assets/images/product1.png";

const PopCard = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-white bg-opacity-10 backdrop-blur-sm  flex justify-center items-center ">
      <div className="bg-white text-black flex justify-center items-center max-w-screen-xl mx-auto p-10 rounded-md">
        <div>
          <img src={productImage1} alt="" className="  drop-shadow-xl" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ut praesentium vitae explicabo repellat asperiores voluptates
            perferendis recusandae, ipsum eveniet molestias. Aut possimus
            repellendus debitis sapiente quibusdam id deserunt consectetur.
          </p>{" "}
          <button onClick={onClose} className=" bg-black text-white">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopCard;
