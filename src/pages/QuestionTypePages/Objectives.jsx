import React from "react";

const Objectives = ({ allQuestions, checked,newGenerationData }) => {
  let alphabets = ["A", "B", "C", "D", "E"];
  console.log(allQuestions)
  return (
    <>
      {
        newGenerationData.generation_mode !== "Print Offline"?(
          <div className="flex flex-col gap-8 py-8 px-2">
      {allQuestions.map((question, index) => (
        <div key={index} className="bg-[#484F51] rounded-lg p-8">
          <div className="flex flex-col gap-4 border-b-[1px]
           pb-4 border-gray-400">
            <h1 className="text-2xl font-bold">Question {index + 1}</h1>
            <div className="flex justify-between">
              <p className="px-2 py-1 rounded-full text-[#93e6fb] bg-[#8be3f925]">
                {question.topic}
              </p>
              <p className="text-[#8BE3F9]">
                Author: {question.question_author}
              </p>
            </div>
          </div>
          <div className="flex flex-col py-8 gap-8">
            <div>{question.question_text}</div>
            <div className="flex flex-col gap-2">
              {question.question_options.map((option, i) => (
                <div key={i}>
                  
                    <div
                      className={` p-2 rounded-lg cursor-pointer duration-300 `}
                    >
                          <input
                        type="radio"
                        value="{option[0]}"
                        name="level"
                        id={`${index}-${i}`}
                        // checked={false}
                      
                      />
                      <label
                        htmlFor={`${index}-${i}`}
                        className="pl-2 cursor-pointer  lg:text-lg"
                      >
                        {option}
                      </label>
                    </div>
                
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
        ):(
          <div className="flex flex-col gap-8 py-8 px-2">
      {allQuestions.map((question, index) => (
        <div key={index} className="bg-[#484F51] rounded-lg p-8">
          <div className="flex flex-col gap-4 border-b-[1px] pb-4 border-gray-400">
            <h1 className="text-2xl font-bold">Question {index + 1}</h1>
            <div className="flex justify-between">
              <p className="px-2 py-1 rounded-full text-[#93e6fb] bg-[#8be3f925]">
                {question.topic}
              </p>
              <p className="text-[#8BE3F9]">
                Author: {question.question_author}
              </p>
            </div>
          </div>
          <div className="flex flex-col py-8 gap-8">
            <div>{question.question_text}</div>
            <div className="flex flex-col gap-2">
              {question.question_options.map((option, i) => (
                <div key={i}>
                  {checked ? (
                    <div
                      className={` p-2 rounded-lg cursor-pointer duration-300 ${
                        option === question.question_answers[0]
                          ? "text-[#93e6fb] bg-[#8be3f925]"
                          : ""
                      }`}
                    >
                      {alphabets[i]}. {option}
                    </div>
                  ) : (
                    <div className="p-2 rounded-lg cursor-pointer duration-300">
                      {alphabets[i]}. {option}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
        )
      }
    </>
  );
};

export default Objectives;
