import React from "react";

const OrderSection = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-y-5">
      <h1>Payment</h1>
      <h2>Card Details</h2>
      <div className="flex flex-row">
        <p></p>
        <img src="../mastercard.svg" alt="" />
        <img src="../mastercard.svg" alt="" />
        <img src="../mastercard.svg" alt="" />
        <img src="../mastercard.svg" alt="" />
      </div>
      <form action="" className="flex flex-col gap-y-5">
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Name" />
        <label htmlFor="">Card Number</label>
        <input type="text" placeholder="1234 xxxx" />
        <label htmlFor="">Expeiration Date (MM/YY)</label>
        <input type="text" placeholder="MM/YY" />
        <label htmlFor="">Security Code</label>
        <input type="text" placeholder="xxx" />
      </form>
      <div className="flex flex-col gap-y-5">
        <div>
          <h1>Remeber Me</h1>
          <input type="checkbox" placeholder="" />
          <p>save my information for later checkout</p>
        </div>
        <div>
          <h1>Subscibe Newsletter</h1>
          <input type="checkbox" placeholder="" />
          <p>I want to receive offers and discount directly to my inbox</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
