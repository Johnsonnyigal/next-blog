"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'

const AddBlogPage = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    heading: "",
    content: "",
    category: "Startup",
    author: "Ben Dover",
    authorImg: "/profile.webp"
  })

  const onChangeHandler = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({...data , [name]: value}));
   
  }

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("heading", data.heading)
    formData.append("content", data.content)
    formData.append("category", data.category)
    formData.append("author", data.author)
    formData.append("authorImg", data.authorImg)
    //@ts-ignore
    formData.append("image", image);

    const res = await fetch("/api/blog", {
      method: "POST",
      body: formData
    })

    if(res.ok) {
      toast.success("Blog Added")
    }
    setData({
      heading: "",
      content: "",
      category: "Startup",
      author: "Ben Dover",
      authorImg: "/profile.webp"
    })
    setImage(false)
    
  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload thumbnail</p>
        <label htmlFor='image'>
          {/*@ts-ignore */}
          <Image className='mt-4' src={!image ? "/assets/upload.png" : URL.createObjectURL(image)} height={100} width={100} alt='' />
        </label>
         {/*@ts-ignore */}
        <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' name='image' hidden required />
        <p className='text-xl mt-4 '>Blog Title</p>
        <input onChange={onChangeHandler} value={data.heading} name='heading' className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type='text' placeholder='Type here' required/>
        <p className='text-xl mt-4 '>Blog Description</p>
        <textarea onChange={onChangeHandler} value={data.content} name='content' className='w-full sm:w-[500px] mt-4 px-4 py-3 border'  placeholder='write content here' rows={6} required/>
        <p className='text-xl mt-4'>Blog category</p>
        <select name='category' onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500' >
          <option value="Startup">Startup</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Technology">Technology</option>
        </select>
        <br />
        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white' >ADD</button>
      </form>
    </>
  )
}

export default AddBlogPage