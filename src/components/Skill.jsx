import React from 'react'

const Skill = () => {
  return (
    <div name='skills' className='w-full md:h-screen bg-[transparent] text-black mt-10'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col text-center content-center w-full '>
          <div>
              <p className='text-5xl inline text-[orange] font-[Poppins] '>Technical Skills</p>
              
              
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 pl-5 text-center py-8 mt-20 font-bold '>

              <div className='w-[80px] h-[80px] p-2 shadow-md shadow-[orange] bg-white rounded-[70%] hover:scale-110 duration-500'>
                  <p className='mt-5 text-[black] '>HTML</p>
              </div>

              <div className='w-[80px] h-[80px] p-2 shadow-md shadow-[orange] bg-white rounded-[70%] hover:scale-110 duration-500'>
                  <p className='mt-5 text-[black]'>CSS</p>
              </div>
              <div className='w-[80px] h-[80px] p-2 shadow-md shadow-[orange] bg-white rounded-[70%] hover:scale-110 duration-500'>
                  <p className='mt-5 text-[black]'>JS</p>
              </div>

              <div className='w-[80px] h-[80px] p-2 shadow-md shadow-[#040c16] bg-white rounded-[70%] hover:scale-110 duration-500'>
                  <p className='mt-5 text-[black]'>REACT</p>
              </div>
              <div className='w-[80px] h-[80px] p-2 shadow-md shadow-[#040c16] bg-white rounded-[70%] hover:scale-110 duration-500'>
                  <p className='mt-5 text-[black]'>NODE</p>
                  
              </div>
              <div className='w-[80px] h-[80px] p-2 shadow-md shadow-[#040c16] bg-white rounded-[70%] hover:scale-110 duration-500'>
                  <p className='mt-5 text-[black]'>JAVA</p>
              </div>

              <div className='w-[80px] h-[80px] p-2 shadow-md shadow-[#040c16] bg-white rounded-[70%] hover:scale-110 duration-500'>
                  <p className='mt-5 text-[black]'>GIT</p>
              </div>

              <div className='w-[80px] h-[80px] p-2 shadow-md shadow-[#040c16] bg-white rounded-[70%] hover:scale-110 duration-500'>
                  <p className='mt-5 text-[black]'>PYTHON</p>
              </div>
              
              <div className='w-[80px] h-[80px] p-2 shadow-md shadow-[#040c16] bg-white rounded-[70%] hover:scale-110 duration-500'>
                  <p className='mt-5 text-[black]'>MySQL</p>
              </div>
              

            </div>

    </div>
    </div>
  )
}

export default Skill