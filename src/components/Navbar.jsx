import {React, useState} from 'react';
import{FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
  const[burgerIcon, setBurgerIcon]= useState(false)
  const handleClick = () => setBurgerIcon(!burgerIcon)

  return (
    <div className=' fixed right-0 top-10 w-30 h-auto items-center flex p-1.5 pr-0 ' >
      
      <ul className='mt-[20px] flex-col hidden md:flex '>
        <li className='my-[2px]  bg-white p-1  hover:bg-[gradient-to-r from-cyan-500 to-blue-500]' >Home</li>
        <li className='my-[2px]  bg-white p-1  hover:bg-gradient-to-r from-cyan-500 to-blue-500'>About</li>
        <li className='my-[2px]  bg-white p-1  hover:bg-gradient-to-r from-cyan-500 to-blue-500'>Skills</li>
        <li className='my-[2px]  bg-white p-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500'>Projects</li>
      </ul>
           
      <div onClick={handleClick} className='mt-0 p-1.5 border bg-black text-white md:hidden '>
          {!burgerIcon ? <FaBars /> : <FaTimes />}
          
      </div>
      
      <ul className= {!burgerIcon ? 'hidden':' right-0 w-[30vw] h-fit bg-slate-400 flex flex-col justify-center items-center z-10  '} >
        <li className='py-2 text-2xl' >Home</li>
        <li className='py-2 text-2xl'>About</li>
        <li className='py-2 text-2xl'>Skills</li>
        <li className='py-2 text-2xl'>Project</li>
      </ul>
      
      
      </div>
  )
}

export default Navbar