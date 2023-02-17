import React from "react";
import Homepage from "./layouts/Homepage";
import SelectModePage from "./pages/SelectModePage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Homepage />} />
        <Route path="/select-mode" element={<SelectModePage />} />
      </Routes>

      <SignUp />
    </>
  );
}

export default App;
