import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/CRS-CRC.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navigation = () => {
  const [sideBarState, setSideBarState] = useState(false);
  const pathNameCheck = (path) => {
    return window.location.pathname === path;
  };

  const pathNameLike = (path) => {
    return window.location.pathname.includes(path);
  };

  const toggleAside = (e) => {};
  return (
    <>
      <nav
        className="navbar w-full h-[100px] flex flex-row justify-between items-center px-7 md:px-24 lg:px-44 xl:px-60"
        id="navbar"
      >
        <Link to={"/"} className="logo select-none">
          <img
            src={logo}
            alt="CRS LOGO"
            className="w-[200px] h-[50px] object-contain"
          />
        </Link>

        <div className="nav-links hidden lg:flex flex-row gap-x-6 place-items-center">
          <Link
            to={"/"}
            className={`py-1.5 ${
              pathNameCheck("/") ? "border-b-2 border-orange-900" : ""
            } text-orange-900 hover:text-orange-700 transition-colors ease-linear duration-300`}
          >
            Home
          </Link>
          <Link
            to={"/call-for-papers"}
            className={`py-1.5 ${
              pathNameCheck("/call-for-papers")
                ? "border-b-2 border-orange-900"
                : ""
            } text-orange-900 hover:text-orange-700 transition-colors ease-linear duration-300`}
          >
            Call for Papers
          </Link>
          <div className="dropdown">
            <div
              className={`dropdown-title cursor-pointer ${
                pathNameLike("/get-involved")
                  ? "border-b-2 border-orange-900"
                  : ""
              } text-orange-900 hover:text-orange-700 transition-colors ease-linear duration-300`}
              role="link"
            >
              Get Involved
            </div>

            <div className="dropdown-links">
              <div className="">
                <Link to={"/get-involved/sponsorship"}>Sponsorship</Link>
                <Link to={"/get-involved/volunteer"}>Volunteer</Link>
                <Link to={"/get-involved/patnership"}>Partnership</Link>
              </div>
            </div>
          </div>
          <Link
            to={"/shop"}
            className={`py-1.5 ${
              pathNameCheck("/shop") ? "border-b-2 border-orange-900" : ""
            } text-orange-900 hover:text-orange-700 transition-colors ease-linear duration-300`}
          >
            Shop
          </Link>
        </div>

        <Link
          to={"https://thetbmevents.com/events/cyber-research-conference-25"}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:block text-[12px] font-[450] px-6 py-2 bg-orange-900 border border-orange-900 hover:bg-transparent hover:text-orange-900 text-white transition-colors ease-linear duration-300 select-none"
        >
          Register
        </Link>

        <div
          className="block lg:hidden px-2 py-1.5 text-yellow-900 text-2xl cursor-pointer"
          onClick={() => setSideBarState(!sideBarState)}
        >
          <HiMenuAlt3 />
        </div>
      </nav>
      <aside
        className={`aside w-full fixed bg-white z-[31] transition-[height,_width] duration-300 ease-in-out overflow-hidden block`}
        style={{
          top: 0,
          height: sideBarState ? `100dvh` : `0px`,
        }}
      >
        {sideBarState && (
          <div className="content w-full h-full px-6 py-10 flex justify-center flex-col items-center gap-y-8">
            <div
              className="absolute top-0 right-0 text-red-800 text-[25px] px-4 py-3 "
              onClick={() => setSideBarState(false)}
              role="button"
            >
              <IoMdClose />
            </div>

            <Link to={"/"} className="logo select-none">
              <img
                src={logo}
                alt="CRS LOGO"
                className="w-[200px] h-[50px] object-contain mb-3"
              />
            </Link>
            <Link
              to={"/"}
              className="text-[18px] font-[650] text-orange-700 block"
            >
              Home
            </Link>

            <Link
              to={"/call-for-papers"}
              className="text-[18px] font-[650] text-orange-700 block"
            >
              Call for papers
            </Link>

            <Link
              to={"/get-involved/sponsorship"}
              className="text-[18px] font-[650] text-orange-700 block"
            >
              Sponsorship
            </Link>

            <Link
              to={"/get-involved/volunteer"}
              className="text-[18px] font-[650] text-orange-700 block"
            >
              Volunteer
            </Link>

            <Link
              to={"/get-involved/patnership"}
              className="text-[18px] font-[650] text-orange-700 block"
            >
              Patnership
            </Link>

            <Link
              to={"/shop"}
              className="text-[18px] font-[650] text-orange-700 block"
            >
              Shop
            </Link>
          </div>
        )}
      </aside>
    </>
  );
};

export default Navigation;
