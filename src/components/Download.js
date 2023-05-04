import React from 'react'
import play from "../assets/images/play.png"
import apple from "../assets/images/apple.png"

const Download = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 py-10 md:flex-row'>
        <div className='text-[#004F95] font-semibold text-2xl'>Download Our App</div>
        <img src={play} alt=""/>
        <img src={apple} alt=""/>
    </div>
  )
}

export default Download