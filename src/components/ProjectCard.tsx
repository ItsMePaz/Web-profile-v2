import React from "react";
import shophero from "../../public/project-images/shopsmart/1.png";
import subtitlestroke from "../../public/skillsbg.png";
import cardbg from "../../public/cardbg.png";
import carddetailsbg from "../../public/cardbgwhite.png";

type Props = {
  techUsed: string;
};

const ProjectCard = ({ techUsed }: Props) => {
  return (
    <article className="flex justify-center items-center flex-col relative">
      <img className="z-20 h-[300px]" src={cardbg.src} alt="" />
      <img className="mt-[-100px] h-[350px]" src={carddetailsbg.src} alt="" />
      <div className="flex flex-col items-center">
        <div className="absolute top-0 flex flex-col z-20">
          <div className="relative flex flex-col justify-center mt-4 items-center w-screen">
            <h2 className="absolute z-20 text-black text-[25px]">
              Shopping web application
            </h2>
            <img
              className="w-screen h-[35px] z-10"
              src={subtitlestroke.src}
              alt=""
            />
          </div>
        </div>
        <div className="absolute z-20 top-3 grid grid-cols-2 gap-4 items-center mt-14">
          <img
            className="w-[150px] shadow-inner rounded-sm"
            src={shophero.src}
            alt=""
          />
          <img
            className="w-[150px] shadow-inner rounded-sm"
            src={shophero.src}
            alt=""
          />
          <img
            className="w-[150px] shadow-inner rounded-sm"
            src={shophero.src}
            alt=""
          />
          <img
            className="w-[150px] shadow-inner rounded-sm"
            src={shophero.src}
            alt=""
          />
        </div>
        <div className="absolute flex flex-col justify-center bottom-16 z-20 items-center text-justify w-[300px]">
          <p dangerouslySetInnerHTML={{ __html: techUsed }}></p>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
