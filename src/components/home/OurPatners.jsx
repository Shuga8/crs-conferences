import React from "react";
import flutterwave from "../../assets/flutterwave.png";
import visa from "../../assets/visa.png";
import mastarcard from "../../assets/mastarcard.png";
import verve from "../../assets/verve.png";
import paystack from "../../assets/paystack.png";
import remita from "../../assets/remita.webp";
import stripe from "../../assets/stripe.png";

const OurPatners = () => {
  return (
    <>
      <section className="our-partners  py-3 md:py-8 xl:py-12 px-6 md:px-16 lg:px-28 xl:px-36 select-none mt-4">
        <h2 className="hidden md:block text-[1.3rem] md:text-[1.75rem] xl:text-[2.2rem] text-yellow-950 font-semibold text-center mb-2.5">
          Our Partners
        </h2>

        <div className="scroll-container flex flex-row mx-auto w-[100%] gap-x-14 md:gap-x-24 px-[14px] py-[30px] bg-white">
          <ul className="scroll-ell flex flex-row gap-x-24 place-items-center flex-shrink-0">
            <li>
              <img
                src={flutterwave}
                className="w-[150px] h-[50px] object-contain"
                alt="marquee_image"
              />
            </li>

            <li>
              <img
                src={visa}
                className="w-[150px] h-[30px] object-contain"
                alt="marquee_image"
              />
            </li>
            <li>
              <img
                src={mastarcard}
                className="w-[150px] h-[50px] object-contain"
                alt="marquee_image"
              />
            </li>
            <li>
              <img
                src={verve}
                className="w-[150px] h-[50px] object-contain"
                alt="marquee_image"
              />
            </li>
            <li>
              <img
                src={paystack}
                className="w-[150px] h-[50px] object-contain"
                alt="marquee_image"
              />
            </li>
            <li>
              <img
                src={stripe}
                className="w-[150px] h-[50px] object-contain"
                alt="marquee_image"
              />
            </li>
            <li>
              <img
                src={remita}
                className="w-[150px] h-[50px] object-contain"
                alt="marquee_image"
              />
            </li>
          </ul>
          <ul
            className="scroll-el flex flex-row gap-x-24 place-items-center flex-shrink-0"
            aria-hidden="true"
          >
            <li>
              <img
                src={flutterwave}
                className="w-[150px] h-[50px] object-contain"
                alt="marquee_image"
              />
            </li>

            <li>
              <img
                src={visa}
                className="w-[150px] h-[30px] object-contain"
                alt="marquee_image"
              />
            </li>
            <li>
              <img
                src={mastarcard}
                className="w-[150px] h-[50px] object-contain"
                alt="marquee_image"
              />
            </li>
            <li>
              <img
                src={verve}
                className="w-[150px] h-[50px] object-contain"
                alt="marquee_image"
              />
            </li>
            <li>
              <img
                src={paystack}
                className="w-[150px] h-[50px] object-contain"
                alt="marquee_image"
              />
            </li>
            <li>
              <img
                src={stripe}
                className="w-[150px] h-[50px] object-contain"
                alt="marquee_image"
              />
            </li>
            <li>
              <img
                src={remita}
                className="w-[150px] h-[50px] object-contain"
                alt="marquee_image"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default OurPatners;
