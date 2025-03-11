import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <>
      <section className="about-section py-1.5 md:py-2.5 xl:py-3.5 px-6 md:px-16 lg:px-28 xl:px-44 select-none">
        <Fade triggerOnce={true} cascade={true}>
          <h2 className="text-[1.3rem] md:text-[1.75rem] xl:text-[2.2rem] text-yellow-950 font-semibold text-center mb-2.5">
            About CRS Conferences
          </h2>

          <p className="py-1 text-center text-sm leading-8 mb-0.5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            dolor rem quae numquam veritatis optio error nemo cumque architecto
            officia! Porro velit tempore eius exercitationem quidem, repellat
            sapiente? Rerum corrupti sequi dolore corporis harum odio?
          </p>

          <p className="py-1 text-center text-sm leading-8 mb-0.5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            eaque earum aspernatur consequatur atque perspiciatis, iste nostrum
            voluptatibus sapiente possimus rerum illo aliquam necessitatibus,
            enim nemo sed repellendus modi nisi explicabo. Suscipit inventore
            tempore doloremque eveniet dolor. Amet nulla perferendis eos, dicta
            architecto optio quo inventore itaque officiis nobis nihil, quidem
            illo quis voluptatem quod. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Nostrum officia vero odio eos totam voluptatem
            delectus dignissimos molestias accusantium, tempora, quasi ut alias
            praesentium nam cumque! Ducimus eos odio hic minus asperiores
            distinctio consequatur!
          </p>

          <p className="py-1 text-center text-sm leading-8 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            dolor rem quae numquam veritatis optio error nemo cumque architecto
            officia! Porro velit tempore eius exercitationem quidem, repellat
            sapiente? Rerum corrupti sequi dolore corporis harum odio?
          </p>

          <div className="w-full text-center py-3.5">
            <Link
              to={"/call-for-papers"}
              className="w-fit mx-auto text-[14px] font-[450] px-9 py-3 bg-orange-900 border border-orange-900 hover:bg-transparent hover:text-orange-900 text-white transition-colors ease-linear duration-300 select-none"
            >
              Call for Papers
            </Link>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default About;
