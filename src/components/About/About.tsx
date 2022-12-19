import { useTranslation } from 'react-i18next'
import { Element } from 'react-scroll'

const About = () => {
  const [ t ] = useTranslation('global')

  return (
    <Element name='About' className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>{ t('nav.about') }</p>
        </div>
        <p className='text-xl mt-20'>
          { t('about.first_part') }<br/>
          { t('about.second_part') }
        </p>
        <br />
        <p className='text-xl'>
        { t('about.third_part') }<br/>
        { t('about.quarter_part') }<br/>
        { t('about.fifth_part') }<br/>
        { t('about.sixty_part') }
        </p>
      </div>
    </Element>
  )
}

export default About