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
        <Link to={"/"} className="logo">
          <img
            src={logo}
            alt="CRS LOGO"
            className="w-[40px] h-[40px] object-contain"
          />
        </Link>

        <div className="nav-links hidden lg:flex flex-row gap-x-6 place-items-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Call for Papers</Link>
          <div className="dropdown">
            <div className="dropdown-title cursor-pointer" role="link">
              Get Involved
            </div>

            <div className="dropdown-links">
              <Link to={""}>Sponsorship</Link>
              <Link to={""}>Volunteer</Link>
              <Link to={""}>Partnership</Link>
            </div>
          </div>
          <Link to={"/"}>Shop</Link>
        </div>
      </nav>
      <aside className="side-bar"></aside>
    </>
  );
};

export default Navigation;
