import React from "react";
import { Route, Routes } from "react-router-dom";
import GenerateQuestion from "../../components/GenerateQuestion";
import QuestionsPage from "../QuestionsPage";

const GenerateModePage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GenerateQuestion />} />
        <Route path="/questions*" element={<QuestionsPage />} />
      </Routes>
    </div>
  );
};

export default GenerateModePage;
