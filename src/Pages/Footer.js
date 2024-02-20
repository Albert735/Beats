import React from "react";
import logo from "../assets/images/beats-logo-161616.png";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
// import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-center items-start py-[2rem]   xl:gap-[4rem]  bg-[#F1E9E9] dark:bg-[#191A1A]">
      <div className=" flex justify-center items-center mx-5">
        <img
          src={logo}
          alt=""
          className="h-[3rem] drop-shadow-lg dark:bg-white rounded-[3rem]"
        />
      </div>
      <div className="flex xl:flex-row flex-col xl:gap-[4rem]  bg-[#F1E9E9] dark:bg-[#191A1A]">
        <div className="flex justify-center items-center xl:gap-[4rem] md:gap-[4rem] gap-[2rem]">
          <div>
            <h1 className="font-semibold text-[1.3rem] my-2">Products</h1>
            <ul>
              <li>Headphones</li>
              <li>Earphones</li>
              <li>Earbuds</li>
              <li>Accessories</li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold text-[1.3rem] my-2">Support</h1>
            <ul>
              <li>Product help</li>
              <li>Register</li>
              <li>Updates</li>
              <li>Provisions</li>
            </ul>
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="E-mail Subscription"
            className="p-4 md:w-full rounded-lg dark:bg-[#515151] my-5"
          />

          <div className="flex justify-start items-start my-3 gap-5 ">
            <FaLinkedin
              size={35}
              className="bg-white dark:bg-transparent rounded-lg p-2"
            />
            <FaInstagram
              size={35}
              className="bg-white dark:bg-transparent rounded-lg p-2"
            />
            <FaXTwitter
              size={35}
              className="bg-white dark:bg-transparent rounded-lg p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
