import React from "react";
import titlestroke from "../../public/titlestroke1.png";

import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section>
      <div className="relative flex flex-col justify-center mt-4 items-center">
        <h2 className="absolute z-20 text-white text-[25px]">PROJECTS</h2>
        <img className="w-[170px] z-10 " src={titlestroke.src} alt="" />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <ProjectCard
          techUsed='<p>A simple static 
        web application having some of the basic add-to-cart features.</p>
        </br>
        <p>This is a collaborative project, created using Vanilla <span style="color:#E34F26;">HTML<span/>, 
        <span style="color:#254EE4">CSS<span/>, 
        <span style="color:black">and</span>
         <span style="color:#F0DB4F">JavaScript<span/> <span style="color:black">with the use of the API concept</span></p>'
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
