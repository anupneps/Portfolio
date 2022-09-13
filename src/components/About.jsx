import React from 'react';
import Abt from '../pictures/about.png';

const About = () => {
  return (
    <>
  <div name = 'about' className='w-full md:h-screen mx-auto flex flex-col content-center mt-10 '>

     <h1 className=' text-5xl text-[orange] mb-2 text-center font-[Poppins] '> About Me </h1>

      <div  className=' w-[fit-content]  text-center flex-wrap mb-5 p-10 md:h-fit ' >
      
          
            <h3 className=' mx-[20%] text-2xl font-bold text-justify leading-10 ' >
            I am a 2nd year Cybersecurity student, currently learning and
            expanding my horizon on the topics of networking, software
            development and security. Apart from school curriculum, I have a
            genuine interest in web development and have been investing my time
            learning and building web applications using JS, React,
            Node/express.
                                    
            </h3>     

            {/* <Vector/> */}
            <div>
            <div className='flex flex-row justify-center' >
              <img className=' w-[50vh] mt-20  md:absolute ' src={Abt} alt="" />
            </div></div>

        </div>
    
        

    </div>
    </>
  )
}

export default About




