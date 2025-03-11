import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/CRS-CRC.svg";

const Navigation = () => {
  const pathNameCheck = (path) => {
    return window.location.pathname === path;
  };

  const pathNameLike = (path) => {
    return window.location.pathname.includes(path);
  };
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
          to={"/contact"}
          className="hidden lg:block text-[12px] font-[450] px-6 py-2 bg-orange-900 border border-orange-900 hover:bg-transparent hover:text-orange-900 text-white transition-colors ease-linear duration-300 select-none"
        >
          Contact
        </Link>
      </nav>
      <aside className="side-bar"></aside>
    </>
  );
};

export default Navigation;
