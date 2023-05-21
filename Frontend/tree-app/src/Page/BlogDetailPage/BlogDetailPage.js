import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BlogNew from '../BlogPage/BlogNew/BlogNew';
import { arr } from '../HomePage/FromBlogHomePage/BlogFakedata';

export default function BlogDetailPage() {
    const {id} = useParams();
    const [post,setPost] = useState({});
    const getProduct = (id) => { 
         for (let index = 0; index < arr.length; index++) {
                   if(id == arr[index].id){
                   return arr[index]
               }
             }
           }
       useEffect(() => { 
        let item = getProduct(id);
        setPost(item);
         getProduct(id)
      },[id])
  return (
    <div className='container mx-auto lg:px-24 md:px-24 sm:px-24 mb:px-5 pt-24 pb-10 bg-white'>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 mb:grid-cols-3 gap-10 '>
          <div className='col-span-3 shadow-lg p-10 animate__fadeInLeft animate__animated'>
                <h5 className='uppercase font-mono'>TYPE</h5>
                <h1 className='uppercase font-mono font-bold text-[20px] mb-5'>{post.title}</h1>
                <img className='h-[400px] w-full object-cover' src={`${post.img}`} />
                <p className='font-serif'>{post.des}</p>
          </div>
          <div className='col-span-1 lg:block md:hidden sm:hidden mb:hidden animate__fadeInRight animate__animated'><BlogNew/></div>
      </div>
    </div>
  )
}
