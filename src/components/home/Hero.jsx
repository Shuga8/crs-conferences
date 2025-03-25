import React, { useEffect, useState } from "react";
import { IoCalendarSharp, IoLocationSharp } from "react-icons/io5";
import { IoMdClock } from "react-icons/io";
import { Fade } from "react-awesome-reveal";
import conference_logo from "../../assets/CRC_logo.svg";

const Hero = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const eventDate = new Date("July 11, 2025 00:00:00").getTime(); // Target date

    const updateCountdown = () => {
      const currentDate = Date.now();
      const distance = eventDate - currentDate;

      if (distance <= 0) {
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
        return;
      }
      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(d.toString().padStart(2, "0"));
      setHours(h.toString().padStart(2, "0"));
      setMinutes(m.toString().padStart(2, "0"));
      setSeconds(s.toString().padStart(2, "0"));
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero-section px-4 md:px-7">
        <Fade triggerOnce={true}>
          <div className="logo w-full">
            <img
              src={conference_logo}
              alt="Conference"
              className="block mx-auto object-contain w-[400px] max-w-[80%] select-none"
            />
          </div>

          <div className="content w-full flex justify-center flex-wrap gap-x-2 select-none">
            <span className="flex flex-row gap-x-1 place-items-center text-orange-900 ">
              <IoCalendarSharp className="text-sm md:text-base lg:text-2xl" />
              <span className="text-xs md:text-base lg:text-lg dancing-script font-bold">
                July 11<sup>th</sup> - 12<sup>th</sup> 2025
              </span>
            </span>

            <span className="flex flex-row gap-x-1 place-items-center text-orange-900 ">
              <IoMdClock className="text-sm md:text-base lg:text-2xl" />
              <span className="text-xs md:text-base lg:text-lg dancing-script font-bold">
                10:00AM - 05:00PM
              </span>
            </span>

            <span className="flex flex-row gap-x-1 place-items-center text-orange-900">
              <IoLocationSharp className="text-sm md:text-base lg:text-2xl" />
              <span className="text-xs md:text-base lg:text-lg dancing-script font-bold ">
                Akure, Ondo.
              </span>
            </span>
          </div>

          <div className="countdown-container w-full grid grid-cols-2 sept:grid-cols-4  justify-center gap-x-4 gap-y-3.5">
            <div className="w-[120px] bg-slate-500 bg-opacity-5 h-[70px] shrink-0 rounded-md border border-slate-200 flex flex-col justify-center items-center">
              <p className="text-4xl text-slate-800 text-center">{days}</p>
              <p className="text-xs text-center text-orange-900">Days</p>
            </div>

            <div className="w-[120px] bg-slate-500 bg-opacity-5 h-[70px] shrink-0 rounded-md border border-slate-200 flex flex-col justify-center items-center">
              <p className="text-4xl text-slate-800 text-center">{hours}</p>
              <p className="text-xs text-center text-orange-900">Hours</p>
            </div>

            <div className="w-[120px] bg-slate-500 bg-opacity-5 h-[70px] shrink-0 rounded-md border border-slate-200 flex flex-col justify-center items-center">
              <p className="text-4xl text-slate-800 text-center">{minutes}</p>
              <p className="text-xs text-center text-orange-900">Minutes</p>
            </div>

            <div className="w-[120px] bg-slate-500 bg-opacity-5 h-[70px] shrink-0 rounded-md border border-slate-200 flex flex-col justify-center items-center">
              <p className="text-4xl text-slate-800 text-center">{seconds}</p>
              <p className="text-xs text-center text-orange-900">Seconds</p>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Hero;
