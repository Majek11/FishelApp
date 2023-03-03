import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emptyPage from "../../assets/Empty_page.svg";

const Objectives = ({
  allQuestions,
  checked,
  newGenerationData,
  submit,
  callback,
}) => {
  const scoringSheet = JSON.parse(localStorage.getItem("scoringSheet")); 
  let  scores = JSON.parse(localStorage.getItem("scoresPerQuestionType"));
  const [recordAnswer, setRecordAnswer] = useState(scoringSheet.objective);
  const [TotalScore, setTotalScore] = useState(scores.objective);
  let alphabets = ["A", "B", "C", "D", "E"];
  
  
  const scoreTest = (userAnswer) => {
    let sumScore = 0;
    for (let i = 0; i < allQuestions.length; i++) {
      if (allQuestions[i].question_answers[0] === userAnswer[i]) {
        sumScore = sumScore + 10;
      }
    }
    localStorage.setItem("scoresPerQuestionType", JSON.stringify( {
      ...scores,
      objective:sumScore,
    }));
    
    scores = JSON.parse(localStorage.getItem("scoresPerQuestionType"));
    setTotalScore(scores.objective);
    callback(sumScore, "objective")
  };
  
  if (allQuestions.length === 0) {
    return (
      <div className=" h-[75vh] bg-[#484F51]  rounded-lg p-8 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-2xl font-bold">
          No Subjective Questions Generated
        </h1>
        <img src={emptyPage} alt="not Subjectives found" width={300} />
        <Link
          to="/generate-mode"
          className="bg-[#8BE3F9] text-[#353C3E] px-8 py-4 rounded-lg flex text-lg font-semibold justify-center items-center gap-4"
        >
          Back to Generate Question
        </Link>
      </div>
    );
  }

  return (
    <>
      {newGenerationData.generation_mode !== "Print Offline" ? (
        <div className="flex flex-col gap-8 px-2 relative">
          {submit ? (
            <div className=" sticky top-0 bg-[#353C3E] py-2 border-dashed border-y-2 border-gray-600">
              Score : {TotalScore} / {allQuestions.length} Marks{" "}
            </div>
          ) : (
            <></>
          )}
          {allQuestions.map((question, index) => (
            <div key={index} className="bg-[#484F51] rounded-lg p-8">
              <div
                className="flex flex-col gap-4 border-b-[1px]
           pb-4 border-gray-400"
              >
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
                        className={` p-2 rounded-lg cursor-pointer duration-300 ${
                          submit && option === question.question_answers[0]
                            ? "text-[#93e6fb] bg-[#8be3f925]"
                            : ""
                        } ${
                          !submit
                            ? ""
                            : option === recordAnswer[index] &&
                              question.question_answers[0] !==
                                recordAnswer[index]
                            ? " text-red-100 bg-[#b157575b]"
                            : ""
                        }`}
                      >
                        {question.question_answers[0]}
                        <input
                          type="radio"
                          disabled={submit}
                          value={option}
                          name={`Option ${index}`}
                          id={`${index}-${i}`}
                          checked={option === recordAnswer[index]}
                          onChange={(e) => {
                            let newRecordAnswer =   recordAnswer.map((rOpt, rIndex) => {
                              if (rIndex === index) {
                                return e.target.value;
                              } else {
                                return rOpt;
                              }
                            })
                            setRecordAnswer(
                              newRecordAnswer
                            );
                            scoreTest(newRecordAnswer)
                            localStorage.setItem("scoringSheet", JSON.stringify({
                              ...scoringSheet,
                              objective:newRecordAnswer,
                            }))
                          }}
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
      ) : (
        <div className="flex flex-col gap-8 px-2 relative">
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
      )}
    </>
  );
};

export default Objectives;
