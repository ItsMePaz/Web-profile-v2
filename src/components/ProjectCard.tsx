import React from "react";
import shophero from "../../public/project-images/shopsmart/1.png";
import subtitlestroke from "../../public/skillsbg.png";
import cardbg from "../../public/cardbg.png";
import carddetailsbg from "../../public/cardbgwhite.png";
import lintobg from "../../public/linktoprojectbg.png";
import gh from "../../public/githublogo.png";
import { StaticImageData } from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

type Props = {
  projectTitle: string;
  techUsed: string;
  heroProject: StaticImageData;
  secondProjectImage: StaticImageData;
  thirdProjectImage: StaticImageData;
  fourthProjectImage: StaticImageData;
  linkToLiveLink: string;
  linkToRepo: string;
  whiteBgHeight: string;
};

const ProjectCard = ({
  techUsed,
  projectTitle,
  heroProject,
  secondProjectImage,
  thirdProjectImage,
  fourthProjectImage,
  linkToLiveLink,
  linkToRepo,
  whiteBgHeight,
}: Props) => {
  return (
    <article className="flex justify-center items-center flex-col relative mb-[40px]">
      <img className="z-20 h-[300px]" src={cardbg.src} alt="" />
      <img
        className="mt-[-100px] h-[350px]"
        style={{ height: whiteBgHeight }}
        src={carddetailsbg.src}
        alt=""
      />
      <div className="flex flex-col items-center">
        <div className="absolute top-0 flex flex-col z-20">
          <div className="relative flex flex-col justify-center mt-4 items-center w-screen">
            <h2 className="absolute z-20 text-black text-[25px]">
              {projectTitle}
            </h2>
            <img
              className="w-screen h-[35px] z-10"
              src={subtitlestroke.src}
              alt="prject image"
            />
          </div>
        </div>
        <div className="absolute z-20 top-3 grid grid-cols-2 gap-4 items-center mt-14">
          <img
            className="w-[150px] shadow-inner rounded-sm"
            src={heroProject.src}
            alt=""
          />
          <img
            className="w-[150px] shadow-inner rounded-sm"
            src={secondProjectImage.src}
            alt=""
          />
          <img
            className="w-[150px] shadow-inner rounded-sm"
            src={thirdProjectImage.src}
            alt=""
          />
          <img
            className="w-[150px] shadow-inner rounded-sm"
            src={fourthProjectImage.src}
            alt=""
          />
        </div>
        <div className="absolute flex flex-col justify-center bottom-16 z-20 items-center text-justify w-[300px]">
          <p dangerouslySetInnerHTML={{ __html: techUsed }}></p>
        </div>
        <div className="absolute bottom-[-63px] w-[200px]  right-11 flex ">
          <img className=" rotate-[20deg] z-20" src={lintobg.src} alt="" />
          <div className="absolute bottom-[60px] right-[55px] z-30 flex gap-4">
            <button className="flex">
              <a href={linkToLiveLink} target="_blank">
                <ArrowTopRightOnSquareIcon className="h-10 w-10 text-white" />
              </a>
            </button>
            <button>
              <a href={linkToRepo} target="_blank">
                <img className="h-10 w-10" src={gh.src} alt="" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
