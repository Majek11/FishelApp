import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import BarLoader from "react-spinners/BarLoader";
import SettingsDetails from '../components/SettingsDetails';
import{BiDownload} from 'react-icons/bi'

const QuestionsPage = () => {
    const getQuestionUrl = "https://script.google.com/macros/s/AKfycbwUzlieBl9Uan5DnO7knSfwEbZjlIHf9SuGSpRGTt9O0fLR4V-FPZ0D3-qxWhjFoYTl/exec"

    const getPDFQuestionUrl = "https://script.google.com/macros/s/AKfycbybVmFn0vbMI2-5CqCQYjcV_U-Tmi63fMy6YJOM6CyovXMlMqve6ejHz5vKSOKJHkh2/exec"

    const [allQuestions,setAllQuestion] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [isPDFStarted,setIsPDFStarted] = useState(false)
    const [pdfUrls, setPDFUrls] = useState({})
    
    async function fetchAllQuestions() {  
      const response = await fetch(getQuestionUrl);
      const data = await response.json();
      setAllQuestion(data[0].data)
      setIsLoading(true)
    }

    async function fetchPdfQuestionsLinks() {  
      setIsPDFStarted(true)
      const response = await fetch(getPDFQuestionUrl);
      const data = await response.json();
      setPDFUrls(data[0].data)
      setIsPDFStarted(false)
      

    }
    
    


    // Fetch question data
    useEffect(() => {
      fetchAllQuestions()
      }, []);

    let newGenerationData = {
        topics: [1,2,3,4,5],
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
    {!isLoading ? (
      <div className="h-screen bg-[#353C3E] text-[#8BE3F9] text-xl flex flex-col justify-center items-center gap-8 duration-300">
        <BarLoader color="#8BE3F9" size={15} />
        <p>Loading...</p>
      </div>
    ) : (
        <div className=' min-h-screen flex flex-col gap-8 bg-[#353C3E] py-32 px-8  '>
          
          <h1 className='text-[#E3F1F4] text-3xl font-bold'><Link to="/generate-mode" className='opacity-50 text-xl font-normal hover:opacity-80 duration-300 '>.../Generate Questions/ </Link>Questions</h1>
          <div className='grid grid-cols-[300px_3fr] gap-8'><aside className='flex flex-col gap-8'>

            <button onClick={fetchPdfQuestionsLinks} className='bg-[#8BE3F9] px-8 py-4 rounded-lg flex text-lg font-semibold justify-center items-center gap-4'>Get Questions As PDF <BiDownload size={24}/></button>
           
            {
            isPDFStarted?(
              <div className="fixed top-0 left-0 w-screen h-full bg-[#000000b3] text-[#8BE3F9] text-xl flex justify-center items-center">
          <div className="  flex flex-col justify-center items-center gap-8 duration-300 text-center">
        <BarLoader color="#8BE3F9" size={15} />
        <p>Generating the PDF files...</p>
      </div>
          </div>
            ):(
              pdfUrls.printQuestionUrl?(

                <div className=" flex flex-col bg-[#484F51] text-[#8BE3F9]  rounded-lg">
                <a href={pdfUrls.printQuestionUrl} target="_blank" className='border-solid border-b-2 p-4 hover:bg-[#8BE3F9] hover:text-[#353C3E] rounded-t-lg'>Question only PDF</a>
                <a href={pdfUrls.printQuestionsAnswerUrl} target="_blank" className='rounded-b-lg p-4 hover:bg-[#8BE3F9] hover:text-[#353C3E] '>Question and Answer PDF</a>
                
          </div>
                ):(<></>)
            )
          }
           <SettingsDetails generationSetupData ={newGenerationData}/>
          </aside>
            <main>
              <div>hi</div>
              <div>
              {
              allQuestions.map((question,index) => 
                (<div key={index}>
                  
                  {question.question_text}
                </div>
              )
                
              )
            }
              </div>
            </main>
          </div>
        </div>

        // <div className="min-h-screen bg-[#353C3E] text-xl flex flex-col justify-center items-center gap-8 duration-300">
        //    hi {
        //       allQuestions.map((question,index) => 
        //         (<div key={index}>
                  
        //           {question.question_text}
        //         </div>
        //       )
                
        //       )
        //     }
        // </div>
    )}
    </>
  )
}

export default QuestionsPage