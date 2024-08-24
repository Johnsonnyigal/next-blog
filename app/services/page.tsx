import React from 'react'
import Image from 'next/image'

const ServicePage = () => {
  return (
    <div className='flex flex-col items-center min-h-screen mt-8'>
      <h1 className='text-green-700 font-bold text-3xl'>OUR SERVICES</h1>
      <div className='mt-2 border border-yellow-500 w-full '></div>
      <div className='flex flex-col w-full mt-8 mx-4 gap-4 md:flex-row '>
        <Image className='mx-4 border border-l-8 border-t-0 border-b-4 border-r-0 border-green-500' src={"/assets/services.jpg"} height={500} width={800} alt=''/>
        <div className='mx-4 text-gray-700'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam illo nam modi cupiditate similique ullam qui quibusdam id rem. Recusandae distinctio sunt molestiae, eos accusamus autem delectus velit tempora quisquam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nulla enim adipisci rerum illum modi laudantium voluptatibus ratione reiciendis dolores molestiae quidem alias sed blanditiis fugiat dolorem voluptate provident. Quis.
        </div>
      </div>
    </div>
  )
}

export default ServicePage