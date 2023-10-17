import React from "react";

const AllProject = ({ project }) => {
  const { liveSite, image, codeLink } = project;
  return (
    <div data-aos="zoom-out">
      <div className="my-container flex bg-slate-100">
        <div className="group h-96 md:w-80 w-full [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                src={image}
                alt=""
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <button className="border-2 border-indigo-200 border-t-blue-500 px-5 py-2 rounded-lg">
                  <a href={liveSite} target="_blank" rel="noopener noreferrer">
                    Live Site
                  </a>
                </button>
                <button className="border-2 border-indigo-200 border-b-blue-500 px-5 py-2 rounded-lg mt-8">
                  <a href={codeLink} target="_blank" rel="noopener noreferrer">
                    Git Link
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProject;
