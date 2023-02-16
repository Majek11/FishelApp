import React from 'react'
import FeaturesImg from '../assets/Features.png'

const Features = () => {
  return (
    <div className='grid grid-cols-2'>

<div className="image">
        <img src={FeaturesImg} alt="" />
    </div>
    <div className="about-details text-start px-[70px] pt-28">
    <h1 className='text-[49px] text-[#0C4A5A] font-bold'>Features</h1>
        <div className='text-[23px] text-[#353C3E] pt-10 font-["Nunito"] space-y-8 font-semibold space-y-[20px]'>
        <p>Practise related examination questions <br /> both essay and objective.</p> 
        <p>Make reviews and read other teachers <br /> reviews on any subject.</p>
        <p>Access to textbook and other <br /> related materials.</p>
        <p>Step by step guide on answering <br /> questions as relating.</p> 
        <p>Checking on your preparation for your <br /> exams.</p>
        </div>
    </div>
    
</div>
  )
}

export default Features