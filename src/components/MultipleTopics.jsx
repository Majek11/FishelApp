import React, { useState } from "react";
import { GiCancel } from "react-icons/gi";

const MultipleTopics = ({ DropDownList }) => {
  const mathList = [
    "Algebra",
    "Calculus",
    "Geometry",
    "Trigonometry",
    "Statistics",
    "Probability",
    "Number theory",
    "Linear algebra",
    "Differential equations",
    "Combinatorics",
  ];

  const [inputValue, setInputValue] = useState("");
  const [mathTopics, setMathTopics] = useState(mathList);
  const [selectedTopics, setSelectedTopics] = useState([]);
  return (
    <div className="flex flex-wrap gap-4 p-4 border-solid border-2 rounded-lg ">
      {/* selectedTopics */}
      {selectedTopics.map((topic, index) => (
        <button
          key={index}
          className="text-[#083743] bg-[#F0FCFF] font-medium hover:scale-95 hover:bg-red-200 h-[40px] px-4 text-lg rounded-lg duration-300 delay-200 flex items-center gap-2"
          onClick={() => {
              let newSelectedTopics = selectedTopics;
              let topicPosition = newSelectedTopics.indexOf(topic)
              newSelectedTopics.splice(topicPosition,1)
              setSelectedTopics([...newSelectedTopics]);
          }}
        >
          {topic}
          <span>
            <GiCancel />
          </span>
        </button>
      ))}
      <div className="relative">
        <input
          type="text"
          placeholder="Search for topic"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value.toLowerCase())}
          //   placeholder={placeholderName}
          className=" bg-transparent outline-none text-[#F0FCFF]  h-[40px] px-2"
        />
        <div className="absolute left-0 bg-white w-full">
          {mathTopics.map((topic, index) => (
        //    { if(inputValue !== ""){return}}

            
            <div
              key={index}
              className={`p-2 text-sm hover:bg-[#C4F0FB] text-[#083743] duration-300  cursor-pointer hover:text-mode-bg-light
            ${
                topic.toLowerCase().startsWith(inputValue) && inputValue !== ""
                ? "block"
                : "hidden"
            }`}
              onClick={() => {
                if (!selectedTopics.includes(topic)) {
                  let newSelectedTopics = selectedTopics;
                  newSelectedTopics.push(topic)
                  setSelectedTopics([...newSelectedTopics]);
                  //   setOpen(false);
                  //   callback(listItem?.name, selectionName);
                  setInputValue("");
                }
              }}
            >
              {topic}
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultipleTopics;
