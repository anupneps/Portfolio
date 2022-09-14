import React from 'react'

const iconImage = [
    {
        id: 1,
        iconname: "HTML" ,
        src: "https://img.icons8.com/color/96/000000/html-5--v1.png",
        alt: "html icons from icon-8.com"
    },

    {
        id: 2,
        iconname: "CSS" ,
        src: "https://img.icons8.com/color/96/000000/css3.png",
        alt: "css icons from icon-8.com"
    },

    {
        id: 3,
        iconname: "JS" ,
        src: "https://img.icons8.com/color/96/000000/javascript--v1.png",
        alt: "JavaScript icons from icon-8.com"
    },

    {
        id: 4,
        iconname: "REACT" ,
        src: "https://img.icons8.com/officel/96/000000/react.png",
        alt: "react icons from icon-8.com"
    },
    {
        id: 5,
        iconname: "NODEJS" ,
        src: "https://img.icons8.com/fluency/96/000000/node-js.png",
        alt: "nodejs icons from icon-8.com"
    },

    {
        id: 6,
        iconname: "JAVA" ,
        src: "https://img.icons8.com/material-sharp/96/000000/java-coffee-cup-logo.png",
        alt: "java icons from icon-8.com"
    },

    {
        id: 7,
        iconname: "GIT" ,
        src: "https://img.icons8.com/ios-glyphs/96/000000/github.png",
        alt: "github icons from icon-8.com"
    },

    {
        id: 8,
        iconname: "PYTHON" ,
        src: "https://img.icons8.com/fluency/96/000000/python.png",
        alt: "python icons from icon-8.com"
    },

    {
        id: 9,
        iconname: "MySQL" ,
        src: "https://img.icons8.com/external-those-icons-flat-those-icons/80/000000/external-MySQL-programming-and-development-those-icons-flat-those-icons.png",
        alt: "mysql icons from icon-8.com"
    },

]


const Skill = () => {
  return (
    <div name='skills' className='w-full sm:h-screen text-black  '>
      {/* Container */}
      <div className='w-full mx-auto flex flex-col items-center text-center '>
            <div>
               <p className='text-5xl text-[orange] font-[Poppins]  sm:mt-20 font-bold'>Technical Skills</p>
            </div>

            <div className='w-max  grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-12 place-items-center mt-10 sm:mt-20 font-bold '>

                {iconImage.map(({id, iconname, src, alt })=>(

                <div key={id} className='flex flex-col items-center justify-center w-[150px] h-[150px] text-2xl shadow-md shadow-[orange] bg-white rounded-full hover:scale-110 duration-500 '>
                    <img src={src} alt={alt} />
                    <p className=' text-[black] '>{iconname}</p>
                </div>

                ))}

         
            </div>

        </div>
    </div>
  )
}

export default Skill