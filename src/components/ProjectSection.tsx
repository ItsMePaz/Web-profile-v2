import React from "react";
import titlestroke from "../../public/titlestroke1.png";

import ProjectCard from "./ProjectCard";
import shopHero from "../../public/project-images/shopsmart/1.png";
import shopSecondImage from "../../public/project-images/shopsmart/2.png";
import shopThirdImage from "../../public/project-images/shopsmart/3.png";
import shopFourthImage from "../../public/project-images/shopsmart/4.png";

import vmsHero from "../../public/project-images/vms/1.png";
import vmsSecondImage from "../../public/project-images/vms/2.png";
import vmsThirdImage from "../../public/project-images/vms/3.png";
import vmsFourthImage from "../../public/project-images/vms/4.png";
import Image from "next/image";

const ProjectsSection = () => {
  return (
    <section>
      <div className="relative flex flex-col justify-center mt-4 items-center">
        <h2 className="absolute z-20 text-white text-[25px]">PROJECTS</h2>
        <img className="w-[170px] z-10 " src={titlestroke.src} alt="" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ProjectCard
          projectTitle="Shopping web application"
          heroProject={shopHero}
          secondProjectImage={shopSecondImage}
          thirdProjectImage={shopThirdImage}
          fourthProjectImage={shopFourthImage}
          techUsed='<p>A simple static 
        web application having the basic add-to-cart features; selecting, quantifying, removing, and getting results from bought items.</p>
        </br>
        <p>This is a collaborative project, created using Vanilla <span style="color:#E34F26;">HTML<span/>, 
        <span style="color:#254EE4">CSS<span/>, 
        <span style="color:black">and</span>
         <span style="color:#F0DB4F">JavaScript<span/> <span style="color:black">with the use of the API concept</span></p><br/><br/><br/>'
          linkToLiveLink="https://itsmepaz.github.io/shopping-site/"
          linkToRepo="https://github.com/ItsMePaz/shopping-site"
          whiteBgHeight="470px"
        />
        <ProjectCard
          projectTitle="Visitor Management System"
          heroProject={vmsHero}
          secondProjectImage={vmsSecondImage}
          thirdProjectImage={vmsThirdImage}
          fourthProjectImage={vmsFourthImage}
          techUsed="<p>A web application that lets you create user 
          accounts and being able to store and query visitor data.</p>
        </br>
        <p>This is a collaborative project, created using the MERN stack. 
        My full responsibility in this project is the design,
         code & business logic of the entire frontend, and deployment. 
         All using <span style='color:#0BC9E3'>REACT</span> + <span style='color:#cd00cd'>VITE</span> and <span style='color:#4DB2C0'>TailwindCSS</span>.
         </p></br></br>
        
       "
          linkToLiveLink="https://hello-vms.vercel.app/"
          linkToRepo="https://github.com/ItsMePaz/Hello_VMS_FrontEnd"
          whiteBgHeight="470px"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
