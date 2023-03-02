import React, { useState } from "react";
import { Link } from "react-router-dom";
import emptyPage from "../../assets/Empty_page.svg";

const Theories = ({
  allQuestions,
  checked,
  newGenerationData,
  submit,
  callback,
}) => {
  const ScoreWithAIUrl =
  "https://script.google.com/macros/s/AKfycbywoptd7HKWiHdcx9_Xco4KZGlvgbgzv0ybXnYafWINOH8U9fdpZ3aHLI08xIe0haqKHA/exec"


  const [message, setMessage] = useState("");
  const [userResult, setUserResult] = useState('')
  const [aiScore, setAiScore] = useState(0)

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  async function fetchResult() {
    console.log('starting')
    const requestOptions = {
      method: "POST",
      cache: "no-cache",
      redirect: "follow",
      body: JSON.stringify({
        markingGuild: allQuestions[0].question_answers[0].replace(/\\n/g, '\n'),
        userResponse: message,
        question: allQuestions[0].question_text,
      }),
    };
    const response = await fetch(ScoreWithAIUrl, requestOptions);
    const data = await response.json();
    setAiScore(getScore(data[0].data))
    setUserResult(data[0].data)
  }
  console.log(aiScore);

  function getScore(data){
    return data.match(/\d+\/\d+/g)[0].split('/')[0]
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
              Score : {aiScore} / {allQuestions.length*10} Marks
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
                  <textarea
                    rows="20"
                    cols="50"
                    id={index}
                    name={index}
                    value={message}
                    onChange={handleMessageChange}
                    className="p-2 bg-transparent rounded-lg h-48 outline-none border-2 border-gray-500 border-solid  w-full "
                  />
                </div>
                <div>
                  {
                    submit?(
                      <div className=" border-2 border-gray-500 border-solid  rounded-lg flex flex-col gap-4 p-4 text-[#93e6fb] ">
                        <div className="flex flex-col gap-4 p-4 bg-[#8be3f925] rounded-lg " >
                          <h1>AI Generated Evaluation</h1>
                          <p>
                          {userResult}
                          </p>
                        </div>
                        <div className="flex flex-col gap-4 p-4 bg-[#8be3f925] rounded-lg " >
                          <h1>Teacher's Marking Guide</h1>
                          <p className=" space-y-2">
                          {question.question_answers[0].split(/\\n/g).map((ans, i) => (
                            <div>
                            {ans}
                            </div>
                          ))}
                          </p>
                        </div>
                      </div>
                    ):(

                  <button
                    disabled={!message}
                    className="bg-[#8BE3F9] px-4 py-2 rounded-lg text-[#353C3E]"
                    onClick={fetchResult}
                  >
                    Save
                  </button>
                    )
                  }
                  
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
                      {question.question_answers[0].replace(/\\n/g, '\n')}
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
