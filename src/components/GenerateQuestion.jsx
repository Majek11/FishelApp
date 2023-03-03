import React, { useEffect, useState } from "react";
import Selector from "./Selector";
import MultipleTopics from "./MultipleTopics";
import BarLoader from "react-spinners/BarLoader";
import { Link } from "react-router-dom";
import { questionGenerationValidation,createAiArray } from "../utils";

const GenerateQuestion = () => {
  let generationSetup = {
    topics: [],
    subject: "",
    difficulty_level: "",
    generation_mode: "",
    question_type: {
      objective: 0,
      theory: 0,
      subjective: 0,
    },
  };
  const getSubjectsUrl =
    "https://script.google.com/macros/s/AKfycbxR05dMjpFUNol3WbohK5ZCuoQGMizkrhPzhcP9mpnZjy59PF2lGJWuFFGxqtMxMA3UlQ/exec";

  const [allSubjects, setAllSubjects] = useState([]);
  const [subjectTopics, setSubjectTopics] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [validationResponse, setValidationResponse] = useState("");
  const [generationData, setGenerationData] = useState(generationSetup);
  const [showError, setShowError] = useState(false)

  const subjectName = allSubjects;

  useEffect(() => {
    fetch(getSubjectsUrl)
      .then((res) => res.json())
      .then((d) => setAllSubjects(d[0].data));
  }, []);

  const handleOnClickGenerate = () => {
    const [validation, message] =
      questionGenerationValidation(generationData);
      localStorage.setItem("SetupDetails", JSON.stringify(generationData));
      localStorage.setItem("aiResults", JSON.stringify(createAiArray(generationData.question_type.theory,"")));
      localStorage.setItem("allAIScores", JSON.stringify(createAiArray(generationData.question_type.theory,0)));
      localStorage.setItem("scoresPerQuestionType", JSON.stringify( {
        objective: 0,
        theory: 0,
        subjective: 0,
      }));
    return [validation, message]
  };

  const getDropDownValue = (selectedValue) => {
    setGenerationData({ ...generationData, subject: selectedValue });
    for (let i = 0; i < allSubjects.length; i++) {
      if (selectedValue === allSubjects[i].subject_name) {
        setSubjectTopics(allSubjects[i].subject_topics);
      }
    }
  };

  const getSelectedTopics = (selectedTopics) => {
    setGenerationData({ ...generationData, topics: selectedTopics });
  };

  useEffect(() => {
    setIsValid(handleOnClickGenerate()[0]);
    setValidationResponse(handleOnClickGenerate()[1])
  }, [generationData]);

  return (
    <>
      {allSubjects.length === 0 ? (
        <div className="h-screen bg-[#353C3E] text-[#8BE3F9] text-xl flex flex-col justify-center items-center gap-8 duration-300">
          <BarLoader color="#8BE3F9" size={15} />
          <p>Loading...</p>
        </div>
      ) : (
        <div className=" min-h-screen bg-[#353C3E] text-[#E3F1F4] flex flex-col justify-start items-center py-32 px-4 duration-300">
          {!showError? (
            <></>
          ) : (
            <div
              className={`fixed font-bold text-center top-0 z-30  ${
                isValid ? "bg-green-400 text-[#353C3E]" : "bg-red-400"
              } p-2 w-full duration-500 `}
            >
              {validationResponse}
            </div>
          )}
          <div className="flex flex-col gap-8">
            <h1 className="text-xl lg:text-3xl font-bold">
              <Link
                to="/select-mode"
                className=" opacity-50 text-xl font-normal hover:opacity-80 duration-300"
              >
                What mode are.../
              </Link>{" "}
              Generate Questions
            </h1>
            <div className="flex flex-col space-y-8 accent-[#8BE3F9] gap-8">
              <div className="space-y-4">
                <label htmlFor="" className="text-lg lg:text-xl font-medium ">
                  Subject
                </label>
                <div>
                  <Selector
                    DropDownList={subjectName}
                    callback={getDropDownValue}
                  />
                </div>
              </div>
              <div className="space-y-4 md:w-[500px] lg:w-[600px]">
                <label htmlFor="" className="text-lg lg:text-xl font-medium">
                  Topics
                </label>
                <MultipleTopics
                  subjectTopics={subjectTopics}
                  callback={getSelectedTopics}
                />
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-8">
                <div className="flex-1 space-y-4">
                  <label htmlFor="" className="text-lg lg:text-xl font-medium">
                    Difficulty Level
                  </label>
                  <div className="flex flex-col gap-4">
                    <div>
                      <input
                        type="radio"
                        value="Easy"
                        name="level"
                        id="easy"
                        checked={generationData.difficulty_level === "Easy"}
                        onChange={(e) => {
                          setGenerationData({
                            ...generationData,
                            difficulty_level: e.target.value,
                          });
                        }}
                      />
                      <label
                        htmlFor="easy"
                        className="pl-2 cursor-pointer  lg:text-lg"
                      >
                        Easy
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="Medium"
                        name="level"
                        id="medium"
                        checked={generationData.difficulty_level === "Medium"}
                        onChange={(e) => {
                          setGenerationData({
                            ...generationData,
                            difficulty_level: e.target.value,
                          });
                        }}
                      />
                      <label
                        htmlFor="medium"
                        className="pl-2 cursor-pointer  lg:text-lg"
                      >
                        Medium
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="Hard"
                        name="level"
                        id="hard"
                        checked={generationData.difficulty_level === "Hard"}
                        onChange={(e) => {
                          setGenerationData({
                            ...generationData,
                            difficulty_level: e.target.value,
                          });
                        }}
                      />
                      <label
                        htmlFor="hard"
                        className="pl-2 cursor-pointer text-lg lg:text-lg"
                      >
                        Hard
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <label htmlFor="" className="text-lg lg:text-xl font-medium">
                    Select Mode
                  </label>
                  <div className="flex flex-col gap-4">
                    <div>
                      <input
                        type="radio"
                        value="Answer Online"
                        name="mode"
                        id="Online"
                        checked={
                          generationData.generation_mode === "Answer Online"
                        }
                        onChange={(e) => {
                          setGenerationData({
                            ...generationData,
                            generation_mode: e.target.value,
                          });
                        }}
                      />
                      <label
                        htmlFor="Online"
                        className="pl-1 lg:pl-2 cursor-pointer lg:text-lg"
                      >
                        Answer Online
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="Print Offline"
                        name="mode"
                        id="Offline"
                        checked={
                          generationData.generation_mode === "Print Offline"
                        }
                        onChange={(e) => {
                          setGenerationData({
                            ...generationData,
                            generation_mode: e.target.value,
                          });
                        }}
                      />
                      <label
                        htmlFor="Offline"
                        className=" pl-1 lg:pl-2 cursor-pointer lg:text-lg"
                      >
                        Print Offline
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <label htmlFor="" className="text-lg lg:text-xl font-medium">
                  Question Type
                </label>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2">
                    <div className="flex items-center text-[#F0FCFF] font-medium  h-[40px] w-[100px] lg:text-lg">
                      Objective
                    </div>

                    <input
                      type="number"
                      value={generationData.question_type.objective}
                      onChange={(e) => {
                        if (e.target.value <= 30 && e.target.value >= 0) {
                          setGenerationData({
                            ...generationData,
                            question_type: {...generationData.question_type, objective:e.target.value},
                          });
                        }
                      }}
                      placeholder="Max 30"
                      className="outline-none bg-transparent font-regular h-[40px] w-[100px] p-2 lg:text-lg border-b-[1px] lg:border-b-2  border-solid border-b-[#F0FCFF]"
                    />
                  </div>
                 
                  <div className="flex gap-2">
                    <div className="flex items-center text-[#F0FCFF] font-medium  h-[40px] w-[100px] lg:text-lg">
                    Subjective
                    </div>

                    <input
                      type="number"
                      value={generationData.question_type.subjective}
                      onChange={(e) => {
                        if (e.target.value <= 10 && e.target.value >= 0) {
                          setGenerationData({
                            ...generationData,
                            question_type: {...generationData.question_type, subjective:e.target.value},
                          });
                        }
                      }}
                      placeholder="Max 10"
                      className="outline-none bg-transparent font-regular h-[40px] w-[100px] p-2 lg:text-lg border-b-[1px]  lg:border-b-2  border-solid border-b-[#F0FCFF]"
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center text-[#F0FCFF] font-medium  h-[40px] w-[100px] lg:text-lg">
                      Theory
                    </div>

                    <input
                      type="number"
                      value={generationData.question_type.theory}
                      onChange={(e) => {
                        if (e.target.value <= 3 && e.target.value >= 0) {
                          setGenerationData({
                            ...generationData,
                            question_type: {...generationData.question_type, theory:e.target.value},
                          });
                        }
                      }}
                      placeholder="Max 3"
                      className="outline-none bg-transparent font-regular h-[40px] w-[100px] p-2 lg:text-lg border-b-[1px] lg:border-b-2  border-solid border-b-[#F0FCFF]"
                    />
                  </div>
                </div>
              </div>
              <button onClick={(e) => setShowError(true)} className="mt-8 ">
                {isValid ? (
                  <Link
                    to="/generate-mode/questions/objective"
                    className="py-4 px-8 bg-[#8BE3F9] text-[#353C3E] lg:text-xl lg:font-bold rounded-lg hover:scale-105 duration-300 delay-200"
                  >
                    Generate
                  </Link>
                ) : (
                  <Link
                    to="/generate-mode"
                    className="py-4 px-8 bg-[#8BE3F9] text-[#353C3E] lg:text-xl lg:font-bold rounded-lg hover:scale-105 duration-300 delay-200"
                  >
                    Validate Form
                  </Link>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GenerateQuestion;
