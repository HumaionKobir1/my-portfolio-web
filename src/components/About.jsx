import React from "react";
import { BsAward, BsPeople } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import Lottie from "lottie-react";
import CountUp from "react-countup";
import about from "../assets/about.json";

const About = () => {
  return (
    <div className="my-container cursor-pointer">
      <div data-aos="zoom-out-down" className="text-center mb-8 md:mb-20">
        <h2>
          <>"Get to Know"</>
        </h2>
        <h2 className="text-3xl">About Me</h2>
      </div>

      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 md:mr-16">
          <Lottie animationData={about} loop={true} className="mx-auto" />
        </div>

        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mr-40">
            <div className="bg-blue-300 px-8 py-3 rounded-md flex flex-col justify-center items-center shadow-lg hover:bg-green-400 hover:border-teal-200">
              <BsAward className="text-5xl" />
              <h3 className="mt-4">Experience</h3>
              <h5 className="text-3xl font-thin">
                <CountUp end={6} duration={20} delay={1} />
              </h5>{" "}
              <span>Months+</span>
              <h6>Working</h6>
            </div>

            <div className="bg-blue-300 px-8 py-3 rounded-md flex flex-col justify-center items-center shadow-lg hover:bg-green-400">
              <BsPeople className="text-5xl" />
              <h3 className="mt-4">Clients</h3>
              <h5 className="text-3xl font-thin">
                <CountUp end={5} duration={20} delay={1} />
              </h5>{" "}
              <span>Clients+</span>
              <h6>Worldwide</h6>
            </div>

            <div className="bg-blue-300 px-8 py-3 rounded-md flex flex-col justify-center items-center shadow-lg hover:bg-green-400">
              <AiFillProject className="text-5xl" />
              <h3 className="mt-4">Projects</h3>
              <h5 className="text-3xl font-thin">
                <CountUp end={30} duration={20} delay={1} />
              </h5>{" "}
              <span>Done</span>
              <h6></h6>
            </div>
          </div>

          <div className="mt-4 md:mt-5 font-semibold text-center md:text-left">
            Hello!! My name is Humaion Kobir. I want to gain confidence and
            fame using my potential in this position, and express my innovative
            creative skills for self and company growth. I am a hardworking and
            quick learner person. I believe hard work is the only way to
            success. Love to learn new technology and try to improve myself.
          </div>

          <button className="btno mt-4 md:mt-5 mx-auto md:mx-0">
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
