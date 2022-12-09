import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import DesktopNavSection from '../DesktopNavSection/DesktopNavSection'
import MobileNavSection from '../MobileNavSection/MobileNavSection'

const NabBar = () => {
  const [nav, setNav] = useState<boolean>(false)

  return (
    <div className='flex justify-between items-center w-full px-4 h-20 text-white fixed bg-black'>
      <h1 className="text-5xl font-signature ml-2">
        La
      </h1>
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {
          nav ?
          <FaTimes size={30} /> :
          <FaBars size={30} />
        }
      </div>
      <DesktopNavSection />
      { nav && ( <MobileNavSection /> ) }
    </div>
  )
}

export default NabBar