import React from "react";

const Theories = ({ allQuestions, checked, newGenerationData }) => {
  return (
    <>
      {newGenerationData.generation_mode !== "Print Offline" ? (
        <div className="flex flex-col gap-8 py-8 px-2">
          {allQuestions.map((question, index) => (
            <div key={index} className="bg-[#484F51] rounded-lg p-8">
              <div className="flex flex-col gap-4 border-b-[1px] pb-4 border-gray-400">
                <h1 className="text-2xl font-bold">Question {index + 1}</h1>
                <div className="flex justify-between">
                  <p className="px-2 py-1 rounded-full text-[#93e6fb] bg-[#8be3f925]">
                    {question.question_topics}
                  </p>
                  <p className="text-[#8BE3F9]">
                    Author: {question.question_author}
                  </p>
                </div>
              </div>
              <div className="flex flex-col py-8 gap-4">
                <div>{question.question_text}</div>
                <div className="flex flex-col gap-2">
            
                      <textarea
                        rows="20"
                        cols="50"
                        className="p-2 bg-transparent h-48 outline-none border-2 border-gray-500 border-solid  w-full "
                        
                      ></textarea>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-8 py-8 px-2">
          {allQuestions.map((question, index) => (
            <div key={index} className="bg-[#484F51] rounded-lg p-8">
              <div className="flex flex-col gap-4 border-b-[1px] pb-4 border-gray-400">
                <h1 className="text-2xl font-bold">Question {index + 1}</h1>
                <div className="flex justify-between">
                  <p className="px-2 py-1 rounded-full text-[#93e6fb] bg-[#8be3f925]">
                    {question.question_topics}
                  </p>
                  <p className="text-[#8BE3F9]">
                    Author: {question.question_author}
                  </p>
                </div>
              </div>
              <div className="flex flex-col py-8 gap-2">
                <div>{question.question_text}</div>
                <div className="flex flex-col">
                  {checked ? (
                    <>
                      {question.question_options.map((option, i) =>
                        option[1] === "true" ? (
                          <textarea
                            rows="20"
                            cols="50"
                            className="p-2 outline-none border-2 rounded border-solid h-48 w-full  border-[#93e6fb] text-[#93e6fb] bg-[#8be3f925]"
                            disabled="true"
                            key={i}
                          >
                            {option[0]}
                          </textarea>
                        ) : (
                          ""
                        )
                      )}
                    </>
                  ) : (
                    <div>
                      <textarea
                        rows="20"
                        cols="50"
                        className="p-2 bg-transparent h-48 outline-none border-2 border-gray-500 border-solid  w-full "
                        
                      ></textarea>
                    </div>
                  )}
                </div>
              </div>
            </div>
            // </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Theories;
