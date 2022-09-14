import React from 'react'
import Vector from "./Vector";

const thisYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div  className='w-fit inline justify-center '>
     <Vector/>
      <div className=' flex flex-col '>
        <h2 className='text-center font-bold ' > Anup Nepal </h2>
        <h2 className='text-center font-bold '>@ {thisYear}</h2>
      </div>

      
    </div>
  )
}

export default Footer