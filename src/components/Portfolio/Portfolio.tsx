import React from 'react'
import Moneta from '../../assets/images/Moneta.png'
import GrupalProject from '../../assets/images/ProyectoGrupal.jpeg'
import PiDogs from '../../assets/images/PiDogs.png'
import PG from '../../assets/images/PG.png'


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      source: PG,
    },
    {
      id: 2,
      source: Moneta,
    },
    {
      id: 3,
      source: GrupalProject,
    },
    {
      id: 4,
      source: PiDogs,
    }
  ]

  return (
    <div className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>
            Check out some of my work right here
          </p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
          projects.map(project =>(
              <div key={project.id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={project.source} alt="" className=' rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>Demo</button>
                </div>
              </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Portfolio