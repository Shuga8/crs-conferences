import React from "react";
import { Fade } from "react-awesome-reveal";

const Guests = () => {
  return (
    <>
      <section className="guests-section  py-3 md:py-8 xl:py-12 px-6 md:px-16 lg:px-28 xl:px-36 select-none mt-4">
        <Fade triggerOnce={true} cascade={true}>
          <h2 className="text-[1.3rem] md:text-[1.75rem] xl:text-[2.2rem] text-yellow-950 font-semibold text-center mb-2.5">
            Special Guests
          </h2>
        </Fade>

        <div className="guests-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 pt-9">
          <Fade triggerOnce={true} cascade={true}>
            <div className="">
              <figure className="w-full">
                <img
                  src={"https://randomuser.me/api/portraits/men/75.jpg"}
                  alt="Guest"
                  className="w-full h-full object-cover h-[100]px]"
                />
              </figure>
              <div className="py-2 px-1.5">
                <p className="text-xs text-black text-center font-[500] mb-1">
                  Special Guest
                </p>

                <h4 className="text-center text-lg text-gray-900 font-[550] mb-1">
                  Engr Malcom Stan.
                </h4>

                <p className="text-xs text-black text-center font-[500]">
                  Cyber Security Consultant
                </p>
              </div>
            </div>

            <div className="">
              <figure className="w-full">
                <img
                  src={"https://randomuser.me/api/portraits/men/74.jpg"}
                  alt="Guest"
                  className="w-full h-full object-cover h-[100]px]"
                />
              </figure>
              <div className="py-2 px-1.5">
                <p className="text-xs text-black text-center font-[500] mb-1">
                  Special Guest
                </p>

                <h4 className="text-center text-lg text-gray-900 font-[550] mb-1">
                  Prof Zed.
                </h4>

                <p className="text-xs text-black text-center font-[500]">
                  Information Security Professor
                </p>
              </div>
            </div>

            <div className="">
              <figure className="w-full">
                <img
                  src={"https://randomuser.me/api/portraits/men/72.jpg"}
                  alt="Guest"
                  className="w-full h-full object-cover h-[100]px]"
                />
              </figure>
              <div className="py-2 px-1.5">
                <p className="text-xs text-black text-center font-[500] mb-1">
                  Special Guest
                </p>

                <h4 className="text-center text-lg text-gray-900 font-[550] mb-1">
                  Dr Balor J.
                </h4>

                <p className="text-xs text-black text-center font-[500]">
                  Cyber Security Expert
                </p>
              </div>
            </div>

            <div className="">
              <figure className="w-full">
                <img
                  src={"https://randomuser.me/api/portraits/men/71.jpg"}
                  alt="Guest"
                  className="w-full h-full object-cover h-[100]px]"
                />
              </figure>
              <div className="py-2 px-1.5">
                <p className="text-xs text-black text-center font-[500] mb-1">
                  Special Guest
                </p>

                <h4 className="text-center text-lg text-gray-900 font-[550] mb-1">
                  Phil Mac
                </h4>

                <p className="text-xs text-black text-center font-[500]">
                  Cyber Security Expert
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Guests;
