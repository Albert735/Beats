import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { useForm } from "react-hook-form";
import visa from "../assets/Svg/visa-2.svg";
import paypal from "../assets/Svg/paypal.svg";
import mastercard from "../assets/Svg/mastercard.svg";
import { useStateContext } from "../Context/StateContext";
import { country } from "../CountryArray";
import { Link } from "react-router-dom";
import check from "../assets/images/icons8-transaction-approved-64.png";
const StepForm = () => {
  const [show, setShow] = React.useState(false);
  const toggling = () => setShow(!show);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors, isSubmitting, isValid },
  } = useForm();

  const { step, setStep } = useStateContext();
  const nextStep = () => {
    trigger();
    if (isValid) {
      setStep(step + 1);
    } else {
      return;
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const watchFirstName = watch("firstName");
  const watchLastName = watch("lastName");
  const watchEmail = watch("email");
  const watchTelephone = watch("telephone");
  const watchCountry = watch("country");
  const watchCity = watch("city");
  const watchStreet = watch("street");
  const watchZip = watch("zipCode");

  return (
    <div className="flex justify-center items-start flex-col w-full  md:w-full h-full ">
      <form
        action=""
        className="flex justify-center items-center flex-col md:w-full w-full  gap-7"
        onSubmit={handleSubmit(async (data) => {
          await new Promise((resolve) => setTimeout(resolve, 4000));
          console.log(data);
        })}
      >
        {step === 1 && (
          <div className=" flex justify-center items-center flex-col md:w-full w-full gap-7">
            <div className="flex justify-center items-center w-full ">
              <span className="w-full  md:w-[35rem]  ">
                <h1 className="font-bold text-[1.5rem]">Information</h1>
                <p className="font-light">
                  Complete your purchase item by providing your <br /> payment
                  details order.
                </p>
              </span>
            </div>
            <span className="flex flex-col justify-center items-center md:w-full w-full  gap-5 ">
              <span className="flex justify-between w-full  md:w-[35rem] gap-[2rem]">
                <span>
                  <h1 className="font-bold">First Name</h1>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Albert"
                    {...register("firstName", {
                      required: "First Name is required ",
                    })}
                    className=" bg-transparent w-full rounded-lg p-[0.7rem] border-2 border-gray-300"
                  />
                  {errors.firstName && (
                    <div className="text-red-500 text-[12px]">
                      {errors.firstName.message}
                    </div>
                  )}
                </span>
                <span>
                  <h1 className="font-bold">Last Name</h1>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Fletcher"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                    className=" bg-transparent w-full rounded-lg p-[0.7rem] border-2 border-gray-300"
                  />
                  {errors.lastName && (
                    <div className="text-red-500 text-[12px]">
                      {errors.lastName.message}
                    </div>
                  )}
                </span>
              </span>{" "}
              <span className=" w-full md:w-[35rem]">
                <h1 className="font-bold">Email Address</h1>
                <input
                  type="text"
                  id="email"
                  placeholder="example@gmail.com"
                  {...register("email", {
                    required: "Email is required",
                    validate: (value) => {
                      if (!value.includes("@")) {
                        return "Please enter a valid email address that includes @";
                      }
                      return true;
                    },
                  })}
                  className=" bg-transparent md:w-[35rem] w-full rounded-lg p-[0.7rem] border-2 border-gray-300"
                />
                {errors.email && (
                  <div className="text-red-500 text-[12px]">
                    {errors.email.message}{" "}
                  </div>
                )}
              </span>
              <span className="w-full md:w-[35rem]">
                <h1 className="font-bold">Telephone</h1>
                <input
                  type="phone"
                  id="telephone"
                  placeholder="+233"
                  {...register("telephone", {
                    required: "Telephone is required",
                    minLength: {
                      value: 10,
                      message: "Telephone must be 10 digits",
                    },
                  })}
                  className=" bg-transparent md:w-[35rem] w-full  rounded-lg p-[0.7rem] border-2 border-gray-300"
                />
                {errors.telephone && (
                  <div className="text-red-500 text-[12px]">
                    {errors.telephone.message}
                  </div>
                )}
              </span>
            </span>
            <span className="flex flex-col justify-center items-center md:w-full w-full  gap-5 ">
              <div className="flex justify-center items-center w-full ">
                <span className="w-full  md:w-[35rem]  ">
                  <h1 className="font-bold text-[1.5rem]">Billing Address</h1>
                </span>
              </div>
              <span className="flex flex-col justify-center items-center gap-y-4 w-full md:w-[35rem] ">
                <select
                  name="country"
                  id="countrySelect"
                  className="bg-transparent border-2 rounded-lg w-full border-gray-300 p-[0.7rem]"
                >
                  <option id="country" value={country}>
                    Country
                  </option>
                  {country.map((country, index) => (
                    <option key={index} value={country.name}>
                      {country.name},{""}
                      {country.code}
                    </option>
                  ))}
                </select>

                <span className="flex justify-between w-full gap-[2rem]">
                  <span>
                    <h1 className="font-bold">City</h1>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="bg-transparent w-full rounded-lg  p-[0.7rem] border-2 border-gray-300"
                      placeholder=""
                      {...register("city", { required: "City is required" })}
                    />
                    {errors.city && (
                      <div className="text-red-500 text-[12px]">
                        {errors.city.message}
                      </div>
                    )}
                  </span>
                  <span>
                    <h1 className="font-bold">Zip Code</h1>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      className="bg-transparent w-full rounded-lg  p-[0.7rem] border-2 border-gray-300"
                      placeholder=""
                      {...register("zipCode", {
                        required: "Zip Code is required",
                        minLength: {
                          value: 4,
                          message: "Zip Code must be 4 digits",
                        },
                      })}
                    />
                    {errors.zipCode && (
                      <div className="text-red-500 text-[12px]">
                        {errors.zipCode.message}
                      </div>
                    )}
                  </span>
                </span>
                <span className="w-full">
                  <h1 className="font-bold">Street/Region</h1>
                  <input
                    type="text"
                    id="street"
                    className=" bg-transparent w-full rounded-lg p-[0.7rem] md:w-[35rem] border-2 border-gray-300"
                    placeholder=""
                    {...register("street", {
                      required: "Street is required",
                    })}
                  />
                  {errors.street && (
                    <div className="text-red-500 text-[12px]">
                      {errors.street.message}
                    </div>
                  )}
                </span>
              </span>
            </span>
            <button
              onClick={nextStep}
              disabled={isSubmitting}
              type="submit"
              className=" bg-black text-white md:w-[35rem] w-full rounded-lg flex justify-center items-center "
            >
              <p className="p-4 font-bold ">
                {isSubmitting ? "Loading..." : "Next"}
              </p>
              <GrLinkNext />
            </button>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col justify-center items-center  w-full gap-11 md:px-[5rem]">
            <div className="flex justify-between items-center w-full md:w-[35rem]">
              <div className=" ">
                <h1 className="font-bold text-[1.5rem]"> Payment Details</h1>
              </div>
              <div className="">
                <p className="font-bold cursor-pointer">+ Add new</p>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start w-full md:w-[35rem] gap-4 ">
              <div>
                <p>
                  In order to use your Apple Acount Balance,Sign In with your
                  Apple ID
                </p>
              </div>
              <div className="gap-1 border-2 border-gray-300 p-3 w-full rounded-xl active:border-blue-600 cursor-pointer">
                <h1 className="font-bold">Credit Card or Debit card</h1>
                <p className="text-[14px]">
                  Apple Card, Visa, Mastercard, Amex <br /> Discover, Unionpay
                </p>
              </div>
            </div>

            <div className="flex  justify-center items-center w-full md:w-[35rem] md:gap-[2.3rem] gap-3">
              <span className="flex border-2 rounded-xl">
                <span className="p-3 flex justify-between items-start w-[10rem]">
                  <input
                    type="radio"
                    name="card"
                    value="Visa Card"
                    className="rounded-full mt-2"
                  />
                  <span className="leading-loose text-[12px]">
                    <p>**** 1234</p>
                    <p>Visa Card</p>
                  </span>
                  <img src={visa} alt="" className="h-[2rem]" />
                </span>
              </span>
              <span className="hidden md:flex border-2 rounded-xl">
                <span className="p-3 flex justify-between items-start w-[10rem]">
                  <input
                    type="radio"
                    name="card"
                    value="Master Card"
                    className="rounded-full mt-2"
                  />
                  <span className="leading-loose text-[12px]">
                    <p>**** 1234</p>
                    <p>Mastercard</p>
                  </span>
                  <img src={mastercard} alt="" className="h-[2rem]" />
                </span>
              </span>
              <span className="flex border-2 rounded-xl">
                <span className="p-3 flex justify-between items-start w-[10rem]">
                  <input
                    type="radio"
                    name="card"
                    value="paypal"
                    className="rounded-full mt-2"
                  />
                  <span className="leading-loose text-[12px]">
                    <p>**** 1234</p>
                    <p>Paypal</p>
                  </span>
                  <img src={paypal} alt="" className="h-[2rem]" />
                </span>
              </span>
            </div>

            <div className="flex flex-col  justify-center items-center w-full md:w-[35rem] gap-8">
              <span className="flex flex-col md:flex-row justify-center items-center w-full gap-3 ">
                <span className="w-full md:w-[35rem]">
                  <p className="font-bold">First Name</p>
                  <input
                    {...register("firstName", {
                      required: "First Name is required",
                      message: "First Name is required",
                    })}
                    type="text"
                    className=" bg-transparent w-full rounded-lg p-[0.7rem] border-2 border-gray-300"
                  />
                  {errors.firstName && (
                    <div className="text-red-500 text-[12px]">
                      {errors.firstName.message}
                    </div>
                  )}
                </span>

                <span className="w-full md:w-[35rem]">
                  <p className="font-bold">Last Name</p>
                  <input
                    {...register("lastName", {
                      required: "Last Name is required",
                      message: "Last Name is required",
                    })}
                    type="text"
                    className=" w-full  bg-transparent rounded-lg p-[0.7rem] border-2 border-gray-300"
                  />
                  {errors.lastName && (
                    <div className="text-red-500 text-[12px]">
                      {errors.lastName.message}
                    </div>
                  )}
                </span>
              </span>

              <span className="flex flex-col  justify-center items-center w-full md:w-[35rem] gap-8">
                <span className="w-full">
                  <p className="font-bold">Card number</p>
                  <input
                    {...register("cardNumber", {
                      required: "Card number is required",
                      message: "Card number is required",
                      maxLength: {
                        value: 19,
                        message: "Card number should be 16 digits",
                      },
                    })}
                    type="tel"
                    autocomplete="cc-number"
                    placeholder="xxxx xxxx xxxx xxxx"
                    className=" w-full bg-transparent rounded-lg p-[0.7rem] border-2 border-gray-300"
                  />
                  {errors.cardNumber && (
                    <div className="text-red-500 text-[12px]">
                      {errors.cardNumber.message}
                    </div>
                  )}
                </span>
                <span className="flex justify-between items-center gap-3 w-full ">
                  <span className="w-full md:w-[35rem]">
                    <p className="font-bold">Expiration date</p>
                    <input
                      {...register("expirationDate", {
                        required: "Expiration date is required",
                        message: "Expiration date is required",
                      })}
                      type="text"
                      className="bg-transparent w-full rounded-lg p-[0.7rem] border-2 border-gray-300"
                    />
                    {errors.expirationDate && (
                      <div className="text-red-500 text-[12px]">
                        {errors.expirationDate.message}
                      </div>
                    )}
                  </span>
                  <span className="w-full md:w-[35rem]">
                    <p className="font-bold">CVV</p>
                    <input
                      {...register("cvv", {
                        required: "CVV is required",
                        message: "CVV is required",
                        minLength: {
                          value: 3,
                          message: "CVV should be 3 digits",
                        },
                      })}
                      type="number"
                      className="bg-transparent w-full rounded-lg p-[0.7rem] border-2 border-gray-300"
                    />
                    {errors.cvv && (
                      <div className="text-red-500 text-[12px]">
                        {errors.cvv.message}
                      </div>
                    )}
                  </span>
                </span>
              </span>
            </div>
            <div className="flex justify-start items-center w-full md:w-[35rem] gap-3">
              {" "}
              <input type="checkbox" name="" id="" className="rounded-full" />
              <span>
                <p className="font-bold">Save my info for 1-click checkout </p>
                <p className="font-light text-gray-500">
                  Pay faster and everywhere link is accepted
                </p>
              </span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-[35rem] gap-3 my-5">
              <button
                type="submit"
                onClick={prevStep}
                className="bg-transparent w-full  border-2 rounded-lg "
              >
                <p className="p-3 font-bold">Back</p>
              </button>
              <button
                type="submit"
                className="bg-black text-white rounded-lg  w-full"
              >
                <p className="p-3 font-bold" onClick={nextStep}>
                  {" "}
                  Next
                </p>
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col justify-center items-center w-full gap-11 h-full">
            <div className="flex flex-col justify-center items-start w-full  md:w-[35rem] gap-2 ">
              <h1 className="font-bold text-[2rem]">Details Summary</h1>
              <div className="flex flex-col justify-center items-start w-full gap-2 ">
                <span className="flex gap-4">
                  <span>First Name:</span> <p> {watchFirstName}</p>
                </span>
                <span className="flex gap-4">
                  <span>Last Name:</span> <p> {watchLastName}</p>
                </span>

                <span className="flex gap-4">
                  <span>Email: </span>
                  <p>{watchEmail}</p>
                </span>
                <span className="flex gap-4">
                  <span>Telephone:</span>
                  <p> {watchTelephone}</p>
                </span>
              </div>{" "}
            </div>
            <div className="flex flex-col justify-center items-start w-full md:w-[35rem] gap-2 ">
              <h1 className="font-bold text-[1.5rem]">Billing Address</h1>
              <span className="flex flex-col justify-center items-start w-full  gap-2 ">
                <span className="flex gap-4">
                  <span>Country:</span> <p> {watchCountry}</p>
                </span>
                <span className="flex gap-4">
                  <span>City:</span> <p> {watchCity}</p>
                </span>

                <span className="flex gap-4">
                  <span>Zip Code: </span>
                  <p>{watchZip}</p>
                </span>
                <span className="flex gap-4">
                  <span>Street:</span>
                  <p> {watchStreet}</p>
                </span>
              </span>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center  w-full md:w-[35rem] gap-3 my-5">
              <button
                onClick={prevStep}
                className="flex justify-center  bg-transparent text-black md:w-[35rem] w-full border-2 rounded-lg items-center "
              >
                <p className="p-3 font-bold"> Back</p>
              </button>
              <button
                onClick={() => {
                  setShow(true);
                  toggling();
                }}
                className=" bg-black text-white md:w-[35rem] w-full rounded-lg flex justify-center items-center "
              >
                <p className="p-3 font-bold">Pay Now</p>

                {show && (
                  <div className="flex fixed justify-center items-center  top-0 right-0 bottom-0 left-0 bg-black/50 backdrop-blur-sm w-full h-full ">
                    <div className="flex absolute flex-col justify-center items-center md:w-[30rem] w-[20rem] h-[20rem] md:h-[25rem] bg-white rounded-xl gap-2 md:gap-6 ">
                      <h1 className="font-bold text-black text-[2rem]">
                        Payment Success!
                      </h1>
                      <img src={check} alt="" className="md:h-[5rem]" />
                      <span>
                        <p className="text-gray-500">
                          Your order has been placed
                        </p>
                        <p className="text-gray-500">
                          Please Check your email for receipt.
                        </p>
                      </span>

                      <Link to="/">
                        <button className="bg-black text-white rounded-lg w-[10rem] mt-5">
                          <p className=" p-3">continue</p>
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default StepForm;
