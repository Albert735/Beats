import React from "react";

const FormSection = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-y-5">
      <h1>Payment</h1>
      <h2>Card Details</h2>
      <div className="flex flex-row">
        <p>card type</p>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <form action="" className="flex flex-col gap-y-5 w-full ">
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Name" className="rounded-lg" />
        <label htmlFor="">Card Number</label>
        <input type="text" placeholder="1234 xxxx" className="rounded-lg" />
        <span className="flex gap-8">
          <span className="flex flex-col">
            <label htmlFor="">Expeiration Date (MM/YY)</label>
            <input type="text" placeholder="MM/YY" className="rounded-lg" />
          </span>
          <span className="flex flex-col">
            <label htmlFor="">Security Code</label>
            <input type="text" placeholder="xxx" className="rounded-lg" />
          </span>
        </span>
      </form>
      <div className="flex flex-col gap-y-5">
        <div>
          <h1>Remeber Me</h1>
          <span className="flex flex-row justify-start items-center gap-3">
            <input type="checkbox" placeholder="" className="rounded-lg" />
            <p>save my information for later checkout</p>
          </span>
        </div>
        <div>
          <h1>Subscibe Newsletter</h1>
          <span className="flex flex-row justify-start items-center gap-3">
            <input type="checkbox" placeholder="" className="rounded-lg" />
            <p>I want to receive offers and discount directly to my inbox</p>
          </span>
        </div>
      </div>
      <button className=" bg-slate-400 w-full rounded-lg">
        <p className="p-3">Pay Now</p>
      </button>
    </div>
  );
};

export default FormSection;
