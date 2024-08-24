"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from '@/components/Card';
import Loading from '../loading';


interface Blog {
  author: string;
  authorImg: string;
  content: string;
  date: Date; // or Date if you're handling it as a Date object
  heading: string;
  image: string;
  _id: string;
}


const BlogsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setIsLoading] = useState(false);
    const cardsPerPage = 6;

    const fetchBlogs = async () => {
      setIsLoading(true)
      const response = await fetch("/api/blog", {
        method: "GET",
      })
      const data = await response.json();
      setBlogs(data)
      setIsLoading(false)
    }
    useEffect(() => {
      fetchBlogs()
    }, [])

    console.log(blogs);
  
  
    //Calculate the indexes for the cards to be displayed on the current page
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = blogs.slice(indexOfFirstCard, indexOfLastCard)
  
    const totalPages = Math.ceil(blogs.length / cardsPerPage);
  
    const handlePrevPage = () => {
      if(currentPage > 1) {
        setCurrentPage(currentPage - 1)
      }
    }
  
    const handleNextPage = () => {
      if(currentPage < totalPages) {
        setCurrentPage(currentPage + 1)
      }
    }

    if(loading) {
      return <Loading/>
    }

  
    return (
      <main className="flex min-h-screen flex-col ">
        
      <div className="grid gap-8 ml-8 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        currentCards.map((blog) => (
          
          <Card key={blog._id} srcImage={blog.image} heading={blog.heading} content={blog.content} id={blog._id} />
          
        ))
      }
      </div>
  
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-4 bg-gray-300 text-black rounded-md disabled:opacity-50"
        >Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-black rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
      </main>
    )  
}

export default BlogsPage