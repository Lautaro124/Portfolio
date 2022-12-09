import React from 'react'
import { links } from '../utils'

const DesktopNavSection = () => {
  return (
    <>
      <ul className='hidden md:flex'>
          {
            links.map(link => (
              <li
                key={link.id}
                className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                {link.link}
              </li>
            ))
          }
        </ul>
    </>
  )
}

export default DesktopNavSection