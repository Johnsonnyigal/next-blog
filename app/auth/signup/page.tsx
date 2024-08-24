"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const router = useRouter();

const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({email, password})
    })

    if(res.ok) {
        router.push("/auth/signin")
    }
    else {
        const data = await res.json();
        setError(data.message)
    }
    
}


  return (
    <div className="flex justify-center items-center min-h-[700px] bg-gray-100 text-gray-600">
      <form onSubmit={handleSubmit} className="flex flex-col p-6 bg-white rounded shadow-md w-full max-w-sm">
        <div className="flex flex-col mb-4">
          <label className="mb-2 text-md font-semibold ">
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              className="border border-gray-300 rounded px-3 py-2 mt-1 w-full"
            />
          </label>
          <label className="mb-2 text-md font-semibold">
            Password
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              className="border border-gray-300 rounded px-3 py-2 mt-1 w-full"
            />
          </label>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp