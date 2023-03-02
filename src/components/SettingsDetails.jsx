import React from "react";

const SettingsDetails = ({ generationSetupData }) => {
  return (
    <div className="bg-[#484F51] text-[#E3F1F4] p-8 rounded-xl space-y-4">
      <h1 className="underline text-2xl font-medium">Setup Details</h1>
      <div className=" space-y-2">
        <p>
          <span className="font-medium">Mode : </span>
          {generationSetupData.generation_mode}
        </p>
        <p>
          <span className="font-medium">Subject : </span>
          {generationSetupData.subject}
        </p>
        <p>
          <span className="font-medium">Difficulty Level : </span>
          {generationSetupData.difficulty_level}
        </p>
        <p>
          <span className="font-medium">Topics : </span>
          {generationSetupData.topics.map(
            (topic,index) => (index === 0 ? (<span key={index}>{topic}</span>) : (<span key={index}>, {topic} </span>))
          )}
        </p>
      

   
      </div>
    </div>
  );
};

export default SettingsDetails;
