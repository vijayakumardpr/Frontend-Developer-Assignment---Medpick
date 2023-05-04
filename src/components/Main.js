import React from 'react'
import Features from './Features'
import Signin from './Signin'


const Main = () => {
  return (
    <div className='p-10 flex gap-12 justify-center md:flex flex-col'>
        <Features/>
        <Signin/>
    </div>
  )
}

export default Main