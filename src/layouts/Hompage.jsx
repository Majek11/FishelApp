import React from 'react'

const Hompage = () => {
  return (
    <div>
      <div className="main-info">
        <h1 className='text-center font-bold text-[64px] text-white leading-[70px] pt-20'>
          Find questions for <br /> yourself, your students, or <br /> your
          children.
        </h1>
        <p className='text-[24px] text-white font-thin text-center pt-8'>Fishel allows you to generate test and exam questions. <br /> It also allows seasoned teachers to add to our <br /> database of questions.</p>
      </div>

     <div className='text-center pt-8 pb-28'>
     <button className='px-8 py-3 bg-[#8BE3F9] text-[#083743] font-bold text-[24px] rounded-md'>
        Get Started
      </button>
     </div>
    </div>
  )
}

export default Hompage