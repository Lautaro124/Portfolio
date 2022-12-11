import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import DesktopNavSection from '../DesktopNavSection/DesktopNavSection'
import MobileNavSection from '../MobileNavSection/MobileNavSection'
import Logo from '../../assets/Logo.png'

const NabBar = () => {
  const [nav, setNav] = useState<boolean>(false)

  return (
    <div className='flex justify-between items-center w-full px-4 h-20 text-white fixed bg-black'>
      <img
        className='w-14'
        src={Logo} 
        alt='No logo' 
      />
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {
          nav ?
          <FaTimes size={30} /> :
          <FaBars size={30} />
        }
      </div>
      <DesktopNavSection />
      { nav && ( <MobileNavSection onClick={() => setNav(!nav)} /> ) }
    </div>
  )
}

export default NabBar