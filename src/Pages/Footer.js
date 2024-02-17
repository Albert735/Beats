import React from "react";
import logo from "../assets/images/beats-logo-161616.png";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex  max-w-screen-xl flex-wrap justify-between items-center mx-auto p-[4rem]  bg-[#f6e7e7]">
      <div>
        <img src={logo} alt="" className="h-[3rem] drop-shadow-lg" />
      </div>

      <div di>
        <h1>Products</h1>
        <ul>
          <li>Headphones</li>
          <li>Earphones</li>
          <li>Earbuds</li>
          <li>Accessories</li>
        </ul>
      </div>

      <div>
        <h1>Products</h1>
        <ul>
          <li>Product help</li>
          <li>Register</li>
          <li>Updates</li>
          <li>Provisions</li>
        </ul>
      </div>

      <div>
        <input type="text" placeholder="E-mail Subscription" />

        <div className="flex justify-center items-start">
          <FaLinkedin />
          <FaInstagram />
          <FaXTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
