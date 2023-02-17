import React from 'react'
import AboutImg from '../assets/About.png'

const About = () => {
  return (
    <div className='grid grid-cols-2'>
        <div className="about-details text-start px-[70px] pt-28">
        <h1 className='text-[49px] text-[#0C4A5A] font-bold'>About Us</h1>
            <p className='text-[24px] text-[#353C3E] pt-10 font-["Nunito"] font-semibold'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol
            </p>
        </div>
        <div className="image">
            <img src={AboutImg} alt="" />
        </div>
    </div>
  )
}

export default About