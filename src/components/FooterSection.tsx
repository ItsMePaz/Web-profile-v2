import React from "react";

import linkedin from "../../public/linkedin.png";
import gmail from "../../public/gmail.png";
import github from "../../public/github.png";

const FooterSection = () => {
  return (
    <div className="absolute flex gap-6 justify-center mt-7 h-[50px] bg-black w-screen bottom-0 left-0 items-center">
      <a
        className="cursor-pointer"
        href="https://www.linkedin.com/in/michael-andrew-paz-012651245/"
        target="_blank"
      >
        <img className="h-[35px]" src={linkedin.src} alt="linkedin_logo" />
      </a>
      <a
        className="cursor-pointer"
        href="mailto:pazmichaelandrew70@gmail.com"
        target="_blank"
      >
        <img className="h-[35px]" src={gmail.src} alt="gmail_logo" />
      </a>
      <a
        className="cursor-pointer"
        href="mailto:pazmichaelandrew70@gmail.com"
        target="_blank"
      >
        <img className="h-[35px]" src={github.src} alt="github.logo" />
      </a>
    </div>
  );
};

export default FooterSection;
