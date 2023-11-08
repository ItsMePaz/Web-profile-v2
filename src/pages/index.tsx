import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import NavigationBar from "@/components/NavigationBar";
import NavigationMenuMobileAndTablet from "@/components/NavigationMenuMobileAndTablet";
import NavigationMenu from "@/components/NavigationMenuMobileAndTablet";

import ProjectsSection from "@/components/ProjectSection";
import SendMessage from "@/components/SendMessage";
import SkillsSection from "@/components/SkillsSection";
import { useState } from "react";
import { Element } from "react-scroll";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-between p-24 z-50`}
    >
      <NavigationMenuMobileAndTablet
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <NavigationBar setShowMobileMenu={setShowMobileMenu} />
      {/* <a href="https://lordicon.com/">Icons by Lordicon.com</a> */}
      <Element name="about" className="mt-4  h-auto w-screen flex px-9">
        <HeroSection />
      </Element>
      <Element
        name="skills"
        className="mt-4 bg-white h-auto w-screen flex justify-center rounded-lg shadow-inner "
      >
        <SkillsSection />
      </Element>
      <Element
        name="projects"
        className="mt-4 bg-white h-auto w-screen flex justify-center rounded-lg shadow-inn"
      >
        <ProjectsSection />
      </Element>
      <Element
        name="contacts"
        className="mt-4 bg-white h-auto w-screen flex justify-center rounded-lg shadow-inn"
      >
        <SendMessage />
      </Element>
      <footer>
        <FooterSection />
      </footer>
    </main>
  );
}

/* className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} */
