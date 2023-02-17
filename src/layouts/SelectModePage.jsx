import React from "react";
import { Link } from "react-router-dom";

const SelectModePage = () => {
  return (
    <div className="min-h-screen lg:h-screen  bg-[url('/public/images/MainImage.png')] bg-cover bg-center bg-no-repeat text-[#E3F1F4]">
      <div className=" w-full min-h-full bg-[#353c3e4b]  flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-col gap-4 py-20 px-4 lg:gap-8 lg:p-8">
          <div className=" space-y-1">
            <h1 className="text-2xl lg:text-3xl">What mode are you using?</h1>
            <div className="bg-[#E3F1F4] h-[1px] lg:h-[2px] w-full"></div>
          </div>
          <div className="flex flex-wrap flex-col lg:flex-row gap-4 lg:justify-between lg:gap-8">
            <Link to="/create-mode">
              <div className=" lg:w-[320px]  rounded-lg lg:rounded lg:h-[225px] bg-[url('/src/assets/create_mode.png')] bg-cover bg-no-repeat bg-center hover:border-solid hover:border-2  hover:border-[#e3f1f4] delay-300">
                <div className=" h-[150px] lg:h-full lg:w-full bg-[#353c3ea4] rounded-lg cursor-pointer p-6 hover:bg-[#353c3ee6] duration-300 delay-300">
                  <div className=" space-y-2">
                    <h1 className="font-bold text-2xl">Create Mode</h1>
                    <p>Add your own questions to our database.</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/generate-mode">
              <div className=" lg:w-[320px]  rounded-lg lg:rounded lg:h-[225px] bg-[url('/src/assets/print_mode.png')] bg-cover bg-no-repeat bg-center hover:border-solid hover:border-2  hover:border-[#e3f1f4] delay-300">
                <div className=" h-[150px] lg:h-full lg:w-full bg-[#353c3ea4] rounded-lg cursor-pointer p-6 hover:bg-[#353c3ee6] duration-300 delay-300">
                  <div className=" space-y-2">
                    <h1 className="font-bold text-2xl">Generate Mode</h1>
                    <p>Generate, download and print exam or test questions.</p>
                  </div>
                </div>
              </div>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectModePage;
