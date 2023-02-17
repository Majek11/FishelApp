import React from "react";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Homepage from "./layouts/Homepage";
import SelectModePage from "./layouts/SelectModePage";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="p-12  gap-3 logo bg-[url('/public/images/MainImage.png')] min-h-screen bg-no-repeat  bg-cover bg-center bg-fixed">
    {/* <div className="min-h-screen bg-[#353C3E] "> */}
      <NavBar />
      <Routes>
      <Route path="*" element={<Homepage />} />
        <Route path="/select-mode" element={<SelectModePage/>} />
      </Routes>
    </div>
  );
}

export default App;
