import React from 'react'
import Vector from "./Vector";


const Footer = () => {
  return (
    <div  className='w-full md:h-[5vh] inline justify-center  '>
     <Vector/>
      <div className='  flex flex-col sm:bottom-0 md:bottom-0 '>
        <h2 className='text-center ' > Anup Nepal </h2>
        <h2 className='text-center '>@ 2022</h2>
      </div>

      

    </div>
  )
}

export default Footer