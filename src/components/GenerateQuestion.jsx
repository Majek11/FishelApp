import React from "react";
import Selector from "./Selector";
import {GiCancel} from "react-icons/gi"
import MultipleTopics from "./MultipleTopics"

const GenerateQuestion = () => {
  const lol = {
    listItems: [{ name: "Pan-Atlantic University" }, { name: "Others" }],
  };
  const pop = { listItems: [{ name: "Easy" }, { name: "Medium" }, { name: "Hard " }] };

  const getDropDownValue = (selectedValue, selectionName) => {};
  return (
    <div className="min-h-screen lg:h-screen bg-[#353C3E] text-[#E3F1F4] flex flex-col justify-center items-center">
      <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Generate Questions</h1>
      <div className=" space-y-8 accent-[#8BE3F9]">
        <div className="space-y-4">
          <label htmlFor="" className="text-xl font-medium">Subject</label>
          <div>
            <Selector DropDownList={lol} callback={getDropDownValue} />
          </div>
        </div>
        <div className="space-y-4 max-w-[700px]">
          <label htmlFor=""  className="text-xl font-medium">Topics</label>
          {/* <div className="flex flex-wrap gap-4 p-4 border-solid border-2 rounded-lg"> */}
          {/* <button className="text-[#083743] bg-[#F0FCFF] font-medium hover:scale-95 h-[40px] px-4 text-lg rounded-lg duration-300 delay-200 flex items-center gap-2">Addition <span><GiCancel/></span></button> */}
          <MultipleTopics/>
          {/* <input
                  type="search"
                  placeholder="Search for topic"
                  className=" bg-transparent outline-none text-[#F0FCFF]  px-2"
                /> */}
          {/* </div> */}
        </div>
        <div className="flex-1 space-y-4">
            <label htmlFor=""  className="text-xl font-medium"  >Select Mode</label>
            <div className="flex justify-between">
            <div>
            <input type="radio" value="Answer Online" name="mode" /> Answer Online
            </div>
       <div>
       <input type="radio" value="Print Offline" name="mode" /> Print Offline 
       </div>
            </div>
          </div>
        <div className="flex flex-wrap gap-8">
          <div className="flex-1 space-y-4">
            <label htmlFor=""  className="text-xl font-medium">Question Type</label>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <button className="text-[#083743] bg-[#F0FCFF] font-medium hover:scale-95 h-[40px] w-[100px] px-2 text-lg rounded-lg duration-300 delay-200">
                  Objective
                </button>
                {/* <button className="text-[#F0FCFF] bg-[#083743] font-bold border-solid border-2 hover:scale-95  w-[150px] p-4 text-xl rounded-lg duration-300 delay-200">Objective</button> */}
                <input
                  type="number"
                  max="30"
                  min="1"
                  placeholder="Max 30"
                  className="outline-none text-[#083743] bg-[#F0FCFF] font-regular  text-center h-[40px] w-[100px] p-2 text-lg rounded-lg duration-300 delay-200"
                />
              </div>
              <div className="flex gap-2">
                <button className="text-[#083743] bg-[#F0FCFF] font-medium hover:scale-95  h-[40px] w-[100px] px-2 text-lg rounded-lg duration-300 delay-200">
                  Objective
                </button>
                {/* <button className="text-[#F0FCFF] bg-[#083743] font-bold border-solid border-2 hover:scale-95  w-[150px] p-4 text-xl rounded-lg duration-300 delay-200">Objective</button> */}
                <input
                  type="number"
                  max="30"
                  min="1"
                  placeholder="Max 30"
                  className="outline-none text-[#083743] bg-[#F0FCFF] font-regular  text-center h-[40px] w-[100px] p-2 text-lg rounded-lg duration-300 delay-200"
                />
              </div>
              <div className="flex gap-2">
                <button className="text-[#083743] bg-[#F0FCFF] font-medium hover:scale-95  h-[40px] w-[100px] px-2 text-lg rounded-lg duration-300 delay-200">
                  Objective
                </button>
                {/* <button className="text-[#F0FCFF] bg-[#083743] font-bold border-solid border-2 hover:scale-95  w-[150px] p-4 text-xl rounded-lg duration-300 delay-200">Objective</button> */}
                <input
                  type="number"
                  max="30"
                  min="1"
                  placeholder="Max 30"
                  className="outline-none text-[#083743] bg-[#F0FCFF] font-regular  text-center h-[40px] w-[100px] p-2 text-lg rounded-lg duration-300 delay-200"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <label htmlFor=""  className="text-xl font-medium">Difficulty Level</label>
            <div>
              <Selector DropDownList={pop} callback={getDropDownValue} />
            </div>
          </div>
         
        </div>
      </div>
      </div>
    </div>
  );
};

export default GenerateQuestion;
