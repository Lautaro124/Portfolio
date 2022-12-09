import React from 'react'

const About = () => {
  return (
    <div className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptates velit, et pariatur, enim officiis a dolorem quam exercitationem eum explicabo inventore voluptate soluta eos perspiciatis recusandae dolorum libero doloremque beatae. Iste inventore commodi hic aliquid amet necessitatibus rerum veritatis dolorem fuga eaque, saepe asperiores tempore harum assumenda voluptate autem.
        </p>
        <br />
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At maiores nemo ad quis eius atque, voluptatibus dignissimos iste, id similique ut a architecto facere, quam perferendis natus amet sunt enim debitis esse possimus sed! Laudantium libero distinctio rerum minima nihil vitae nobis! Explicabo vero eius assumenda asperiores laboriosam veritatis ex.
        </p>
      </div>
    </div>
  )
}

export default About