import React from 'react'
import BlogNew from './BlogNew/BlogNew';
import BlogList from './BlogList/BlogList';

export default function BlogPage() {
  return (
    <div className='container mx-auto lg:px-24 md:px-24 sm:px-24 mb:px-5 pt-24 pb-10 bg-white'>
      <h1 className='uppercase text-center font-bold font-montserrat my-5 text-primary text-[25px]'>Blog</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 mb:grid-cols-3 gap-10 '>
          <div className='col-span-1 lg:block md:hidden sm:hidden mb:hidden'><BlogNew/></div>
          <div className='col-span-3'>
              <BlogList/>
          </div>
      </div>
    </div>
  )
}
