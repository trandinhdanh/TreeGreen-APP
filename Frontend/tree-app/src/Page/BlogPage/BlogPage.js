import React from 'react'
import BlogNew from './BlogNew/BlogNew';
import BlogList from './BlogList/BlogList';

export default function BlogPage() {
  return (
    <div className='container mx-auto lg:px-24 md:px-24 sm:px-24 mb:px-5 pt-28 pb-10 bg-white'>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 mb:grid-cols-3 gap-10 '>
          <div className='col-span-1 lg:block md:hidden sm:hidden mb:hidden animate__fadeInLeft animate__animated'>
            <BlogNew/>
          </div>
          <div className='col-span-3 animate__fadeInRight animate__animated'>
              <BlogList/>
          </div>
      </div>
    </div>
  )
}
