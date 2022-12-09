import React from 'react'
import { links } from '../utils'

const MobileNavSection = () => {
  return (
    <>
    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
      {
        links.map(link => (
          <li
            key={link.id}
            className='px-4 cursor-pointer capitalize font-medium py-6 text-4xl'>
            {link.link}
          </li>
        ))
      }
    </ul>
    </>
  )
}

export default MobileNavSection