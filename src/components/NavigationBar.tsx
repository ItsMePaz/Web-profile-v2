import React from "react";
import stroke from "../../public/stroke.png";

type Props = {
  setShowMobileMenu: (open: boolean) => void;
};

const NavigationBar = ({ setShowMobileMenu }: Props) => {
  const handleOpenMobileMenu = () => {
    setShowMobileMenu(true);
  };
  return (
    <div className="fixed top-0 w-screen h-[75px] bg-[rgb(255,255,255)] flex items-center justify-between px-[20px] z-30 shadow-md">
      <div className="relative">
        <h1 className="logo text-[35px]">Michael P.</h1>
        <img className="absolute bottom-[-10px]" src={stroke.src} alt="" />
      </div>
      <button onClick={handleOpenMobileMenu}>
        <svg
          className="w-[40px]"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default NavigationBar;
