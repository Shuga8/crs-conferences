import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaAngleRight } from "react-icons/fa6";

const PosterPaper = () => {
  return (
    <>
      <Fade triggerOnce={true} cascade={true}>
        <section className="poster-paper w-full my-3.5 py-10 bg-gray-100 px-5 md:px-24 lg:px-32 xl:px-44">
          <h2 className="text-2xl text-orange-900 font-bold mb-2">
            Poster Paper
          </h2>

          <h3 className="text-sm text-black mb-1 font-semibold">
            Submission Guidelines:
          </h3>

          <div className="text-xs text-slate-800 font-medium mb-4">
            Authors are required to submit poster papers. Poster papers should
            be a maximum of four (4) pages, clearly describing the research
            questions addressed and their contributions to knowledge.
          </div>

          <h3 className="text-sm text-gray-900 mb-1 font-medium ">
            Attendance and Registration:
          </h3>

          <ul className="mb-3">
            <Fade triggerOnce={true} cascade={true}>
              <li className="flex flex-row gap-x-2  text-[11px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-800 cursor-pointer py-1 px-3">
                <FaAngleRight />
                <span>
                  At least one of the Authors of the accepted poster is required
                  to register for the conference.
                </span>
              </li>

              <li className="flex flex-row gap-x-2  text-[11px] translate-x-0 hover:translate-x-2 transform-all ease-linear duration-300 text-slate-800 cursor-pointer py-1 px-3">
                <FaAngleRight />
                <span>
                  Registration fees cover all activities of the conference.
                </span>
              </li>
            </Fade>
          </ul>

          <div className="text-xs text-slate-800 font-medium mb-4">
            A Book of Abstracts will be published for all accepted and presented
            posters. Contact Information: For any inquiries, please contact the
            Poster management team.
          </div>
        </section>
      </Fade>
    </>
  );
};

export default PosterPaper;
