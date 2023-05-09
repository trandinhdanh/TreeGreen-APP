import React from 'react'
import {arr} from '../../HomePage/FromBlogHomePage/BlogFakedata'
import './BlogList.scss'
import { Link } from 'react-router-dom'
export default function BlogList() {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mb:grid-cols-1 gap-5'>
        {arr.map((item,i) => { 
            return <Link  key={i} to={`/blog/${item.id}`}>
                <div className='blogItem col-span-1 h-[300px] rounded-lg'>
                <img className='w-full h-2/3 object-cover rounded-lg' src={item.img} />
                <div className='p-2'>
                    <h1 className='mb-3 font-bold font-montserrat  text-[#292929] text-[12px]'>{item.title}</h1>
                    <p className=''>{item.des}</p>
                </div>
            </div>
            </Link>
         })}
    </div>
  )
}
