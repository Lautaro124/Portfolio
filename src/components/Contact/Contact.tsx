import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Element } from 'react-scroll'


const Contact: FC = () => {
  const [ t ] = useTranslation('global')  

  return (
    <Element
      name='Contact'
      className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'
    >
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            { t('nav.contact') }
          </p>
          <p className='py-6'>
           { t('contact.explain')  }
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <form
            className='flex flex-col w-full md:w-1/2'
            action='https://getform.io/f/41b33365-816e-4c56-9a15-5313dc716694'
            method='post'
          >
            <input
              type='text'
              name='Name'
              placeholder={ t('contact.name')   as string }
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <input
              type='text'
              name='email'
              placeholder={ t('contact.email')   as string }
              className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <textarea
              name='message'
              rows={10}
              placeholder={ t('contact.message')   as string }
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
            </textarea>
            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Contact me
            </button>
          </form>
        </div>
      </div>
    </Element>
  )
}

export default Contact