import React from 'react';
import Profile from '../pictures/profile.jpg';
import{FaLinkedin, FaGithub, FaDownload, FaPhoneAlt, } from "react-icons/fa";
import{MdMail} from "react-icons/md";
import { GoLocation } from "react-icons/go"
import Vector from './Vector';

const Home1 = () => {
  return (
    <div name= 'home' className='w-full md:h-screen bg-[transparent] flex flex-row flex-wrap grow justify-center px-8 mt-[10rem]  mb-40  ' >
        
      <div className=" flex lg:w-[350px] lg:h-[350px] rounded-[50%] p-1 bg-gradient-to-r from-cyan-500 to-blue-500;   ">
        <img className=' rounded-[50%]'  src={Profile} alt="profile" />
      </div>
   

      {/* Container */}

      <div className=" max-w-[1000px] mx-[20px] px-2 flex flex-col basis-1/2 justify-start mt-4 ">
    
          <h2 className=' text-2xl mb-2' >Hi, I am <span className=' font-bold font-[Poppins] text-5xl text-black  '>ANUP</span> </h2>
          <h2 className='text-3xl mt-2  font-bold text-[orange] ' >An aspiring full stack developer</h2>
          <h2 className='flex justify-start text-2xl mt-2' > <GoLocation className='text-black font-bold rounded-full mx-2 mt-1 p-1 '/> Espoo, Finland</h2>
          <h2 className='flex justify-start text-2xl mt-6  ' > <MdMail   className='text-white rounded-md mx-2 mt-2 p-1 bg-gradient-to-r from-cyan-500 to-blue-900'/> anup.neps@gmail.com</h2>
          <h2 className='flex justify-start text-2xl mt-2  ' > <FaPhoneAlt className='text-white rounded-md mx-2 mt-2 p-1 bg-gradient-to-r from-cyan-500 '/> {"+358405190489"} </h2>

          <div className='flex justify-start mt-10  '>
            <a  href="http://github.com" target="_blank" rel="noreferrer noopener"><FaGithub className='text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white mx-4 p-1 '/></a>
           
            <FaLinkedin className='text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white mx-4 p-1' />
            <FaDownload className='text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white mx-4 p-1' />
          </div>
     
      </div>
      <div className='md:mt-[15%] z-[-1] '>
      <Vector />
      </div>
      
    
    
    </div>

    

  )
}

export default Home1