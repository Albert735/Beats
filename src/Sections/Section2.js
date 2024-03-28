import React from "react";
import { IoLogoApple } from "react-icons/io5";
import { GrSpotify } from "react-icons/gr";
import { ImAmazon } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Section2 = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      className="flex justify-center gap-[3.5rem] items-center  xl:gap-[9rem] md:gap-[7rem] md:py-11 md:my-[5rem]   xl:m-[8rem] overflow-hidden  "
    >
      <div className=" hover:ease-in-out duration-500 hover:scale-125">
        <a target="blank" href="https://www.apple.com/shop/accessories/all/beats-featured">
          <IoLogoApple className="w-11 h-[5rem] md:h-[3.5rem] md:w-[5rem]  xl:h-[5rem] xl:w-[6rem]" />
        </a>
      </div>
      <div className=" hover:ease-in-out duration-500 hover:scale-125">
        <a target="blank" href="https://open.spotify.com/playlist/37i9dQZF1DWTl4y3vgJOXW?si=vulJ387vQ6ayEYt5s9DnBg&pi=e-1jpDNzFkQ36h">
          <GrSpotify className="w-11 h-[5rem] md:h-[3.5rem] md:w-[5rem]  xl:h-[5rem] xl:w-[6rem]" />
        </a>
      </div>
      <div className=" hover:ease-in-out duration-500 hover:scale-125">
        <a target="blank" href="https://www.amazon.com/beats/s?k=beats">
          <ImAmazon className="w-11 h-[5rem] md:h-[3.5rem] md:w-[5rem]  xl:h-[5rem] xl:w-[6rem]" />
        </a>
      </div>
      <div className="  hover:ease-in-out duration-500 hover:scale-125">
        <a target="blank" href="https://youtu.be/U4mADkt6o-M">
          <FaYoutube className="w-11 h-[5rem] md:h-[3.5rem] md:w-[5rem]  xl:h-[5rem] xl:w-[6rem]" />
        </a>
      </div>
    </div>
  );
};

export default Section2;
