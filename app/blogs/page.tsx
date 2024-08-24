"use client";
import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import Loading from '../loading';

interface Blog {
  author: string;
  authorImg: string;
  content: string;
  date: Date;
  heading: string;
  image: string;
  _id: string;
}

const BlogsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const cardsPerPage = 6;

  const fetchBlogs = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/blog", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await response.json();
      setBlogs(data);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = blogs.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(blogs.length / cardsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="grid gap-8 ml-8 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentCards.map((blog) => (
          <Card
            key={blog._id}
            srcImage={blog.image}
            heading={blog.heading}
            content={blog.content}
            id={blog._id}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-4 bg-gray-300 text-black rounded-md disabled:opacity-50"
        >
          Previous
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
  );
};

export default BlogsPage;
