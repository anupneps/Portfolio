import {React, useState} from 'react';
import{FaBars, FaTimes} from "react-icons/fa";
import{Link} from 'react-scroll';


const Navbar = () => {
  const[burgerIcon, setBurgerIcon]= useState(false)
  const handleClick = () => setBurgerIcon(!burgerIcon)

const nav = [
  {
    id:1,
    navName: 'home',
    navTitle: 'Home'
  },
  {
    id:2,
    navName: 'about',
    navTitle: 'About'
  },
  {
    id:3,
    navName: 'skills',
    navTitle: 'Skills'
  },
  {
    id:4,
    navName: 'projects',
    navTitle: 'Projects'
  },

]

  return (
    <div className=' fixed w-full h-[80px] flex justify-end items-center px-4 md:bg-slate-700 md:mb-20' >
      
      <ul className='hidden md:flex '>

        {nav.map(({id, navName, navTitle})=>(
          <li key={id} className='  px-5 text-2xl text-[orange] hover:bg-slate-900' > <Link to = {navName} smooth ={true} duration={500}>{navTitle}</Link></li>
        ))}

      </ul>
           
      <div onClick={handleClick} className=' md:hidden z-10 '>
          {!burgerIcon ? <FaBars /> : <FaTimes />}
          
      </div>
      
      <ul className= {!burgerIcon ? 'hidden':' absolute top-0 left-0 w-full h-[50vh] bg-slate-200 flex flex-col justify-center items-center'} >

        {nav.map(({id, navName, navTitle})=>(
          <li key={id} className='py-2 text-2xl'><Link onClick={handleClick} to = {navName} smooth ={true} duration={500}>{navTitle}</Link></li>
        ))}

      </ul>
      
      
      </div>
  )
}

export default Navbar