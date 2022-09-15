import React from 'react';
import Abt from '../pictures/about.png';

const About = () => {
  return (
    <>
  <div name = 'about' className='w-full h-full lg:h-screen border-lg border-[orange] mt-10 '>
    <div className='flex flex-col justify-center items-center w-full h-full '>
     <h1 className='  text-5xl text-[orange] mb-10 font-[Poppins] font-bold '> About Me </h1>
                      
            <h3 className=' mx-5 text-left text-1xl sm:text-center md:text-2xl lg:w-[40%] font-bold leading-10 ' >
            I am a 2nd year Cybersecurity student, currently learning and
            expanding my horizon on the topics of networking, software
            development, databases, IT infrastructure and security. Apart from school curriculum, I have a
            genuine interest in web development and have been investing my time
            learning and building web applications using JS, React,
            Node/express.
                       
            </h3>
                          
            <div>
            <div className='flex flex-row justify-center mt-10 mb-10' >
             
              <img className=' w-[40vh] right-0 sm:right-80 z-[-1] ' src={Abt} alt="about working on computer" />
            </div></div>       
            </div>
    </div>
    </>
  )
}

export default About




