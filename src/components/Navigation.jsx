import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/CRS_logo.svg";

const Navigation = () => {
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
            className="w-[40px] h-[40px] object-contain"
          />
        </Link>

        <div className="nav-links hidden lg:flex flex-row gap-x-6 place-items-center">
          <Link
            to={"/"}
            className="py-1.5 border-b-2 border-orange-800 text-orange-800 hover:text-orange-700 transition-colors ease-linear duration-300"
          >
            Home
          </Link>
          <Link
            to={"/"}
            className="py-1.5 text-orange-800 hover:text-orange-700 transition-colors ease-linear duration-300"
          >
            Call for Papers
          </Link>
          <div className="dropdown">
            <div className="dropdown-title cursor-pointer" role="link">
              Get Involved
            </div>

            <div className="dropdown-links">
              <div className="">
                <Link to={""}>Sponsorship</Link>
                <Link to={""}>Volunteer</Link>
                <Link to={""}>Partnership</Link>
              </div>
            </div>
          </div>
          <Link to={"/"}>Shop</Link>
        </div>

        <Link
          to={"/"}
          className="hidden lg:block text-[12px] font-[450] px-6 py-2 bg-orange-800 border border-orange-800 hover:bg-transparent hover:text-orange-800 text-white transition-colors ease-linear duration-300"
        >
          Contact
        </Link>
      </nav>
      <aside className="side-bar"></aside>
    </>
  );
};

export default Navigation;
