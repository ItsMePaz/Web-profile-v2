import React from "react";
import hero from "../../public/lordicons/hero.gif";
import shadow from "../../public/shadow.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-start relative w-screen mb-5">
      <h1 className="font-bold text-[30px] mt-[17px] z-10 lg:text-[50px]">
        I am
      </h1>
      <h1 className="font-bold text-[30px] mt-[10px] z-10 lg:text-[50px]">
        Michael Paz.
      </h1>
      <h1 className="font-bold text-[20px] mt-[20px] z-10 lg:text-[50px]">
        A Full-Stack Web Developer
      </h1>
      <p className="mt-3 text-[14px] lg:text-[22px]">
        A person who is passionate about web development and currently has a
        strong foundation with Java-React Stack. I am always open to learning
        new technologies as I aim to be a highly adaptable developer and create
        better websites.{" "}
      </p>

      <div className="absolute right-0 w-[90px] h-auto z-10 lg:w-[200px]">
        <img src={hero.src} alt="hero section image" />
        <img className="opacity-25" src={shadow.src} alt="shadow_bg" />
      </div>
    </section>
  );
};

export default HeroSection;
