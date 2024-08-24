"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const ContactPage = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("email", data.email)
    formData.append("project", data.project)
    formData.append("budget", data.budget)
    formData.append("message", data.message)
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formData,
    });

    if (response.ok) {
      alert('Your message has been sent successfully.');
      setData({
        name: '',
        email: '',
        project: '',
        budget: '',
        message: '',
      });
    } else {
      alert('Failed to send the message.');
    }
  };

  return (
    <div className='flex flex-col items-center min-h-[700px] mt-8'>
      <h1 className='text-green-700 font-bold text-3xl'>CONTACT US</h1>
      <div className='mt-2 border border-yellow-500 w-full '></div>
      
      <h1 className='font-semibold text-gray-800'>Fill in the form below if you want to hire me.</h1>
      <h1 className='font-bold text-gray-900'>My Email: youngnewton12@gmail.com.</h1>
      <form onSubmit={handleSubmit} className='flex flex-col w-2/3 mt-8'>
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          value={data.name}
          onChange={handleChange}
          className='border p-2 mb-4'
          required
          autoComplete='off'
        />
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          value={data.email}
          onChange={handleChange}
          className='border p-2 mb-4'
          autoComplete='off'
          required
        />
        <input
          type='text'
          name='project'
          placeholder='Project Expectation'
          value={data.project}
          onChange={handleChange}
          className='border p-2 mb-4'
          autoComplete='off'
          required
        />
        <input
          type='text'
          name='budget'
          placeholder='Budget'
          value={data.budget}
          onChange={handleChange}
          className='border p-2 mb-4'
          autoComplete='off'
          required
        />
        <textarea
          name='message'
          placeholder='Additional Message'
          value={data.message}
          onChange={handleChange}
          className='border p-2 mb-4'
          autoComplete='off'
          required
        />
        <button type='submit' className='bg-green-700 text-white p-2'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
