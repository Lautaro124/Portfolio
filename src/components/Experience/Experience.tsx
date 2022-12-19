import html from '../../assets/html.png'
import react from '../../assets/react.png'
import gitHub from '../../assets/github.png'
import js from '../../assets/javascript.png'
import ts from '../../assets/ts.png'
import tailwind from '../../assets/tailwind.png'
import css from '../../assets/css.png'
import { Element } from 'react-scroll'
import { useTranslation } from 'react-i18next'

const Experience = () => {
  const [ t ] = useTranslation('global')
   const techs = [
    {
      id: 1,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: ts,
      title: "Typescript",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: gitHub,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    }
  ]

  return (
    <Element name='Technologies' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>{ t('nav.skills') }</p>
          <p className='py-6'>
            { t('technologies') }
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            techs.map(tech =>(
            <div key={tech.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}>
              <img src={tech.src} alt="No reference" className='w-20 mx-auto'/>
              <p className='mt-4'>{tech.title}</p>
            </div>
            ))
          }
        </div>
      </div>
    </Element>
  )
}

export default Experience