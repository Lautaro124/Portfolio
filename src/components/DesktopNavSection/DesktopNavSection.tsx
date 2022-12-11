import { links } from '../utils'
import { Link } from 'react-scroll'

const DesktopNavSection = () => {
  return (
    <>
      <ul className='hidden md:flex'>
          {
            links.map(link => (
              <li
                key={link.id}
                className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                  <Link 
                    to={link.link} 
                    smooth 
                    duration={500}>
                      {link.link}
                  </Link>
              </li>
            ))
          }
        </ul>
    </>
  )
}

export default DesktopNavSection