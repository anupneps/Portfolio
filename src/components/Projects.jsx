import React from 'react'
import Cinema from '../pictures/cinema.png';
import Todo from '../pictures/todo.PNG';
import Bakery from '../pictures/bakery.PNG';
import Contact from '../pictures/contactcard.png';


const projectCards= [
  {
  id: 1,
  title: "Finnkino Clone",
  demo: "https://moonlit-malabi-07180f.netlify.app/",
  code:"https://github.com/anupneps/cinema_project",
  image: Cinema,
  alt: "movie-search"
},
{
  id: 2,
  title: "Grocery To-do",
  demo: "https://romantic-einstein-658c1c.netlify.app/",
  code:"https://github.com/anupneps/todo_webproject",
  image: Todo,
  alt: "grocery to-do"
},
{
  id: 3,
  title: "Bakery Webpage",
  demo: "https://boring-lalande-e7b2d6.netlify.app/",
  code:"https://github.com/anupneps/anupneps.github.io",
  image: Bakery,
  alt: "bakery webpage"
},
{
  id: 4,
  title: "Contacts-Using API",
  demo: "https://earnest-youtiao-db65a5.netlify.app/",
  code:"https://github.com/anupneps/contactCard-react-app",
  image: Contact,
  alt: "contact page using API"
},
]

const Projects = () => {
  return (
    <div name='projects'className='w-full h-full flex flex-col items-center sm:h-max text-gray-300 bg-[transparent] mt-10 sm:mt-10  '>
      
      <div className='max-w-screen-lg flex flex-col items-center mb-20 '>
          <div className=' text-center'>
            <p className='text-5xl inline text-[orange] font-[Poppins] font-bold'>
              {"Projects"}
            </p>
          </div>

          <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-10 px-1 mt-20 sm:px-0'>

            {projectCards.map(({id, title, demo, code, image, alt})=>(
              <div key={id} className= 'rounded-md ' >
                <img className='w-[350px] h-[207px] sm:w-[550px] sm:h-[250px] aspect-auto object-cover overflow-hidden shadow-md shadow-[orange]' src={image} alt={alt} />
                <div className='text-start mt-2 '>
                  <span className='text-1xl font-bold text-[black]'>{title}
                    <a href={demo} target="_blank" rel="noreferrer noopener">
                      <button className=' ml-4 w-14 m-1 bg-white border-2 border-black font-bold text-1xl'> Demo
                      </button>
                    </a>
                    <a href={code}target="_blank" rel="noreferrer noopener">
                      <button className='ml-4 w-14  m-1 bg-white border-2 border-black text-gray-700 font-bold text-1xl'>Code
                      </button>
                    </a>
                  </span>
                </div>
              </div>
            ))}       
          </div>
      </div>
    </div>
  )
}

export default Projects