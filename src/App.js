import React from "react";
import NavBar from "./components/NavBar";
import Hompage from "./layouts/Hompage";
// import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="p-12  gap-3 logo bg-[url('/public/images/MainImage.png')] min-h-screen bg-no-repeat  bg-cover bg-center bg-fixed">
      <NavBar />
      <Hompage />
    </div>
  );
}

export default App;
