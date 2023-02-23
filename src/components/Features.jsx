import React from 'react'
import FeaturesImg from '../assets/Features.png'
import Logo from "../assets/logo.png";

const Features = () => {
  return (
    <div className='grid grid-cols-2'>

<div className="image">
        <img src={FeaturesImg} alt="" />
    </div>
    <div className="about-details text-start px-[70px] pt-28">
      <div className='flex gap-3'>
      <div className="">
          <img src={Logo} alt="" className="w-8 lg:w-8" />
        </div>
        <h1 className="text-[24px] lg:text-[32px] font-bold text-black">Fishel</h1>
      </div>
    <h1 className='text-[49px] text-[#0C4A5A] font-bold'>Allows you to</h1>
        <div className='text-[23px] text-[#353C3E] pt-10 font-["Nunito"] space-y-8 font-semibold lg:space-y-[20px]'>
        <p>Practice related examination questions <br /> both essay and objective.</p> 
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