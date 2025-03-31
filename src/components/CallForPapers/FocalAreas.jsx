import React from "react";
import { Fade } from "react-awesome-reveal";
import { GiCheckMark } from "react-icons/gi";
import { LuAlarmClockCheck } from "react-icons/lu";

const FocalAreas = () => {
  return (
    <>
      <section className="focal-areas__container grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 px-5 md:px-24 lg:px-32 xl:px-44 py-10 lg:py-16">
        <div className="w-full">
          <div className="px-3 w-full lg:w-fit">
            <Fade triggerOnce={true} cascade={true}>
              <h2 className="text-2xl text-center lg:text-left text-orange-800 font-semibold mb-2 uppercase">
                Focal Areas
              </h2>

              <hr className="border-2 border-orange-800 w-[100px] block mx-auto lg:mx-0" />
            </Fade>
          </div>

          <ul className="w-full block py-10 mb-3 px-3">
            <Fade triggerOnce={true} cascade={true} direction="left">
              <li className="w-full mb-2.5 flex flex-row gap-x-2 px-2 py-2.5 place-items-center text-slate-800 border border-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition-colors  duration-300 ease-linear cursor-pointer">
                <GiCheckMark />
                <span className="text-sm font-medium">Network Security</span>
              </li>

              <li className="w-full mb-2.5 flex flex-row gap-x-2 px-2 py-2.5 place-items-center text-slate-800 border border-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition-colors  duration-300 ease-linear cursor-pointer">
                <GiCheckMark />
                <span className="text-sm font-medium">
                  Cyber Threat Intelligence
                </span>
              </li>

              <li className="w-full mb-2.5 flex flex-row gap-x-2 px-2 py-2.5 place-items-center text-slate-800 border border-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition-colors  duration-300 ease-linear cursor-pointer">
                <GiCheckMark />
                <span className="text-sm font-medium">
                  Cryptography and Cryptanalysis
                </span>
              </li>

              <li className="w-full mb-2.5 flex flex-row gap-x-2 px-2 py-2.5 place-items-center text-slate-800 border border-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition-colors  duration-300 ease-linear cursor-pointer">
                <GiCheckMark />
                <span className="text-sm font-medium">
                  Security in Emerging Technologies (IoT, AI, Blockchain)
                </span>
              </li>

              <li className="w-full mb-2.5 flex flex-row gap-x-2 px-2 py-2.5 place-items-center text-slate-800 border border-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition-colors  duration-300 ease-linear cursor-pointer">
                <GiCheckMark />
                <span className="text-sm font-medium">
                  Privacy and Data Protection
                </span>
              </li>

              <li className="w-full mb-2.5 flex flex-row gap-x-2 px-2 py-2.5 place-items-center text-slate-800 border border-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition-colors  duration-300 ease-linear cursor-pointer">
                <GiCheckMark />
                <span className="text-sm font-medium">
                  Cybersecurity Policies and Governance
                </span>
              </li>

              <li className="w-full mb-2.5 flex flex-row gap-x-2 px-2 py-2.5 place-items-center text-slate-800 border border-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition-colors  duration-300 ease-linear cursor-pointer">
                <GiCheckMark />
                <span className="text-sm font-medium">
                  Security in Cloud Computing
                </span>
              </li>

              <li className="w-full mb-2.5 flex flex-row gap-x-2 px-2 py-2.5 place-items-center text-slate-800 border border-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition-colors  duration-300 ease-linear cursor-pointer">
                <GiCheckMark />
                <span className="text-sm font-medium">
                  Ethical Hacking and Penetration Testing
                </span>
              </li>

              <li className="w-full mb-2.5 flex flex-row gap-x-2 px-2 py-2.5 place-items-center text-slate-800 border border-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition-colors  duration-300 ease-linear cursor-pointer">
                <GiCheckMark />
                <span className="text-sm font-medium">
                  Security Education and Training
                </span>
              </li>
            </Fade>
          </ul>

          <div className="px-3 w-full lg:w-fit">
            <Fade triggerOnce={true} cascade={true}>
              <h3 className="text-base text-center lg:text-left text-orange-800 font-semibold mb-2 uppercase">
                Important Dates
              </h3>

              <hr className="border-2 border-orange-800 w-[100px] block mx-auto lg:mx-0" />
            </Fade>
          </div>

          <ul className="w-full px-3 mb-3 py-10">
            <Fade triggerOnce={true} cascade={true} direction="left">
              <li className="flex flex-row gap-x-2 place-items-center text-sm text-slate-800 mb-3">
                <LuAlarmClockCheck />
                <span className="text-sm font-medium">
                  Submission Deadline: April 11rd, 2025.
                </span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-sm text-slate-800 mb-3">
                <LuAlarmClockCheck />
                <span className="text-sm font-medium">
                  Notification of Acceptance: May 11th, 2025.
                </span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-sm text-slate-800 mb-3">
                <LuAlarmClockCheck />
                <span className="text-sm font-medium">
                  Final Manuscript Due: June 16th, 2025.
                </span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-sm text-slate-800 mb-3">
                <LuAlarmClockCheck />
                <span className="text-sm font-medium">
                  Publication Date: July 12th, 2025.
                </span>
              </li>
            </Fade>
          </ul>
        </div>
      </section>
    </>
  );
};

export default FocalAreas;
