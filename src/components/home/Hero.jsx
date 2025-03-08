import React from "react";
import { IoCalendarSharp, IoLocationSharp } from "react-icons/io5";
import { IoMdClock } from "react-icons/io";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="content absolute z-[1] bottom-[15%] -translate-y-[-15%] w-full flex justify-center flex-wrap gap-x-2 select-none">
          <span className="flex flex-row gap-x-1 place-items-center text-orange-600 ">
            <IoCalendarSharp className="text-sm md:text-base lg:text-2xl" />
            <span className="text-xs md:text-base lg:text-lg">
              July 11<sup>th</sup> - 12<sup>th</sup> 2025
            </span>
          </span>

          <span className="flex flex-row gap-x-1 place-items-center text-orange-600 ">
            <IoMdClock className="text-sm md:text-base lg:text-2xl" />
            <span className="text-xs md:text-base lg:text-lg">
              10:00AM - 05:00PM
            </span>
          </span>

          <span className="flex flex-row gap-x-1 place-items-center text-orange-600 ">
            <IoLocationSharp className="text-sm md:text-base lg:text-2xl" />
            <span className="text-xs md:text-base lg:text-lg">
              Akure, Ondo.
            </span>
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
