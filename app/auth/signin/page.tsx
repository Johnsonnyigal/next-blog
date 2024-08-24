"use client"

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import LoginInfo from '@/components/LoginInfo';

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      // Redirect to home page after successful login
      router.push('/');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-gray-100 text-gray-600 font-semibold space-y-6'>
      <div>
        <LoginInfo />
      </div>

    <form onSubmit={handleSubmit} className='flex mb-4 flex-col p-6 bg-white rounded shadow-sm w-full max-w-sm'>
      <label>
        Email
      </label>
        <input 
          name='email' 
          type='email' 
          className=' text-gray-900 border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:border-green-500 focus:outline-none'
          required />
      <label>
        Password
      </label>
        <input
          name='password' 
          type='text' 
          className='border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:border-green-500 focus:outline-none text-gray-800'
          required />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button className='bg-green-500 mt-4 text-white py-2 px-4 rounded hover:bg-green-600' type='submit'>Sign in</button>
    </form>
    </div>
  );
}
