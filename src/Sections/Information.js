import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { useForm } from "react-hook-form";
import { useStateContext } from "../Context/StateContext";

const Information = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { nextStep } = useStateContext();
  
  return (
    <div>
      <div className="flex justify-center  items-center md:w-full ">
        <span className="w-[30rem]  md:w-[35rem]  ">
          <h1 className="font-bold text-[1.5rem]">Information</h1>
          <p className="font-light">
            Complete your purchase item by providing your <br /> payment details
            order.
          </p>
        </span>
      </div>
      <div className="flex justify-center items-center flex-col md:w-full gap-0 ">
        <form
          action=""
          className="flex justify-center items-center flex-col md:w-full  gap-7  "
          onSubmit={handleSubmit(async (data) => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(data);
          })}
        >
          <span className="flex flex-col justify-center items-center md:w-full w-[30rem]  gap-5  p-5">
            <span className="flex justify-between w-[30rem]   md:w-[35rem] gap-[2rem]">
              <span>
                <h1 className="font-bold">First Name</h1>
                <input
                  type="text"
                  placeholder="Albert"
                  {...register("firstName", {
                    required: "First Name is required ",
                  })}
                  className=" bg-transparent   rounded-lg p-[0.7rem] border-2 border-gray-300"
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
                  placeholder="Fletcher"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  className=" bg-transparent rounded-lg p-[0.7rem] border-2 border-gray-300"
                />
                {errors.lastName && (
                  <div className="text-red-500 text-[12px]">
                    {errors.lastName.message}
                  </div>
                )}
              </span>
            </span>{" "}
            <span className="">
              <h1 className="font-bold">Email Address</h1>
              <input
                type="text"
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
                className=" bg-transparent md:w-[35rem] w-[30rem] rounded-lg p-[0.7rem] border-2 border-gray-300"
              />
              {errors.email && (
                <div className="text-red-500 text-[12px]">
                  {errors.email.message}
                </div>
              )}
            </span>
            <span>
              <h1 className="font-bold">Telephone</h1>
              <input
                type="number"
                placeholder="+233"
                {...register("telephone", {
                  required: "Telephone is required",
                  minLength: {
                    value: 10,
                    message: "Telephone must be 10 digits",
                  },
                })}
                className=" bg-transparent md:w-[35rem] w-[30rem]  rounded-lg p-[0.7rem] border-2 border-gray-300"
              />
              {errors.telephone && (
                <div className="text-red-500 text-[12px]">
                  {errors.telephone.message}
                </div>
              )}
            </span>
          </span>
          <span className="lex justify-between w-[30rem]  md:w-[35rem] gap-[2rem]">
            <h1 className="font-bold text-[1.2rem]">Billing Address</h1>
            <span className="flex flex-col gap-y-4">
              <span>
                <h1 className="font-bold">Country</h1>
                <input
                  type="text"
                  className=" w-full bg-transparent rounded-lg p-[0.7rem] border-2 border-gray-300"
                  placeholder=""
                  {...register("country", {
                    required: "Country is required",
                  })}
                />
                {errors.country && (
                  <div className="text-red-500 text-[12px]">
                    {errors.country.message}
                  </div>
                )}
              </span>
              <span className="flex justify-between">
                <span>
                  <h1 className="font-bold">City</h1>
                  <input
                    type="text"
                    className="bg-transparent rounded-lg  w-[14rem] p-[0.7rem] border-2 border-gray-300"
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
                    className="bg-transparent rounded-lg w-[14rem] p-[0.7rem] border-2 border-gray-300"
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
              <span>
                <h1 className="font-bold">Street/Region</h1>
                <input
                  type="text"
                  className="w-full bg-transparent rounded-lg p-[0.7rem] border-2 border-gray-300"
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
          </span>{" "}
          <button
            onClick={nextStep}
            disabled={isSubmitting}
            type="submit"
            className=" bg-black text-white md:w-[35rem] w-[30rem] rounded-lg flex justify-center items-center"
          >
            <p className="p-5 font-bold ">
              {isSubmitting ? "Loading..." : "Next"}
            </p>
            <GrLinkNext />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Information;
