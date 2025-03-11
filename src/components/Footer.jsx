import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/CRS-CRC.svg";
import { Fade } from "react-awesome-reveal";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  useEffect(() => {
    const toggleBackToTopVisibility = () => {
      const btn = document.querySelector(".back-to-top");
      if (!btn) return; // Check if the button exists

      let position = window.scrollY;

      if (position > 130) {
        btn.classList.remove("bottom-[-100px]");
        btn.classList.add("bottom-[10px]");
      } else {
        btn.classList.remove("bottom-[10px]");
        btn.classList.add("bottom-[-100px]");
      }
    };

    window.addEventListener("scroll", toggleBackToTopVisibility);

    return () => {
      window.removeEventListener("scroll", toggleBackToTopVisibility);
    };
  }, []);
  return (
    <>
      <footer className="w-full bg-[#f0f0f0] py-10 base:py-14 md:py-16 px-5 base:px-12 md:px-32 flex flex-col gap-y-6 justify-center place-items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-3 gap-y-4"></div>
        <nav className="w-full px-0 lg:px-24 ">
          <Fade triggerOnce={true} cascade={true}>
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-x-2 lg:gap-x-8 gap-y-8 py-9 border-b border-slate-700">
              <div className="basis-[98%] lg:basis-[30%]">
                <div className="logo flex flex-row place-items-center gap-x-0">
                  <Link to={"/"} className="logo select-none">
                    <img
                      src={logo}
                      alt="CRS LOGO"
                      className="w-[200px] h-[50px] object-contain"
                    />
                  </Link>
                </div>

                <div className="text-[13px] text-slate-800 pl-4 leading-[1.7] mt-3">
                  Bridging the gap, fostering collaboration between and industry
                  in advancing Cybersecurity Reserach Education.
                </div>
              </div>

              <div className="basis-[90%] lg:basis-[15%]">
                <h5 className="font-bold text-sm text-slate-900">Menu</h5>

                <div className="mt-4">
                  <Link
                    to={"/call-for-papers"}
                    className="block text-[13px] text-slate-800 mb-3 hover:text-slate-700 transition-colors duration-300 ease-in-out"
                  >
                    Call for papers
                  </Link>

                  <Link
                    to={"/shop"}
                    className="block text-[13px] text-slate-800 mb-3 hover:text-slate-700 transition-colors duration-300 ease-in-out"
                  >
                    Shop
                  </Link>
                </div>
              </div>
              <div className="basis-[90%] lg:basis-[15%]">
                <h5 className="font-bold text-sm text-slate-900">Contact Us</h5>

                <div className="mt-4">
                  <Link
                    to={"mailto:cyberresearchsociety.org"}
                    className="block text-[13px] text-slate-800 mb-3 hover:text-slate-700 transition-colors duration-300 ease-in-out"
                  >
                    info@cyberresearchsociety.org
                  </Link>
                  <Link className="block text-[13px] text-slate-800 mb-3 hover:text-slate-700 transition-colors duration-300 ease-in-out">
                    Instagram
                  </Link>
                  <Link className="block text-[13px] text-slate-800 mb-3 hover:text-slate-700 transition-colors duration-300 ease-in-out">
                    X (Twitter)
                  </Link>
                  <Link className="block text-[13px] text-slate-800 mb-3 hover:text-slate-700 transition-colors duration-300 ease-in-out">
                    Facebook
                  </Link>
                  <Link className="block text-[13px] text-slate-800 mb-3 hover:text-slate-700 transition-colors duration-300 ease-in-out">
                    Telegram
                  </Link>
                </div>
              </div>
              <div className="basis-[90%] lg:basis-[15%]">
                <h5 className="font-bold text-sm text-slate-900">
                  Get Involved
                </h5>

                <div className="mt-4">
                  <Link className="block text-[13px] text-slate-800 mb-3 hover:text-slate-700 transition-colors duration-300 ease-in-out">
                    Sponsorship
                  </Link>
                  <Link className="block text-[13px] text-slate-800 mb-3 hover:text-slate-700 transition-colors duration-300 ease-in-out">
                    Volunteer
                  </Link>
                  <Link className="block text-[13px] text-slate-800 mb-3 hover:text-slate-700 transition-colors duration-300 ease-in-out">
                    Patnership
                  </Link>
                </div>
              </div>
            </div>
          </Fade>

          <div className="pt-10 pb-0 text-center text-slate-900 text-[13px]">
            <Fade triggerOnce={true} cascade={true}>
              <p className="text-center mb-1">
                All Rights Reserved, &copy;{year}
              </p>
              <p className="text-center">
                Developed By{" "}
                <a
                  href=""
                  className="text-cyan-500 hover:text-cyan-300 duration-300 ease-in-out transition-colors"
                >
                  Blue Dragon Inc.
                </a>
                &trade;
              </p>
            </Fade>
          </div>
        </nav>
      </footer>
      <div
        role="button"
        className={`back-to-top cursor-pointer fixed bottom-[-100px] right-4 w-[40px] h-[40px] text-base bg-orange-900 hover:bg-orange-800 transition-all ease-linear duration-300 text-white z-[3] flex justify-center items-center rounded-full`}
      >
        <FaArrowUp />
      </div>
    </>
  );
};

export default Footer;
