"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Loading from '@/app/loading';

interface Iparams {
    id: string;
}

interface Blog {
  author: string;
  authorImg: string;
  content: string;
  date: Date; 
  heading: string;
  image: string;
  _id: string;
}

const BlogDetailPage = ({ params }: { params: Iparams }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setIsLoading] = useState(true); // Default to true as it's loading initially

  const fetchSingleBlog = async () => {
    try {
      const res = await fetch(`/api/blog?id=${params.id}`);
      const data = await res.json();
      setBlog(data);
    } catch (error) {
      console.error('Failed to fetch blog:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleBlog();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!blog) {
    return <div>Blog not found</div>; // Handle the case where the blog is not found
  }

  return (
    <main className="flex flex-col items-start mt-12 m-4 md:grid md:grid-cols-3">
      <div className="w-full mt-6">
        <h1 className="font-bold text-2xl">{blog.heading}</h1>
        <div className="mt-4">
          <Image
            src={blog.image}
            height={400}
            width={500}
            alt={blog.heading}
            className="border border-l-8 border-t-0 border-b-4 border-r-0 border-yellow-400"
          />
        </div>
      </div>

      <div className="w-full mt-6">
        <h1 className="font-bold text-2xl">Article</h1>
        <section className="text-gray-700 text-semibold mt-8">
          {blog.content}
        </section>
      </div>
      <div>
        {/* Additional content */}
      </div>
    </main>
  );
};

export default BlogDetailPage;
