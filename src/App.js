import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Homepage from "./layouts/Homepage";
import SelectModePage from "./layouts/SelectModePage";
import { Routes, Route } from "react-router-dom";
import GenerateModePage from "./layouts/modePages/GenerateModePage"
import CreateModePage from "./layouts/modePages/CreateModePage"

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/select-mode" element={<SelectModePage />} />
        <Route path="/generate-mode" element={<GenerateModePage />} />
        <Route path="/create-mode" element={<CreateModePage />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
