import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaAngleRight, FaAsterisk } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { LuAlarmClockCheck } from "react-icons/lu";

const FocalAreas = () => {
  return (
    <>
      <section className="focal-areas__container grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-6 px-5 md:px-24 lg:px-32 xl:px-44 py-10 lg:py-16">
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
              <li className="flex flex-row gap-x-2 place-items-center text-sm text-slate-800 mb-5">
                <LuAlarmClockCheck />
                <span className="text-sm font-medium">
                  Submission Deadline: April 11rd, 2025.
                </span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-sm text-slate-800 mb-5">
                <LuAlarmClockCheck />
                <span className="text-sm font-medium">
                  Notification of Acceptance: May 11th, 2025.
                </span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-sm text-slate-800 mb-5">
                <LuAlarmClockCheck />
                <span className="text-sm font-medium">
                  Final Manuscript Due: June 16th, 2025.
                </span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-sm text-slate-800 mb-5">
                <LuAlarmClockCheck />
                <span className="text-sm font-medium">
                  Publication Date: July 12th, 2025.
                </span>
              </li>
            </Fade>
          </ul>
        </div>

        <div className="w-full overflow-x-hidden">
          <div className="flex flex-row gap-x-2.5 place-items-center mb-2">
            <Fade triggerOnce={true} cascade={true}>
              <hr className="w-[90px] border border-orange-800" />
              <h2 className="text-lg text-orange-800 font-bold">
                Paper Instructions
              </h2>
            </Fade>
          </div>

          <Fade triggerOnce={true} cascade={true}>
            <h3 className="text-xl text-slate-900 text-center lg:text-left font-semibold">
              Cyber Research Conference 2025 Submission Guidelines
            </h3>

            <div className="my-3 text-[10px] text-slate-700 text-center lg:text-left">
              The Cybersecurity Research Society invites researchers,
              practitioners, and scholars to submit original, high-quality
              manuscripts for presentation at the Cyber Research Conference
              2025. We welcome submissions that contribute to cybersecurity
              knowledge, including but not limited to the following topics:
            </div>
          </Fade>

          <ul className="px-3 mb-2.5">
            <Fade triggerOnce={true} cascade={true}>
              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-600 cursor-pointer py-1">
                <FaAngleRight />
                <span>Network Security</span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-600 cursor-pointer py-1">
                <FaAngleRight />
                <span>Cyber Threat Intelligence</span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-600 cursor-pointer py-1">
                <FaAngleRight />
                <span>
                  Security in Emerging Technologies (IoT, AI, Blockchain)
                </span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-600 cursor-pointer py-1">
                <FaAngleRight />
                <span>Privacy and Data Protection</span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-600 cursor-pointer py-1">
                <FaAngleRight />
                <span>Cybersecurity Policies and Governance</span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-600 cursor-pointer py-1">
                <FaAngleRight />
                <span>Security in Cloud Computing</span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-600 cursor-pointer py-1">
                <FaAngleRight />
                <span>Ethical Hacking and Penetration Testing</span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-600 cursor-pointer py-1">
                <FaAngleRight />
                <span>Security Education and Training</span>
              </li>
            </Fade>
          </ul>

          <Fade triggerOnce={true} cascade={true}>
            <h3 className="text-xl text-slate-900 text-center lg:text-left font-semibold mb-2.5">
              Manuscript Preparation Guidelines
            </h3>

            <h4 className="text-sm text-slate-900 text-left font-medium mb-1">
              General Format
            </h4>
          </Fade>

          <ul className="mb-3">
            <Fade triggerOnce={true} cascade={true}>
              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-800 cursor-pointer py-1 px-3">
                <FaAsterisk />
                <span>
                  <b>Language: </b>
                  Manuscripts must be written in English.
                </span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-800 cursor-pointer py-1 px-3">
                <FaAsterisk />
                <span>
                  <b>Document Format: </b>
                  Submissions should be in Microsoft Word (.doc or .docx) format
                  and must include all source files and a PDF version.
                </span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-800 cursor-pointer py-1 px-3">
                <FaAsterisk />
                <span>
                  <b>Length: </b>
                  Full research papers should be between 3,000 and 5,000 words.
                </span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-800 cursor-pointer py-1 px-3">
                <FaAsterisk />
                <span>
                  <b>Font: </b>
                  Times New Roman, 12-point font.
                </span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-800 cursor-pointer py-1 px-3">
                <FaAsterisk />
                <span>
                  <b>Line Spacing: </b>
                  Double-spaced throughout, including references and footnotes.
                </span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-800 cursor-pointer py-1 px-3">
                <FaAsterisk />
                <span>
                  <b>Pagination: </b>
                  Include page numbers at the bottom right corner of each page.
                </span>
              </li>
            </Fade>
          </ul>

          <Fade triggerOnce={true} cascade={true}>
            <h4 className="text-sm text-slate-900 text-left font-medium mb-1">
              Title Page
            </h4>
          </Fade>

          <ul className="mb-3">
            <Fade triggerOnce={true} cascade={true}>
              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-800 cursor-pointer py-1 px-3">
                <FaAsterisk />
                <span>
                  <b>Title: </b>
                  Concise and informative, avoiding abbreviations and formulae
                  where possible.
                </span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-800 cursor-pointer py-1 px-3">
                <FaAsterisk />
                <span>
                  <b>Authors: </b>
                  Full names of all authors, their affiliations, and email
                  addresses.
                </span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-800 cursor-pointer py-1 px-3">
                <FaAsterisk />
                <span>
                  <b>Corresponding Author: </b>
                  Clearly indicate the corresponding author with an asterisk (*)
                  and provide their complete contact information.
                </span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-800 cursor-pointer py-1 px-3">
                <FaAsterisk />
                <span>
                  <b>Acknowledgments: </b>
                  Briefly acknowledge contributors who do not meet the criteria
                  for authorship and any funding sources.
                </span>
              </li>
            </Fade>
          </ul>

          <Fade triggerOnce={true} cascade={true}>
            <h4 className="text-sm text-slate-900 text-left font-medium mb-1">
              Abstract and Keywords
            </h4>
          </Fade>

          <ul className="mb-3">
            <Fade triggerOnce={true} cascade={true}>
              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-800 cursor-pointer py-1 px-3">
                <FaAsterisk />
                <span>
                  <b>Abstract: </b>A single paragraph of no more than 300 words
                  summarizing the research question, methods, results, and
                  conclusion.
                </span>
              </li>

              <li className="flex flex-row gap-x-2 place-items-center text-[10px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-800 cursor-pointer py-1 px-3">
                <FaAsterisk />
                <span>
                  <b>Keywords: </b>
                  Up to six keywords separated by commas.
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
