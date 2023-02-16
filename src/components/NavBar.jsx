import React from "react";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <div className="flex gap-3">
        <div className="">
          <img src={Logo} alt="" />
        </div>
        <h1 className="text-[32px] font-bold text-white">Fishel</h1>
      </div>

    </>
  );
};

export default NavBar;
