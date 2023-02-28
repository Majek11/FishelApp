import React from "react";

const Subjectives = ({ allQuestions, checked, newGenerationData }) => {
  let alphabets = ["A", "B", "C", "D", "E"];
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
                  <div>
                    <input
                      type="text"
                      // value=""
                      className={` p-2 bg-transparent outline-none border-b-2 border-solid `}
                      placeholder="Your Answer"
                    />
                  </div>
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
                      {checked ? (<>
                  {question.question_options.map((option, i) => (
                    <div key={i}>
                    {
                      option[1] === "true"?(
                        <input
                        type="text"
                        value={option[0]}
                        className={` p-2 outline-none border-b-2 border-solid border-[#93e6fb] text-[#93e6fb] bg-[#8be3f925]`}
                        placeholder="Your Answer"
                        
                        />
                        ):("")
                        
                      }
                    </div>
                    ))}
                    </>
                      ) : (
                        <div>
                          <input
                            type="text"
                            disabled="true"
                            className={` p-2 bg-transparent outline-none border-b-2 border-gray-500 border-solid `}
                            placeholder="Your Answer"
                          />
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

export default Subjectives;
