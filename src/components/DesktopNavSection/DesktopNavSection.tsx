import { links } from '../utils'
import { Link } from 'react-scroll'

const DesktopNavSection = () => {
  return (
    <>
      <ul className='hidden md:flex'>
        {
          links.map(link => (
            <Link
              key={link.id}
              to={link.link}
              smooth
              duration={500}>
              <li
                className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                {link.link}
              </li>
            </Link>
          ))
        }
      </ul>
    </>
  )
}

export default DesktopNavSection