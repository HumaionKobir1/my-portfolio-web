import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import HomeSocial from "./HomeSocial";
import Lottie from "lottie-react";
import bg from "../assets/blue-background-animation.json";
import { FiDownload, FiPhoneCall } from "react-icons/Fi";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import ContactMe from "./ContactMe";
import humaion from '../../public/hb.png'

const Home = () => {
  return (
    <>
      <div className="my-container flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight">Hello, I'm Humaion Kobir</h2>
            <h2 className="max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              <span className="text-cyan-500 text-5xl">
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "Tailwind Master",
                      "React Developer",
                      "Full Stack Developer",
                      "BootStrap Expert",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>
            <h5 className="text-xl mt-5 mb-8">I want to gain confidence and fame using my potential in this position, and express my innovative creative skills for self and company growth. I am a hardworking and quick learner person. I believe hard work is the only way to success. Love to learn new technology and try to improve myself.</h5>
          </div>

          <div className="flex flex-col items-center md:flex-row">
            <Link
              to="/"
              className="border-blue-300 md:w-auto md:mr-4 mb-4 md:mb-0"
            >
              <div className="inline-flex items-center justify-center w-full h-full">
                <button className="btn btn-outline btn-primary rounded-md px-5 py-2">
                  Download CV{" "}
                  <span className="text-lg ml-1">
                    <FiDownload />
                  </span>
                </button>
              </div>
            </Link>
            <Link to="/contact" className="md:w-auto md:mr-4">
              <div className="inline-flex items-center justify-center w-full h-full">
                <button className="btn bg-blue-400 border-0 text-white rounded-md px-5 py-2">
                  Contact Me{" "}
                  <span className="text-lg ml-1">
                    <FiPhoneCall />
                  </span>
                </button>
              </div>
            </Link>
          </div>
          <div>
            <HomeSocial />
          </div>
        </div>

        <div className="relative lg:w-1/2">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56 sm:h-96">
            <div className="relative md:right-10 text-center w-88">
              <Lottie animationData={bg} loop={true} />
            </div>
            <div className="absolute -top-12 right-5">
              <img
                src={humaion}
                alt=""
                className="rounded-full w-88"
              />
            </div>
          </div>
        </div>
      </div>
      {/* page ---at home  */}
      <About />
      <Experience />
      <Projects />
      <ContactMe />
    </>
  );
};

export default Home;
 