import React from "react";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    // <>
      <a className="flex gap-3 items-center p-4 lg:pt-8 lg:px-16 fixed" href="/">
        <div className="">
          <img src={Logo} alt="" className="w-8 lg:w-auto" />
        </div>
        <h1 className="text-[24px] lg:text-[32px] font-bold text-white">Fishel</h1>
      </a>

    // </>
  );
};

export default NavBar;
