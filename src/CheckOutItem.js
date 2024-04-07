import React from "react";

const CheckOutItem = ({ product }) => {
  return (
    <div className="flex justify-between w-full">
      <span className="flex gap-6">
        <img
          src={product.image}
          alt=""
          className="xl:h-[5rem] h-[3rem] xl:w-[4rem] "
        />
        <span className="space-y-3">
          <h2 className="font-bold ">
            Beats Studio Pro{" "}
            <span className="font-semibold text-slate-400">
              {product.title}
            </span>{" "}
          </h2>
          <p className="font-extrabold">{product.price}</p>
        </span>{" "}
      </span>{" "}
      <span className="space-y-3 ">
        <p className="text-slate-500"> 42 EU - 8.5 US</p>
        <span className="flex justify-between">
          <p className="font-light">Quantity</p>
          <p className="text-end text-slate-500 rounded-lg border-2 border-slate-400 px-3">
            {product.quantity}
          </p>
        </span>
      </span>
    </div>
  );
};

export default CheckOutItem;
