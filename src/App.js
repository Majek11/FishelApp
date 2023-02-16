import React from "react";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Hompage from "./layouts/Hompage";
// import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <div className="p-12  gap-3 logo bg-[url('/public/images/MainImage.png')] min-h-screen bg-no-repeat  bg-cover bg-center">
      <NavBar />
      <Hompage />
      </div>
      <About />
      <Features />
      <Footer />
    </>
  );
}

export default App;
