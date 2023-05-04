import React from 'react'
import Features from './Features'
import Signin from './Signin'


const Main = () => {
  return (
    <div className='p-10 flex flex-col gap-12 justify-center md:flex-row'>
        <Features/>
        <Signin/>
    </div>
  )
}

export default Main