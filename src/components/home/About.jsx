import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import about_img from "../../assets/about.jpg";

const About = () => {
  return (
    <>
      <section className="about-section py-1.5 md:py-2.5 xl:py-3.5 px-6 md:px-12 lg:px-24 xl:px-32 select-none">
        <Fade triggerOnce={true} cascade={true}>
          <h2 className="text-[1.3rem] md:text-[1.75rem] xl:text-[2.2rem] text-yellow-950 font-semibold text-center mb-5">
            About CRS Conferences
          </h2>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5">
            <div className="">
              <img
                src={about_img}
                alt=""
                className="w-full h-full object-fill"
              />
            </div>

            <div className="">
              <p className="py-1 text-center text-xs leading-6 mb-0.5">
                Bridging The Gap: Fostering Collaboration Between Academia and
                Industry in Advancing Cybersecurity Research and Education.
              </p>
              <p className="py-1 text-center text-xs leading-6 mb-0.5">
                The theme "Bridging the Gap: Fostering Collaboration Between
                Academia and Industry in Advancing Cybersecurity Research and
                Education" is pivotal in addressing the critical need for
                enhanced collaboration between academic institutions and the
                industrial sector. As the digital landscape continues to evolve,
                the challenges and threats in cybersecurity grow in complexity
                and scale. This theme underscores the importance of a unified
                approach to tackle these challenges effectively. This theme
                highlights the existing disconnect between academic research and
                practical industry applications and emphasizes the need for a
                synergistic relationship where academia and industry can
                mutually benefit from each other's strengths.
              </p>

              <p className="py-1 text-center text-xs leading-6 mb-0.5">
                Encouraging the establishment of partnerships and collaborative
                efforts between universities, research institutions and industry
                players is essential. Methods such as joint research projects,
                internships, workshops, and knowledge exchange programs can
                significantly foster collaboration. The potential for innovative
                solutions, enhanced skill development, and rapid transfer of
                knowledge underscores the benefits of these collaborative
                efforts. Advancing cybersecurity research requires a focus on
                critical areas such as threat detection, prevention strategies,
                and the development of new technologies. This approach
                encourages the adoption of cutting-edge research and its
                application to real-world cybersecurity problems, showcasing
                successful collaborations and their tangible impact.
              </p>

              <p className="py-1 text-center text-xs leading-6 mb-0.5">
                Enhancing cybersecurity education involves advocating for
                curricula that reflect current industry needs and future trends,
                stressing the importance of equipping students with practical
                skills and theoretical knowledge, and promoting continuous
                learning and professional growth opportunities for both students
                and industry professionals. This theme facilitates the flow of
                knowledge and innovations from academia to industry and vice
                versa, preparing a highly skilled workforce capable of
                addressing current and future cybersecurity challenges, driving
                technological advancements and fostering an environment of
                innovation.
              </p>

              <p className="py-1 text-center text-xs leading-6 mb-2">
                In conclusion, the theme "Bridging the Gap: Fostering
                Collaboration Between Academia and Industry in Advancing
                Cybersecurity Research and Education" is a call to action for
                stakeholders to work together towards a more secure digital
                future. It aims to create a robust ecosystem where knowledge,
                skills and innovations are shared, leading to significant
                advancements in cybersecurity research and education. By
                bridging the gap, we can build a resilient and dynamic
                cybersecurity landscape that meets the demands of our rapidly
                changing world.
              </p>

              <div className="w-full text-center py-3.5">
                <Link
                  to={"/call-for-papers"}
                  className="w-fit mx-auto text-[14px] font-[450] px-9 py-3 bg-orange-900 border border-orange-900 hover:bg-transparent hover:text-orange-900 text-white transition-colors ease-linear duration-300 select-none"
                >
                  Call for Papers
                </Link>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default About;
