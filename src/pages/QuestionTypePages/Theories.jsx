import React, { useState } from "react";
import { Link } from "react-router-dom";
import emptyPage from "../../assets/Empty_page.svg";
import { createAiArray } from "../../utils";

const Theories = ({
  allQuestions,
  checked,
  newGenerationData,
  submit,
  callback,
}) => {
  const ScoreWithAIUrl =
  "https://script.google.com/macros/s/AKfycbwmXPtWyRbsPV16p7cgYjMSGkD6OdOv8ae9d_o2SF4VD0VLtTiWk9dJ3tjb0VmNKYzBQw/exec"
  // "https://script.google.com/macros/s/AKfycby8UB5rrvdZFsbvoIz3wSrtpZdNACpOS-GyMcgsa3Ofv7jE5QEcCx1z47TAVjQ1wROklg/exec"
    // "https://script.google.com/macros/s/AKfycbx6CvCzUnmrJ0U89edKvCDwD7Ytcu-3HGCBp5T0JN46nMtSikvc9L2Yss86KqOWiXcT6w/exec";
  const scoringSheet = JSON.parse(localStorage.getItem("scoringSheet"));
  let scores = JSON.parse(localStorage.getItem("scoresPerQuestionType"));
  let aiResults = JSON.parse(localStorage.getItem("aiResults"));
  let AIScores = JSON.parse(localStorage.getItem("allAIScores"));
  const [userResponses, setUserResponses] = useState(scoringSheet.theory);
  const [userResults, setUserResults] = useState(aiResults);
  const [totalAIScore, setTotalAIScore] = useState(
    AIScores.reduce((a, b) => a + b, 0)
  );
  const [allAIScores, setAllAIScores] = useState(AIScores);

  const handleMessageChange = (event, i) => {
    let newUserResponses = userResponses.map((res, index) => {
      if (i === index) {
        return event.target.value;
      } else {
        return res;
      }
    });
    localStorage.setItem(
      "scoringSheet",
      JSON.stringify({
        ...scoringSheet,
        theory: newUserResponses,
      })
    );
    setUserResponses(newUserResponses);
  };

  async function fetchResult(message, index) {
    console.log("Started");
    const requestOptions = {
      method: "POST",
      cache: "no-cache",
      redirect: "follow",
      body: JSON.stringify({
        markingGuild: allQuestions[index].question_answers[0].replace(
          /\\n/g,
          "\n"
        ),
        userResponse: message[index],
        question: allQuestions[index].question_text,
      }),
    };
    const response = await fetch(ScoreWithAIUrl, requestOptions);
    const data = await response.json();
    scoreTest(data[0].data, index);
    let newUserResults = userResults.map((userResult,i) => {
      if (index === i) {
        return data[0].data;
      } else {
        return userResult;
      }
    })
    localStorage.setItem(
      "aiResults",
      JSON.stringify(
        newUserResults
      )
    );
    setUserResults(
      newUserResults
    )
    console.log("Ended")
  }

  const scoreTest = (aiEvaluation, index) => {
    let newAllAiScore = allAIScores.map((aiScr, i) => {
      if (index === i) {
        return +getScore(aiEvaluation);
      } else {
        return +aiScr;
      }
    });

    setAllAIScores(newAllAiScore);

    localStorage.setItem(
      "allAIScores",
      JSON.stringify(
      newAllAiScore
      )
    );
    localStorage.setItem(
      "scoresPerQuestionType",
      JSON.stringify({
        ...scores,
        theory: newAllAiScore.reduce((a, b) => a + b, 0),
      })
    );
    localStorage.setItem(
      "aiResults",
      JSON.stringify({
        ...scores,
        theory: newAllAiScore.reduce((a, b) => a + b, 0),
      })
    );
    scores = JSON.parse(localStorage.getItem("scoresPerQuestionType"));
    callback(
      newAllAiScore.reduce((a, b) => a + b, 0),
      "theory"
    );

    setTotalAIScore(scores.theory);
  };
  console.log(totalAIScore);

  function getScore(data) {
    return data.match(/\d+\/\d+/g)[0].split("/")[0];
  }

  if (allQuestions.length === 0) {
    return (
      <div className=" h-[75vh] bg-[#484F51]  rounded-lg p-8 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-2xl font-bold">No Theory Questions Generated</h1>
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
              Score : {totalAIScore} / {allQuestions.length * 10} Marks
            </div>
          ) : (
            <></>
          )}
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
              <div className="flex flex-col py-8 gap-4">
                <div>{question.question_text}</div>
                <div className="flex flex-col justify-start gap-2">
                  {/* {console.log(userResponses)} */}
                  <textarea
                    rows="20"
                    cols="50"
                    id={index}
                    name={index}
                    value={userResponses[index]}
                    disabled={submit}
                    onChange={(e) => handleMessageChange(e, index)}
                    className="p-2 bg-transparent rounded-lg h-48 outline-none border-2 border-gray-500 border-solid  w-full "
                  />
                </div>
                <div>
                  {submit ? (
                    <div className=" border-2 border-gray-500 border-solid  rounded-lg flex flex-col gap-4 p-4 text-[#93e6fb] ">
                      <div className="flex flex-col gap-4 p-4 bg-[#8be3f925] rounded-lg ">
                        <h1>AI Generated Evaluation</h1>
                        <p>{userResults[index]}</p>
                      </div>
                      <div className="flex flex-col gap-4 p-4 bg-[#8be3f925] rounded-lg ">
                        <h1>Teacher's Marking Guide</h1>
                        <div className=" space-y-2">
                          {question.question_answers[0]
                            .split(/\\n/g)
                            .map((ans, i) => (
                              <p key={i}>{ans}</p>
                            ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      disabled={!userResponses}
                      className="bg-[#8BE3F9] px-4 py-2 rounded-lg text-[#353C3E]"
                      onClick={(e) => fetchResult(userResponses[index], index)}
                    >
                      Save
                    </button>
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
                    <textarea
                      rows="20"
                      cols="50"
                      className="p-2 outline-none border-2 rounded border-solid h-48 w-full  border-[#93e6fb] text-[#93e6fb] bg-[#8be3f925]"
                      disabled="true"
                    >
                      {question.question_answers[0].replace(/\\n/g, "\n")}
                    </textarea>
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
          ))}
        </div>
      )}
    </>
  );
};

export default Theories;
