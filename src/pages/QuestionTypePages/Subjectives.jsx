import React, { useState } from "react";
import { Link } from "react-router-dom";
import emptyPage from "../../assets/Empty_page.svg";

const Subjectives = ({
  allQuestions,
  checked,
  newGenerationData,
  submit,
  callback,
}) => {
  const scoringSheet = JSON.parse(localStorage.getItem("scoringSheet"));
  let scores = JSON.parse(localStorage.getItem("scoresPerQuestionType"));
  const [recordAnswer, setRecordAnswer] = useState(scoringSheet.subjective);
  const [TotalScore, setTotalScore] = useState(scores.subjective);

  const scoreTest = (userAnswer) => {
    let sumScore = 0;
    for (let i = 0; i < allQuestions.length; i++) {
      if (allQuestions[i].question_answers[0] === userAnswer[i]) {
        sumScore = sumScore + 10;
      }
    }
    localStorage.setItem(
      "scoresPerQuestionType",
      JSON.stringify({
        ...scores,
        subjective: sumScore,
      })
    );
    scores = JSON.parse(localStorage.getItem("scoresPerQuestionType"));
    callback(sumScore, "subjective");
    setTotalScore(scores.subjective);
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
            <div key={index} className="bg-[#484F51] rounded-lg p-8 ">
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
              <div className="flex flex-col py-8 gap-4">
                <div>{question.question_text}</div>
                <div className="flex flex-col gap-2">
                  <div>
                    {question.question_answers[0]}
                    <input
                      type="text"
                      disabled={submit}
                      value={recordAnswer[index]}
                      className={` p-2 bg-transparent outline-none border-b-2 border-solid ${
                        submit &&
                        question.question_answers[0].toLowerCase() ===
                          recordAnswer[index].toLowerCase()
                          ? "text-[#93e6fb] bg-[#8be3f928]"
                          : ""
                      } ${
                        submit &&
                        question.question_answers[0].toLowerCase() !==
                          recordAnswer[index].toLowerCase()
                          ? " text-red-300 "
                          : ""
                      } `}
                      placeholder="Your Answer"
                      onChange={(e) => {
                        let newRecordAnswer = recordAnswer.map(
                          (rValue, rIndex) => {
                            if (rIndex === index) {
                              return e.target.value;
                            } else {
                              return rValue;
                            }
                          }
                        );
                        setRecordAnswer(newRecordAnswer);
                        scoreTest(newRecordAnswer);
                        localStorage.setItem(
                          "scoringSheet",
                          JSON.stringify({
                            ...scoringSheet,
                            subjective: newRecordAnswer,
                          })
                        );
                      }}
                    />
                  </div>
                  {submit ? (
                    <div className="text-[#93e6fb] bg-[#8be3f928] rounded-lg p-2">
                      {question.question_answers[0]}
                    </div>
                  ) : (
                    <></>
                  )}
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
                    {question.topic}
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
                    <input
                      type="text"
                      value={question.question_answers[0]}
                      className={` p-2 outline-none border-b-2 border-solid border-[#93e6fb] text-[#93e6fb] bg-[#8be3f925]`}
                      placeholder="Your Answer"
                    />
                  ) : (
                    <div>
                      <input
                        type="text"
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
