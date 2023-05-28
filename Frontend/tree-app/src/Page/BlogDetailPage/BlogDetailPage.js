import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogNew from '../BlogPage/BlogNew/BlogNew';
import { blogService } from '../../services/blogService';

export default function BlogDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const getBlogById = async (id) => {
    try {
      const response = await blogService.getBlogById(id);
      setPost(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogById(id);
  }, [id]);

  return (
    <div className="container mx-auto lg:px-24 md:px-24 sm:px-24 mb:px-5 pt-24 pb-10 bg-white">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 mb:grid-cols-3 gap-10">
        <div className="col-span-3 shadow-lg p-10 animate__fadeInLeft animate__animated">
          <p className='m-0 pb-2'>{post?.createBy} - {post?.createDate}</p>
          <h1 className="uppercase font-mono font-bold text-[20px] mb-5">{post?.title}</h1>
          <img className="h-[400px] w-full object-cover" src={post?.image} alt={post?.title} />
          <div dangerouslySetInnerHTML={{ __html: post?.content }} />
        </div>
        <div className="col-span-1 lg:block md:hidden sm:hidden mb:hidden animate__fadeInRight animate__animated">
          <BlogNew />
        </div>
      </div>
    </div>
  );
}
