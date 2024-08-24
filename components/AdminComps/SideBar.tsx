import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SideBar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
        <div className='px-2 sm:pl-14 py-3 border border-black'>
            <Image src={"/image.png"} width={120} height={120} alt=''/>
        </div>
        <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black space-y-4 '>
            <div className='flex items-center border border-black gap-3 font-medium ml-8 mr-1'>
              <Link href={"/admin/addBlog"} className='flex items-center gap-4 m-2'>
                <Image src={"/assets/add-icon.png" } height={32} width={32} alt=''/>
                <p>Add blogs</p>
              </Link>
            </div>
            <div className='flex items-center border border-black gap-3 font-medium ml-8 mr-1'>
              <Link href="/admin/blogList" className='flex items-center gap-4 m-2'>
                <Image src={"/assets/add-icon.png" } height={32} width={32} alt=''/>
                <p>BlogsList</p>
              </Link>
            </div>
            <div className='flex items-center border border-black gap-3 font-medium ml-8 mr-1'>
              <Link href={"/admin/subscriptions"} className='flex items-center gap-4 m-2'>
                <Image src={"/assets/add-icon.png" } height={32} width={32} alt=''/>
                <p>Subscriptions</p>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default SideBar