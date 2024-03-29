import React from "react";
import visa from "../assets/Svg/visa-2.svg";
import mastercard from "../assets/Svg/mastercard.svg";
import Paypal from "../assets/Svg/paypal.svg";
import bitcoin from "../assets/Svg/bitcoin-cryptocurrency.svg";

const FormSection = () => {
  return (
    <div className="flex flex-col justify-start items-start md:gap-y-5 xl:w-[35rem]  h-screen  md:rounded-3xl font-sans ">
      <h1 className="text-[2rem]">Payment</h1>
      <div className="flex flex-col gap-y-[1rem]">
        <div className="flex flex-col gap-y-2">
          <span>
            <h2 className="text-[1.3rem]">Card Details</h2>
          </span>
          <span>
            <p className="font-light">Card type</p>
          </span>
        </div>

        <div className="flex flex-row gap-4">
          <img src={visa} alt="visa" className="h-[3rem]" />
          <img src={mastercard} alt="mastercard" className="h-[3rem]" />
          <img src={Paypal} alt="Paypal" className="h-[3rem]" />
          <img src={bitcoin} alt="bitcoin" className="h-[3rem]" />
        </div>
      </div>
      <form action="" className="flex flex-col gap-y-5 w-full ">
        <span className="flex flex-col gap-1">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="rounded-lg bg-transparent"
          />
        </span>
        <span className="flex flex-col gap-1">
          <label htmlFor="">E-mail address</label>
          <input
            type="text"
            placeholder="example@mail.com"
            className="rounded-lg bg-transparent"
          />
        </span>
        <span className="flex flex-col gap-1">
          <label htmlFor="">Card Number</label>
          <input
            type="text"
            placeholder="1234 xxxx"
            className="rounded-lg bg-transparent"
          />
        </span>
        <span className="flex  justify-between">
          <span className="flex flex-col gap-1">
            <label htmlFor="">Expeiration Date (MM/YY)</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="rounded-lg bg-transparent"
            />
          </span>
          <span className="flex flex-col gap-1">
            <label htmlFor="">Security Code</label>
            <input
              type="text"
              placeholder="xxx"
              className="rounded-lg bg-transparent"
            />
          </span>
        </span>
        <span className="flex flex-col gap-1">
          <label htmlFor="">Country/Region</label>

          <input
            type="text"
            placeholder="Greater Acrra"
            className="bg-transparent rounded-lg"
          />
        </span>
        <span className="flex flex-row justify-between">
          <span className="flex flex-col gap-1">
            <label htmlFor="">Street address </label>
            <input
              type="text"
              placeholder="Example street"
              className="bg-transparent rounded-lg"
            />
          </span>
          <span className="flex flex-col gap-1">
            <label htmlFor="">City</label>
            <input
              type="text"
              placeholder="Accra"
              className="bg-transparent rounded-lg"
            />
          </span>
        </span>
      </form>
      <div className="flex flex-col gap-y-5">
        <div>
          <h1>Remeber Me</h1>
          <span className="flex flex-row justify-start items-center gap-3">
            <input
              type="checkbox"
              placeholder=""
              className="rounded-lg bg-transparent ring animate-pulse"
            />
            <p>save my information for later checkout</p>
          </span>
        </div>
        <div>
          <h1>Subscibe Newsletter</h1>
          <span className="flex flex-row justify-start items-center gap-3">
            <input
              type="checkbox"
              placeholder=""
              className="rounded-lg bg-transparent"
            />
            <p>I want to receive offers and discount directly to my inbox</p>
          </span>
        </div>
      </div>
      <button className=" bg-blue-600 w-full rounded-lg ring">
        <p className="p-3 text-white">Pay Now</p>
      </button>
    </div>
  );
};

export default FormSection;
