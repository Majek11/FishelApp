import React from "react";

const SettingsDetails = ({ generationSetupData }) => {
  return (
    <div className="bg-[#484F51] text-[#E3F1F4] p-8 rounded-xl space-y-4">
      <h1 className="underline text-2xl font-medium">Setup Details</h1>
      <div className=" space-y-2">
        <p>
          <span className="font-medium">Mode: </span>
          {generationSetupData.generation_mode}
        </p>
        <p>
          <span className="font-medium">Subject: </span>
          {generationSetupData.subject}
        </p>
        <p>
          <span className="font-medium">Topics: </span>
          {generationSetupData.topics.map(
            (topic,index) => (index === 0 ? (<span>{topic}</span>) : (<span>, {topic} </span>))
          )}
        </p>
        <p>
          <span className="font-medium">Difficulty Level: </span>
          {generationSetupData.difficulty_level}
        </p>

        <div>
          <h1 className="font-medium underline">Question Type</h1>
          <p>
            <span className="font-medium">Objective: </span>
            {generationSetupData.question_type.objective}
          </p>
          <p>
            <span className="font-medium">Theory: </span>
            {generationSetupData.question_type.theory}
          </p>
          <p>
            <span className="font-medium">Subjective: </span>
            {generationSetupData.question_type.subjective}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsDetails;
