import React from 'react'

const Objectives = ({allQuestions}) => {
    console.log(allQuestions)
    let alphabets = ["A","B","C","D","E"]
  return (
    <div className='flex flex-col gap-8 py-8 px-2'>
         {
              allQuestions.map((question,index) => 
                (<div key={index} className="bg-[#484F51] rounded-lg p-8"  >
                  <div className='flex flex-col gap-4 border-b-[1px] pb-4 border-gray-400'>
                    <h1 className='text-2xl font-bold'>Question {index+1}</h1>
                    <div className='flex justify-between'>
                      <p className='px-2 py-1 rounded-full text-[#93e6fb] bg-[#8be3f925]'>
                  {question.question_topics}

                      </p>
                      <p className='text-[#8BE3F9]'>
                      

                      Author: {question.question_author}
                      </p>
                    </div>
                  </div>
                 <div className='flex flex-col py-8 gap-8'>
                  <div>{question.question_text}</div>
                  <div>
                  {question.question_options.map((option,index) => (
                   <div key={index}>
                      {
                        true?(<div>
                          {alphabets[index]}. {option[0]}
                        </div>):(<></>)
                      }
                   </div>
                  ))}
                  </div>
                 </div>
                </div>
              )
                
              )
            }
    </div>
  )
}

export default Objectives