"use client"

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Card = ({srcImage, heading, content, id} : { srcImage: string, heading: string, content: string, id:any}) => {

    const router = useRouter();


    const handleClick = () => {
        router.push(`/blogs/${id}`)
    }

    return (
        <div className='flex flex-col items-start m-8 bg-white w-96 rounded-md hover:shadow-lg '>
        <div>
            <Image src={srcImage} height={250} width={400} alt="" />
        </div>
        <section className='m-4'>
        <div className='font-bold text-black'>
            {heading}
        </div>
        <div className='text-sm text-gray-400'>
            {content}
        </div>
        <div className='mt-4 text-sm font-semibold cursor-pointer' onClick={handleClick}>
        <Image src={"/arrow.png"} height={48} width={80} alt='' />
        </div>
        </section>
        </div>
  )
}

export default Card