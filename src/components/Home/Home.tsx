import React from 'react'
import ProfileImage from '../../assets/images/me.jpeg'
import { RiArrowRightSLine } from 'react-icons/ri'

const Home = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I am React developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I am proactive, considerate and responsible.<br />
            I am always looking to improve in my field, and help my colleagues.
          </p>
          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <RiArrowRightSLine size={25} className='ml-1'/>
              </span>
            </button>
          </div>
        </div>
        <div className='w-full md:w-2/3'>
          <img 
            src={ProfileImage} 
            alt='My photo' 
            className='rounded-2xl mx-auto w-full md:w-1/1'/>
        </div>
      </div>
    </div>
  )
}

export default Home