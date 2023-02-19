import React, { useState,useEffect } from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

const QuestionsPage = () => {
    const getQuestionUrl = "https://script.google.com/macros/s/AKfycbwUzlieBl9Uan5DnO7knSfwEbZjlIHf9SuGSpRGTt9O0fLR4V-FPZ0D3-qxWhjFoYTl/exec"
    const [allQuestions,setAllQuestion] = useState([])
    // Fetch question data
    useEffect(() => {
        fetch(getQuestionUrl)
          .then((res) => res.json())
          .then((d) => setAllQuestion(d[0].data));
      }, []);

      console.log(allQuestions)

    let newGenerationData = {
        topics: [],
        subject: "English",
        difficulty_level: "Easy",
        generation_mode: "Answer Online",
        question_type: {
          objective: "10",
          theory: "0",
          subjective: "0",
        }
    }
  return (
    <>
    {false ? (
      <div className="h-screen bg-[#353C3E] text-[#8BE3F9] text-xl flex flex-col justify-center items-center gap-8 duration-300">
        <PropagateLoader color="#8BE3F9" size={15} />
        <p>Loading...</p>
      </div>
    ) : (
        <div className="h-screen bg-[#353C3E] text-[#8BE3F9] text-xl flex flex-col justify-center items-center gap-8 duration-300">
            Hi
        </div>
    )}
    </>
  )
}

export default QuestionsPage