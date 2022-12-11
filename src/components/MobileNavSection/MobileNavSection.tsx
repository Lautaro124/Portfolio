import { FC } from 'react'
import { links } from '../utils'
import { Link } from 'react-scroll'

type Props = {
  onClick: () => void
}

const MobileNavSection: FC<Props> = ({ onClick }) => {
  return (
    <>
    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
      {
        links.map(link => (
          <li
            key={link.id}
            className='px-4 cursor-pointer capitalize font-medium py-6 text-4xl'>
            <Link 
              onClick={onClick}
              to={link.link}
              smooth 
              duration={600}>
                {link.link}
            </Link>
          </li>
        ))
      }
    </ul>
    </>
  )
}

export default MobileNavSection