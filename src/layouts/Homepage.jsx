import React from "react";
import { Link } from "react-router-dom";
import About from "../components/About";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Hompage = () => {
  return (
    <>
    <div className="bg-[url('/public/images/MainImage.png')] h-screen bg-no-repeat  bg-cover bg-center pt-40">
        <div className="main-info gap-3 logo">
          <h1 className="text-center font-bold text-[64px] text-white leading-[70px] pt-20">
            The Examination Question Site.
          </h1>
          <p className="text-[24px] text-white font-thin text-center pt-8">
            
            Fishel allows you to create or generate test and exam questions. 
            {/* <br /> It
            also allows seasoned teachers to add to our <br /> database of
            questions. */}
            {/* Fishe */}
          </p>
        </div>

        <div className="text-center pt-8 pb-28">
          <Link to="/select-mode">
          <button className="px-8 py-3 bg-[#8BE3F9] text-[#083743] font-bold text-[24px] rounded-md">
            Get Started
          </button></Link>
        </div>
      </div>
      <About />
      <Features />
    </>
  );
};

export default Hompage;

// bg-[url('/public/images/MainImage.png')] min-h-screen bg-no-repeat  bg-cover bg-center
