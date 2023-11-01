import { motion } from "framer-motion";
import React, { useState } from "react";
import cross from "../../public/lordicons/cross.gif";
import home from "../../public/lordicons/home.gif";
import skills from "../../public/lordicons/skills.gif";
import projects from "../../public/lordicons/projects.gif";
import contacts from "../../public/lordicons/contact.gif";
import resume from "../../public/lordicons/resume.gif";
import { Link } from "react-scroll";

type Props = {
  showMobileMenu: boolean;
  setShowMobileMenu: (open: boolean) => void;
};

const NavigationMenuMobileAndTablet = ({
  showMobileMenu,
  setShowMobileMenu,
}: Props) => {
  const handleCloseMenu = () => {
    setShowMobileMenu(false);
  };
  return (
    <div
      className="absolute top-0 h-screen w-screen z-20 shadow-2xl z-50"
      style={{
        position: showMobileMenu ? "fixed" : "fixed",
        left: showMobileMenu ? "50%" : "100%",
        transition: "0.5s ease",
      }}
    >
      <nav>
        <div className="bg-[#eff0f0] h-screen mr-[50%] min-w-[50%] ">
          <ul className="flex flex-col">
            <li className="relative h-[75px] bg-[rgb(255,255,255)] flex items-center">
              <button
                onClick={handleCloseMenu}
                className="absolute right-3 w-[40px] "
              >
                <img src={cross.src} alt="cross" />
              </button>
            </li>
            <button className="h-[50px] pr-3 flex items-center justify-end relative bg-white rounded-xl mt-3 mx-3 shadow-inner">
              <img
                className="w-[40px] absolute left-2"
                src={home.src}
                alt="home.gif"
              />
              <p>Home</p>
            </button>
            <button className="h-[50px] pr-3 flex items-center justify-end relative bg-white rounded-xl mt-3 mx-3 shadow-inner">
              <img
                className="w-[40px] absolute left-2"
                src={skills.src}
                alt="skills.gif"
              />
              <p>Skills</p>
            </button>
            <button className="h-[50px] pr-3 flex items-center justify-end relative bg-white rounded-xl mt-3 mx-3 shadow-inner">
              <img
                className="w-[40px] absolute left-2"
                src={projects.src}
                alt="projects.gif"
              />
              <p>Projects</p>
            </button>
            <button className="h-[50px] pr-3 flex items-center justify-end relative bg-white rounded-xl mt-3 mx-3 shadow-inner">
              <img
                className="w-[40px] absolute left-2"
                src={contacts.src}
                alt="contacts.gif"
              />
              <p>Contacts</p>
            </button>
            <button className="h-[50px] pr-3 flex items-center justify-end relative bg-white rounded-xl mt-3 mx-3 shadow-inner">
              <Link
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset based on your specific layout
                duration={500}
              >
                <img
                  className="w-[40px] absolute left-2"
                  src={resume.src}
                  alt="resume.gif"
                />
                <p>Resume</p>
              </Link>
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationMenuMobileAndTablet;
