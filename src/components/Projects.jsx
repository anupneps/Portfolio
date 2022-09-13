import React from 'react'

import Cinema from '../pictures/cinema.png';
import Todo from '../pictures/todo.PNG';
import Bakery from '../pictures/bakery.PNG';
import Contact from '../pictures/contactcard.png';


// const snapshot = {
//   id: 1;
//   title: " Finnkino Clone "
// }


const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[transparent] shadow-lg shadow-[#f3f3f3] mt-10'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full '>
        <div className='pb-8 text-center'>
          <p className='text-5xl inline text-[orange] font-[Poppins]'>
            {"Projects"}
          </p>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-10 px-12 mt-10 sm:px-0'>

            {/* first project snapshot */}
          <div className= 'rounded-md ' >
            <img className='w-[350px] h-[207px] aspect-auto object-fit overflow-hidden border-4 p-1 border-[orange]' src={Cinema} alt="cinema quest" />
            <div className='text-start '>
              <span className='text-1xl font-bold text-[black] '>
              Finnkino Clone 
              <a href='/'>
                  <button className=' ml-4 w-14  m-1 bg-white text-gray-700 font-bold text-1xl'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='ml-4 w-14  m-1 bg-white text-gray-700 font-bold text-1xl'>
                    Code
                  </button>
                </a>
              </span>

            </div>
          </div>
    
          {/* second project snapshot */}
          <div className= 'rounded-md '  >
            <img className='w-[350px] h-[207px] aspect-auto object-fill overflow-hidden border-4 p-1 border-[orange]' src={Bakery} alt="bakery" />
            <div className='text-start '>
              <span className='text-1xl font-bold text-[black] '>
              Bakery webpage 
              <a href='/'>
                  <button className=' ml-4 w-14 px-1 py-1 m-1 bg-white text-gray-700 font-bold text-1xl'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='ml-4 w-14 px-1 py-1 m-1 bg-white text-gray-700 font-bold text-1xl'>
                    Code
                  </button>
                </a>
              </span>

            </div>
          </div>

          {/* third project snapshot */}

          <div className= 'rounded-md' >
            <img className='w-[350px] h-[207px] aspect-auto object-fit overflow-hidden border-2 border-[orange]' src={Todo} alt="bakery" />
            <div className='text-start '>
              <span className='text-1xl font-bold text-[black] '>
              To-do App
              <a href='/'>
                  <button className=' ml-4 w-14 px-1 py-1 m-1 bg-white text-gray-700 font-bold text-1xl'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='ml-4 w-14 px-1 py-1 m-1 bg-white text-gray-700 font-bold text-1xl'>
                    Code
                  </button>
                </a>
              </span>

            </div>
          </div>

           {/* third project snapshot */}

           <div className= 'rounded-md' >
            <img className='w-[350px] h-[207px] aspect-auto object-cover overflow-hidden border-2 border-[orange]' src={Contact} alt="bakery" />
            <div className='text-start '>
              <span className='text-1xl font-bold text-[black] '>
              Contact Card- USING API
              <a href='/'>
                  <button className=' ml-4 w-14 px-1 py-1 m-1 bg-white text-gray-700 font-bold text-1xl'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='ml-4 w-14 px-1 py-1 m-1 bg-white text-gray-700 font-bold text-1xl'>
                    Code
                  </button>
                </a>
              </span>

            </div>
          </div>


            
        </div>
      </div>
    </div>
  )
}

export default Projects