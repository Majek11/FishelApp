import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#8BE3F9] px-16 pt-16'>
      <div className="logo">
        <h1 className='text-[#0C4A5A] font-bold text-[24px]'>Fishel</h1>
      </div>

      <div className="features font-['Nunito'] text-[#353C3E] font-medium text-[18px] space-y-4 pt-8 pb-16">
        <div><a href='#' className='cursor-pointer'>About Fishel</a></div>
        <div><a href='#' className='cursor-pointer'>Features</a></div>
        <div><a href='#' className='cursor-pointer'>Developers</a></div>
      </div>
    </div>
  )
}

export default Footer