import React from "react";
import Selector from "./Selector";
import { GiCancel } from "react-icons/gi";
import MultipleTopics from "./MultipleTopics";

const GenerateQuestion = () => {
  const lol = {
    listItems: [{ name: "Pan-Atlantic University" }, { name: "Others" }],
  };
  const pop = {
    listItems: [{ name: "Easy" }, { name: "Medium" }, { name: "Hard " }],
  };

  const getDropDownValue = (selectedValue, selectionName) => {};
  return (
    <div className="min-h-screen bg-[#353C3E] text-[#E3F1F4] flex flex-col justify-start items-center py-32">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold">Generate Questions</h1>
        <div className=" space-y-8 accent-[#8BE3F9]">
          <div className="space-y-4">
            <label htmlFor="" className="text-xl font-medium ">
              Subject
            </label>
            <div>
              <Selector DropDownList={lol} callback={getDropDownValue} />
            </div>
          </div>
          <div className="space-y-4 max-w-[600px]">
            <label htmlFor="" className="text-xl font-medium">
              Topics
            </label>
            <MultipleTopics />
          </div>
       
          <div className="flex flex-wrap gap-8">
          <div className="flex-1 space-y-4">
              <label htmlFor="" className="text-xl font-medium">
                Difficulty Level
              </label>
              <div className="flex gap-4">
              <div>
                <input
                  type="radio"
                  value="Easy"
                  name="level"
                  id="easy"
                />
                <label htmlFor="easy" className="pl-2 cursor-pointer text-lg">
                Easy
                </label>
              </div>
              <div >
                <input
                  type="radio"
                  value="Medium"
                  name="level"
                  id="medium"
                />
                <label htmlFor="medium" className="pl-2 cursor-pointer text-lg">
                Medium
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="Hard"
                  name="level"
                  id="hard"
                />
                <label htmlFor="hard" className="pl-2 cursor-pointer text-lg">
                  Hard
                </label>
              </div>
              </div>
            </div>
            <div className="flex-1 space-y-4">
            <label htmlFor="" className="text-xl font-medium">
              Select Mode
            </label>
            <div className="flex gap-4">
              <div>
                <input
                  type="radio"
                  value="Answer Online"
                  name="mode"
                  id="Online"
                />
                <label htmlFor="Online" className="pl-2 cursor-pointer text-lg">
                  Answer Online
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="Print Offline"
                  name="mode"
                  id="Offline"
                />
                <label htmlFor="Offline" className="pl-2 cursor-pointer text-lg">
                  Print Offline{" "}
                </label>
              </div>
            </div>
          </div>
           
          </div>
          <div className="space-y-4">
              <label htmlFor="" className="text-xl font-medium">
                Question Type
              </label>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <button className="text-[#F0FCFF] font-medium  h-[40px] w-[100px] px-2 text-lg">
                    Objective
                  </button>
                  
                  <input
                    type="number"
                    max="30"
                    min="1"
                    placeholder="Max 30"
                    className="outline-none bg-transparent font-regular h-[40px] w-[100px] p-2 text-lg border-b-2  border-solid border-b-[#F0FCFF]"
                  />
                </div>
                <div className="flex gap-2">
                  <button className="text-[#F0FCFF] font-medium  h-[40px] w-[100px] px-2 text-lg">
                    Objective
                  </button>
                  
                  <input
                    type="number"
                    max="30"
                    min="1"
                    placeholder="Max 30"
                    className="outline-none bg-transparent font-regular h-[40px] w-[100px] p-2 text-lg border-b-2  border-solid border-b-[#F0FCFF]"
                  />
                </div>
                <div className="flex gap-2">
                  <button className="text-[#F0FCFF] font-medium  h-[40px] w-[100px] px-2 text-lg">
                    Objective
                  </button>
                  
                  <input
                    type="number"
                    max="30"
                    min="1"
                    placeholder="Max 30"
                    className="outline-none bg-transparent font-regular h-[40px] w-[100px] p-2 text-lg border-b-2  border-solid border-b-[#F0FCFF]"
                  />
                </div>
                
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateQuestion;
