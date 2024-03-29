import GrupalProject from '../../assets/images/ProyectoGrupal.jpeg'
import PiDogs from '../../assets/images/PiDogs.png'
import LoginApp from '../../assets/images/LoginApp.png'
import Twitch from '../../assets/images/twitch.png'
import { Element } from 'react-scroll'
import { useTranslation } from 'react-i18next'

const Portfolio = () => {
  const [ t ] = useTranslation('global')
  const projects = [
    {
      id: 1,
      source: GrupalProject,
      href: 'https://recipecalendar.vercel.app/'
    },
    {
      id: 2,
      source: PiDogs,
      href: 'https://www.linkedin.com/posts/lautaro-gabriel-gonzalez_video-react-express-activity-6836343147270856704-rrEz?utm_source=share&utm_medium=member_desktop'
    },
    {
      id: 3,
      source: LoginApp,
      href: 'https://www.linkedin.com/posts/lautaro-gabriel-gonzalez_react-javascript-github-activity-7010739738189967360-K9pR?utm_source=share&utm_medium=member_desktop'
    },
    {
      id: 4,
      source: Twitch,
      href: 'https://twitch-ten.vercel.app/'
    }
  ]

  return (
    <Element name='Portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>{ t('nav.portfolio') }</p>
          <p className='py-6'>
            { t('portfolio.check') }
          </p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
          projects.map(project =>(
              <div key={project.id} className='shadow-md shadow-gray-600 rounded-lg'>
                <a href={project.href} target='_blank'>
                  <img src={project.source} alt="" className=' rounded-md duration-200 hover:scale-105'/>
                  <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>
                      { t('portfolio.view') }
                    </button>
                  </div>
                </a>
              </div>
          ))
        }
        </div>
      </div>
    </Element>
  )
}

export default Portfolio