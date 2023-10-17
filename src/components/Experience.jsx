import React from "react";
import {
  BsFillPatchCheckFill,
  BsGithub,
  
} from "react-icons/bs";
import { FaReact, FaChrome } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { ImNpm } from "react-icons/im";
import { SiHtml5, SiTailwindcss, SiBootstrap } from "react-icons/si";

const Experience = () => {
  return (
    <section
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="my-container"
    >
      <div className="text-center mb-20">
        <h2>
          <>What Skills I Have</>
        </h2>
        <h2 className="text-3xl"> My Experience </h2>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-screen-lg">
        <div className="card card-body px-6 py-8 bg-primary text-primary-content">
          <div>
            <h2 className="card-title text-center text-2xl mb-5">
              Frontend Development
            </h2>
            <hr className="mb-5" />
            <div className="flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-2 font-bold">
                  <SiHtml5 />
                  HTML5,CSS3
                </div>
                <h6 className="ml-8 font-thin">Expert</h6>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 font-bold">
                  <FaReact />
                  React
                </div>
                <h6 className="ml-8">Expert</h6>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 font-bold">
                  <SiTailwindcss />
                  Tailwind CSS
                </div>
                <h6 className="ml-8">Expert</h6>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 font-bold">
                  <SiBootstrap />
                  Bootstrap
                </div>
                <h6 className="ml-8">Expert</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-body px-6 py-8 bg-primary text-primary-content">
          <div>
            <h2 className="card-title text-center text-2xl mb-5">
              Backend Development
            </h2>
            <hr className="mb-5" />
            <div className="flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-2 font-bold">
                  <BsFillPatchCheckFill />
                  Express.Js
                </div>
                <h6 className="ml-8 font-thin">Expert</h6>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 font-bold">
                  <BsFillPatchCheckFill />
                  Node.Js
                </div>
                <h6 className="ml-8">Expert</h6>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 font-bold">
                  <BsFillPatchCheckFill />
                  Rest API
                </div>
                <h6 className="ml-8">Expert</h6>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 font-bold">
                  <BsFillPatchCheckFill />
                  MongoDB
                </div>
                <h6 className="ml-8">Expert</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-body px-6 py-8 bg-primary text-primary-content">
          <div>
            <h2 className="card-title text-center text-2xl mb-5">Tools</h2>
            <hr className="mb-5" />
            <div className="flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-2 font-bold">
                  <TbBrandVscode />
                  Vs Code
                </div>
                <h6 className="ml-8 font-thin">Expert</h6>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 font-bold">
                  <FaChrome />
                  Chrome DevTool
                </div>
                <h6 className="ml-8">Expert</h6>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 font-bold">
                  <ImNpm />
                  Package Managers
                </div>
                <h6 className="ml-8">Expert</h6>
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 font-bold">
                  <BsGithub />
                  Github
                </div>
                <h6 className="ml-8">Expert</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
