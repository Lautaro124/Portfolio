import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element name='About' className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
          My name is Lautaro Gonzalez, FrontEnd and Mobile developer. I mostly code in React.<br/>
          I love programming, especially when I learn new things, it's a constant innovation.
        </p>
        <br />
        <p className='text-xl'>
        Mi path began a little more than 5 years ago on high school. I started studying C, then I moved onto Javascript, along with a lot of technical knowledge.<br/>
        Then came Henry, a bootcamp that brought me many web design and backend developing tools.<br/>
        In 2021 I prioritized React and that got me into my first formal working experience, in which I've been for a year now.<br/>
        Those who shared this path with me had described me as proactive, always looking to learn more. I'm curious and I enjoy working in a team, always looking for positive interactions.
        </p>
      </div>
    </Element>
  )
}

export default About