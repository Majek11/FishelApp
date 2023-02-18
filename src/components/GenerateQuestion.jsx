import React, { useEffect, useState } from "react";
import Selector from "./Selector";
import MultipleTopics from "./MultipleTopics";
import PropagateLoader from "react-spinners/PropagateLoader";

const GenerateQuestion = () => {
  const getSubjectsUrl =
    "https://script.google.com/macros/s/AKfycbzkd8EcJ4LNSIqXZMs0rbvF7jaleGAE2DgZv9sXTgRGBGtrXx7L0ep2n7MqVwEJQ3KMBg/exec";

  const [allSubjects, setAllSubjects] = useState([]);
  const [subjectTopics, setSubjectTopics] = useState([]);
  const [generationData, setGenerationData] = useState({});
  const [subject, setSubject] = useState("");
  const [topics, setTopics] = useState([]);
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [objective, setObjective] = useState(0);
  const [theory, setTheory] = useState(0);
  const [subjective, setSubjective] = useState(0);
  const [generateMode, setGenerateMode] = useState("");

  const subjectName = allSubjects;

  useEffect(() => {
    fetch(getSubjectsUrl)
      .then((res) => res.json())
      .then((d) => setAllSubjects(d[0].data));
  }, []);

  const handleOnClickGenerate = (e) => {
    let newGenerationData = {
      topics: topics,
      subject: subject,
      difficulty_level: difficultyLevel,
      generation_mode: generateMode,
      question_type: {
        objective: objective,
        theory: theory,
        subjective: subjective,
      },
    };
    setGenerationData(newGenerationData);
  };
  console.log(generationData);

  const getDropDownValue = (selectedValue) => {
    setSubject(selectedValue);
    for (let i = 0; i < allSubjects.length; i++) {
      if (selectedValue === allSubjects[i].subject_name) {
        setSubjectTopics(allSubjects[i].subject_topics);
      }
    }
  };

  const getSelectedTopics = (selectedTopics) => {
    setTopics(selectedTopics);
  };

  return (
    <>
      {allSubjects.length === 0 ? (
        <div className="h-screen bg-[#353C3E] text-[#8BE3F9] text-xl flex flex-col justify-center items-center gap-8 duration-300">
          <PropagateLoader color="#8BE3F9" size={15} />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="min-h-screen bg-[#353C3E] text-[#E3F1F4] flex flex-col justify-start items-center py-32 px-4 duration-300">
          <div className="flex flex-col gap-8">
            <h1 className="text-xl lg:text-3xl font-bold">
              Generate Questions
            </h1>
            <div className="flex flex-col space-y-8 accent-[#8BE3F9]">
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
                        checked={difficultyLevel === "Easy"}
                        onChange={(e) => setDifficultyLevel(e.target.value)}
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
                        checked={difficultyLevel === "Medium"}
                        onChange={(e) => setDifficultyLevel(e.target.value)}
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
                        checked={difficultyLevel === "Hard"}
                        onChange={(e) => setDifficultyLevel(e.target.value)}
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
                        checked={generateMode === "Answer Online"}
                        onChange={(e) => setGenerateMode(e.target.value)}
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
                        checked={generateMode === "Print Offline"}
                        onChange={(e) => setGenerateMode(e.target.value)}
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
                      value={objective}
                      onChange={(e) => {
                        if (e.target.value <= 30 && e.target.value >= 0) {
                          setObjective(e.target.value);
                        }
                      }}
                      placeholder="Max 30"
                      className="outline-none bg-transparent font-regular h-[40px] w-[100px] p-2 lg:text-lg border-b-[1px] lg:border-b-2  border-solid border-b-[#F0FCFF]"
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center text-[#F0FCFF] font-medium  h-[40px] w-[100px] lg:text-lg">
                      Theory
                    </div>

                    <input
                      type="number"
                      value={theory}
                      onChange={(e) => {
                        if (e.target.value <= 3 && e.target.value >= 0) {
                          setTheory(e.target.value);
                        }
                      }}
                      placeholder="Max 3"
                      className="outline-none bg-transparent font-regular h-[40px] w-[100px] p-2 lg:text-lg border-b-[1px] lg:border-b-2  border-solid border-b-[#F0FCFF]"
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center text-[#F0FCFF] font-medium  h-[40px] w-[100px] lg:text-lg">
                      Subjective
                    </div>

                    <input
                      type="number"
                      value={subjective}
                      onChange={(e) => {
                        if (e.target.value <= 10 && e.target.value >= 0) {
                          setSubjective(e.target.value)
                        }
                      }}
                      placeholder="Max 10"
                      className="outline-none bg-transparent font-regular h-[40px] w-[100px] p-2 lg:text-lg border-b-[1px]  lg:border-b-2  border-solid border-b-[#F0FCFF]"
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={handleOnClickGenerate}
                className=" py-4 bg-[#8BE3F9] text-[#353C3E] lg:text-xl lg:font-bold rounded-lg hover:scale-105 duration-300 delay-200"
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GenerateQuestion;
