import React from "react";
import { useLoaderData } from "react-router-dom";
import AllProject from "./AllProject";

const Projects = () => {
  const projectData = useLoaderData();
  console.log(projectData);
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="text-center mt-16"
      >
        <h6>My Recent Work</h6>
        <h3 className="text-3xl">Portfolio</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 md:mx-8 lg:mx-16 mt-8">
        {projectData.map((project) => (
          <AllProject key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
