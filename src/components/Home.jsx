import React from 'react';
import Profile from '../pictures/profile.jpg';
import{FaLinkedin, FaGithub, FaDownload, FaPhoneAlt, } from "react-icons/fa";
import{MdMail} from "react-icons/md";
import { GoLocation } from "react-icons/go"
import Laptop from '../pictures/laptop.png';
import resume from '../pictures/nepal_anup_CV.pdf';


const Home = () => {
  return (
    <div name= 'home' className='w-full md:h-screen mx-2 flex flex-row flex-wrap grow justify-center items-center p-2 ' >
        
      <div className=" p-1  ">
        <img className=' w-[350px] h-[350px] rounded-[50%] shadow-lg shadow-[orange]' src={Profile} alt="profile" />
      </div>
   
      
      <div className=" max-w-[1000px] mx-[20px] flex flex-col basis-1/2 justify-start mt-4 ">
    
          <h2 className=' text-5xl mb-2'> Hi, I am <span className=' font-bold font-[Poppins] text-5xl text-black sm:text-7xl'>ANUP</span></h2>

          <h2 className='text-4xl mt-4 sm:text-5xl  font-bold text-[orange] ' >An aspiring full stack developer</h2>

          <h2 className='flex justify-start text-2xl mt-4'><GoLocation className='text-black font-bold rounded-full mx-2 mt-1 p-1'/> Espoo, Finland</h2>

          <a className='flex justify-start text-2xl mt-6' href = "mailto:anup.neps@gmail.com"> <MdMail className='text-white cursor-pointer rounded-md mx-2 mt-2 p-1 bg-black'/> anup.neps@gmail.com</a>

           <a className='flex flex-inline text-2xl mt-2' href="tel:+358405190489"> <FaPhoneAlt className='text-white cursor-pointer rounded-md mx-2 mt-2 p-1  bg-black'/>+358405190489</a>
           

          <div className='flex justify-start mt-10  '>

              <a  href="https://github.com/anupneps" target="_blank" rel="noreferrer noopener"><FaGithub className='text-4xl bg-gradient-to-r  bg-black rounded-md text-white mx-4 p-1 '/></a>
           
              <a  href="https://www.linkedin.com/in/anup-nepal-33b53b2a/" target="_blank" rel="noreferrer noopener"><FaLinkedin className='text-4xl  bg-gradient-to-r bg-black rounded-md text-white mx-4 p-1' /></a>

              <a  href={resume} download ><FaDownload className='text-4xl bg-gradient-to-r bg-black rounded-md text-white mx-4 p-1' /></a>
          </div>
     
      </div>
      
      <div>
          <div className='flex'>
            <img className='invisible lg:absolute h-[100px] md:h-[20px] lg:visible lg:h-[50vh] right-0 z-[-1]' src={Laptop} alt="" />
            </div>
          </div>
            
    </div>

    
  )
}

export default Home