import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import DesktopNavSection from '../DesktopNavSection/DesktopNavSection'
import MobileNavSection from '../MobileNavSection/MobileNavSection'
import Logo from '../../assets/Logo.png'
import { useTranslation } from 'react-i18next'

const NabBar = () => {
  const [nav, setNav] = useState<boolean>(false)
  const [ t, i18n ] = useTranslation('global')

  const changeLanguage = (lang: 'es'|'en') => i18n.changeLanguage(lang)
  const currentLanguageSelected = (lang: 'es'|'en') => {
    if(lang === i18n.language){
      return 'w-fit h-full border-solid border-2 border-gray-500 text-gray-500 px-3 bg-white bg-opacity-10'
    }
    return 'w-fit h-full border-solid border-2 border-gray-500 text-gray-500 px-3'
  }

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
      <div className='rounded-md h-11'>
        <button 
          className={ currentLanguageSelected('es') + ' rounded-l-md'}
          onClick={() => changeLanguage('es')}
          >
          ES
        </button>
        <button 
          className={currentLanguageSelected('en') + ' rounded-r-md'}
          onClick={() => changeLanguage('en')}
          >
          EN
        </button>
      </div>
    </div>
  )
}

export default NabBar