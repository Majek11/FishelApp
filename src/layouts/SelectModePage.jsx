import React from 'react'
import createMode from '../assets/create_mode.png'
import answerOnlineMode from '../assets/answer_online_mode.png'
import printMode from '../assets/print_mode.png'


const SelectModePage = () => {
  return (
    <div className=' h-full lg:p-16 text-[#E3F1F4]'>
    <div className='flex flex-col gap-8'>
 <div className='w-auto space-y-1'>
 <h1 className='text-3xl'>What mode are you using?</h1>
        <div className='bg-[#E3F1F4] h-[1px] w-full'></div>
 </div>
 <div className='flex gap-8'>
    <div className="relative lg:w-[320px] lg:h-[225px]">
        <img src={createMode} alt="" className='absolute -z-[1]'/>
        <div className='h-full w-full bg-[#353C3E] opacity-70 absolute -z-[1]'></div>
        <div className=' z-50'>
            <h1 className='font-bold text-4'>
            Create Mode
            </h1>
            <p>
            Add your own questions to our database.
            </p>
        </div>
    </div>
    <div className="relative">
        <img src={printMode} alt="" />
        <div></div>
        <div></div>
    </div>
    <div className="relative">
        <img src={answerOnlineMode} alt="" />
        <div></div>
        <div></div>
    </div>
 </div>
        </div>
    </div>
  )
}

export default SelectModePage