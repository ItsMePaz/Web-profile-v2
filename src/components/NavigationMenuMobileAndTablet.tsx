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
      className="absolute top-0 h-screen w-screen ml-[5px] min-[450px]:w-[80%] min-[450px]:ml-[10%] sm:w-[55%] sm:ml-[23%] lg:w-[30%] lg:ml-[35%] shadow-2xl z-50 "
      style={{
        position: showMobileMenu ? "fixed" : "fixed",
        left: showMobileMenu ? "50%" : "100%",
        transition: "0.5s ease",
      }}
    >
      <nav>
        <div className="bg-[#eff0f0] h-screen mr-[50%]  min-w-[50%]">
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
              <Link
                className="flex items-center"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img
                  className="w-[40px] absolute left-2"
                  src={home.src}
                  alt="home.gif"
                />
                <p>Home</p>
              </Link>
            </button>
            <button className="h-[50px] pr-3 flex items-center justify-end relative bg-white rounded-xl mt-3 mx-3 shadow-inner">
              <Link
                className="flex items-center"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img
                  className="w-[40px] absolute left-2"
                  src={skills.src}
                  alt="skills.gif"
                />
                <p>Skills</p>
              </Link>
            </button>
            <button className="h-[50px] pr-3 flex items-center justify-end relative bg-white rounded-xl mt-3 mx-3 shadow-inner">
              <Link
                className="flex items-center"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img
                  className="w-[40px] absolute left-2"
                  src={projects.src}
                  alt="projects.gif"
                />
                <p>Projects</p>
              </Link>
            </button>
            <button className="h-[50px] pr-3 flex items-center justify-end relative bg-white rounded-xl mt-3 mx-3 shadow-inner">
              <Link
                className="flex items-center"
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img
                  className="w-[40px] absolute left-2"
                  src={contacts.src}
                  alt="contacts.gif"
                />
                <p>Contacts</p>
              </Link>
            </button>
            <button className="h-[50px] pr-3 flex items-center justify-end relative bg-white rounded-xl mt-3 mx-3 shadow-inner">
              <a
                className="flex items-center"
                href="https://drive.google.com/file/d/1hvAYedxXYWjaq2DkoDC6ffRuPVs-jd2D/view?usp=sharing"
                target="_blank"
              >
                <img
                  className="w-[40px] absolute left-2"
                  src={resume.src}
                  alt="resume.gif"
                />
                <p>Resume</p>
              </a>
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationMenuMobileAndTablet;
