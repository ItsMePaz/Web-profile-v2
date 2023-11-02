import React from "react";
import titlestroke from "../../public/titlestroke1.png";
import subtitlestroke from "../../public/skillsbg.png";

const SkillsSection = () => {
  return (
    <section className="px-[0px]">
      <div className="relative flex flex-col justify-center mt-4 items-center">
        <h2 className="absolute z-20 text-white text-[30px]">Skills</h2>
        <img className="w-[160px] z-10" src={titlestroke.src} alt="" />
      </div>
      <div className="relative flex flex-col justify-center mt-4 items-center">
        <h2 className="absolute z-20 text-black text-[25px]">Frontend</h2>
        <img className="w-[130px] z-10" src={subtitlestroke.src} alt="" />
      </div>
      <article className="mt-3 grid grid-cols-3 gap-4 text-center">
        <h1 className="text-[#E34F26] flex items-center justify-center">
          HTML
        </h1>
        <h1 className="text-[#254EE4]">CSS</h1>
        <h1 className="text-[#8412FA]">Bootstrap</h1>
        <h1 className="text-[#F0DB4F]">JavaScript</h1>
        <h1 className="text-[#0BC9E3]">ReactJS</h1>
        <div className="text-[#4DB2C0]">TailwindCSS</div>
        <h1 className="col-span-3 flex justify-center gap-7 text-center">
          <h1 className="text-[#2D79C7]">TypeScript</h1>
          <div>NextJS</div>
        </h1>
      </article>
      {/* Start of backend techs */}
      <div className="relative flex flex-col justify-center mt-8 items-center">
        <h2 className="absolute z-20 text-black text-[25px]">Backend</h2>
        <img className="w-[130px] z-10" src={subtitlestroke.src} alt="" />
      </div>
      <article className="mt-3 grid grid-cols-3 gap-4 text-center">
        <h1 className="text-[#E34F26]">Java</h1>
        <h1 className="text-[#254EE4]">Maven</h1>
        <h1 className="text-[#2D79C7]">MySQL</h1>
        <h1 className="col-span-3 flex justify-center gap-4 text-center">
          <h1 className="text-[#d2bf45]">Hibernate ORM</h1>
          <div className="text-[#6AAF42]">Spring Boot & Spring Web</div>
        </h1>
      </article>
      {/* Start of other development tools */}
      <div className="relative flex flex-col justify-center mt-8 items-center">
        <h2 className="absolute z-20 text-black text-[25px]">Dev Tools</h2>
        <img className="w-[130px] z-10" src={subtitlestroke.src} alt="" />
      </div>
      <article className="mt-3 grid grid-cols-3 gap-4 text-center mb-8">
        <h1>Git</h1>
        <h1>GitHub</h1>
        <h1>Postman</h1>
        <h1 className="flex items-center justify-center">VSCode</h1>
        <h1 className="flex items-center justify-center">IntelliJ</h1>
        <h1 className="items-center">MySQL Workbench</h1>
        <h1 className="col-span-3">Figma</h1>
      </article>
    </section>
  );
};

export default SkillsSection;
