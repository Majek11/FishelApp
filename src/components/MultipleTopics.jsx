import React, { useState,useEffect } from "react";
import { GiCancel } from "react-icons/gi";

const MultipleTopics = ({ subjectTopics,callback }) => {
  const [inputValue, setInputValue] = useState("");
  const [topicsList, setTopicsList] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  
  useEffect(() => {
    
    setTopicsList(subjectTopics)
    setSelectedTopics([])
    callback([])
  }, [subjectTopics]);
  return (
    <>
     {topicsList.length === 0?( 
        <div className="flex flex-wrap gap-2 lg:gap-4 p-2 lg:p-4 border-solid border-2 rounded-lg text-[#ffffff4b]">
         Select a subject to see topics
        </div>
        ):( 
        <div className="flex flex-wrap gap-2 lg:gap-4 p-2 lg:p-4 border-solid border-2 rounded-lg ">
           {/* selectedTopics */}
           {selectedTopics.map((topic, index) => (
            <div
              key={index}
              className="text-[#083743] bg-[#F0FCFF] font-medium hover:scale-95 hover:bg-red-200 lg:h-[40px] px-2 lg:px-4 lg:text-lg rounded lg:rounded-lg duration-300 delay-200 flex items-center gap-2 cursor-pointer  "
              onClick={() => {
                let newSelectedTopics = selectedTopics;
                let topicPosition = newSelectedTopics.indexOf(topic);
                newSelectedTopics.splice(topicPosition, 1);
                setSelectedTopics([...newSelectedTopics]);
                callback([...newSelectedTopics]);
              }}
            >
              {topic}
              <span>
                <GiCancel />
              </span>
            </div>
          ))}
          <div className="relative">
            <input
              type="text"
              placeholder={`Find topics eg.${topicsList[0]}... `}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              className=" bg-transparent outline-none text-[#F0FCFF]  lg:h-[40px] px-2"
            />
            <div className="absolute left-0 bg-white w-full rounded-lg">
              {topicsList.map((topic, index) => (
                //    { if(inputValue !== ""){return}}

                <div
                  key={index}
                  className={`p-2 text-sm hover:bg-[#C4F0FB]  text-[#083743] duration-300  cursor-pointer hover:text-mode-bg-light border-b-[1px] border-solid border-[#08374371]
            ${
              topic.toLowerCase().startsWith(inputValue) && inputValue !== ""
                ? "block"
                : "hidden"
            }`}
                  onClick={() => {
                    if (!selectedTopics.includes(topic)) {
                      let newSelectedTopics = selectedTopics;
                      newSelectedTopics.push(topic);
                      setSelectedTopics([...newSelectedTopics]);
                      callback([...newSelectedTopics]);
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
        )} 
    </>
  );
};

export default MultipleTopics;
