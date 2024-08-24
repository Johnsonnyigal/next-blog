import React from 'react';
import SideBar from '@/components/AdminComps/SideBar';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const AdminLayout = ({children} : {children: React.ReactNode }) => {
  return (
    <>
    <div className='flex'>
      <ToastContainer />
        <SideBar />
        <div className='flex flex-col w-full'>
          <div className='flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black' >
            <h3 className='font-medium'>Admin Panel</h3>
            <Image src={"/profile.webp"} height={50} width={50} alt='' className='rounded-full'/>
          </div>
        {children}
        </div>
    </div>
    </>
  )
}

export default AdminLayout