import React from "react";
import Footer from "./components/Footer";
import Homepage from "./layouts/Homepage";
import SelectModePage from "./pages/SelectModePage";
import { Routes, Route } from "react-router-dom";
import GenerateModePage from "./layouts/modePages/GenerateModePage"
import CreateModePage from "./layouts/modePages/CreateModePage"
import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/select-mode" element={<SelectModePage />} />
        <Route path="/generate-mode*" element={<GenerateModePage />} />
        <Route path="/create-mode" element={<CreateModePage />} />
      </Routes>
    <Footer/>
      {/* <SignUp /> */}
    </>
  );
}

export default App;
