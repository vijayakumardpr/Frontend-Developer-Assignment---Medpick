import React from 'react'

const Header = () => {
  return (
   <div className='flex justify-between items-center px-8 py-4 bg-[#F0F8FF] text-[#004F95] shadow-md'>
    <div></div>
    <div className='flex items-center'>
        <div className="text-5xl font-light">Vajra</div>
        <div className='font-semibold ml-14 mt-3'>HOME</div>
    </div>
    <div className='font-semibold'>+91 89715 80265</div>
   </div>
  )
}

export default Header