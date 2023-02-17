import React from 'react'
import { Link } from 'react-router-dom'


const SelectModePage = () => {
  return (
    <div className="min-h-screen lg:p-16 bg-[url('/public/images/MainImage.png')] bg-cover bg-center text-[#E3F1F4]">
        <div className="bg-slate-300 w-full h-full"></div>
    <div className='flex flex-col gap-8 w-full h-full bg-slate-500'>
 <div className=' space-y-1'>
 <h1 className='text-3xl'>What mode are you using?</h1>
        <div className='bg-[#E3F1F4] h-[1px] w-full'></div>
 </div>
 <div className='flex gap-8'>
    <Link>
    <div className="relative lg:w-[320px] rounded lg:h-[225px] bg-[url('/src/assets/create_mode.png')]  hover:border-solid hover:border-2  hover:border-[#e3f1f4] delay-300">
     
        <div className='h-full w-full bg-[#353c3ea4] cursor-pointer p-6 hover:bg-[#353c3ee6] duration-300 delay-300'>
        <div className=' space-y-2'>
            <h1 className='font-bold text-2xl'>
            Create Mode
            </h1>
            <p>
            Add your own questions to our database.
            </p>
        </div>
        </div>
    
    </div>
    </Link>
    <Link>
    <div className="relative lg:w-[320px] rounded lg:h-[225px] bg-[url('/src/assets/print_mode.png')]  hover:border-solid hover:border-2  hover:border-[#e3f1f4] delay-300">
        <div className='h-full w-full bg-[#353c3ea4] cursor-pointer p-6 hover:bg-[#353c3ee6] duration-300 delay-300'>
        <div className=' space-y-2'>
            <h1 className='font-bold text-2xl'>
            Print Mode
            </h1>
            <p>
            Generate, download and print  exam or test questions.
            </p>
        </div>
        </div>
    
    </div>
    </Link>
    <Link>
    <div className="relative lg:w-[320px] rounded lg:h-[225px] bg-[url('/src/assets/answer_online_mode.png')]  hover:border-solid hover:border-2  hover:border-[#e3f1f4] delay-300">
        <div className='h-full w-full bg-[#353c3ea4] cursor-pointer p-6 hover:bg-[#353c3ee6] duration-300 delay-300'>
        <div className=' space-y-2'>
            <h1 className='font-bold text-2xl'>
            Answer Online Mode
            </h1>
            <p>
            Test yourself online on any subject with our quick questions generation feature. 
                        </p>
        </div>
        </div>
    
    </div>
    </Link>
 
 </div>
        </div>
    </div>
  )
}

export default SelectModePage