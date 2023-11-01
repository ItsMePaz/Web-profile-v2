import React from "react";
import hero from "../../public/lordicons/hero.gif";
import shadow from "../../public/shadow.png";
import herobg from "../../public/herobg.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-start relative w-screen mb-5">
      {/* <img
        className="absolute flex items-center justify-center w-[800px] h-[200px] z-0"
        src={herobg.src}
        alt=""
      /> */}
      <h1 className="font-bold text-[30px] mt-[17px] z-10">I am</h1>
      <h1 className="font-bold text-[30px] mt-[10px] z-10">Michael Paz.</h1>
      <h1 className="font-bold text-[20px] mt-[20px] z-10">
        A Full-Stack Web Developer
      </h1>

      <div className="absolute right-0 w-[90px] h-auto z-10">
        <img src={hero.src} alt="" />
        <img className="opacity-25" src={shadow.src} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
