import React from "react";
import { Link } from "react-router-dom";

const CallBanner = () => {
  return (
    <>
      <section className="call-banner">
        <div className="content w-full bg-black bg-opacity-60 h-full backdrop-blur-[2px] flex flex-col justify-center items-center gap-y-5 px-4">
          <h1 className="text-3xl text-white font-bold uppercase">
            Call For Papers
          </h1>

          <Link className="px-10 py-4 bg-orange-800 text-white hover:bg-transparent border border-orange-800 transition-colors ease-linear duration-300">
            Submit Paper
          </Link>
        </div>
      </section>
    </>
  );
};

export default CallBanner;
