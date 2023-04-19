import React from 'react'
import CarouselHome from '../../Components/CarouselHomePage/CarouselHome'
import FromBlogHomePage from './FromBlogHomePage/FromBlogHomePage'
import JoinOurHomePage from './JoinOurHomePage/JoinOurHomePage'
import ProductHomPage from '../../Components/ProductHomPage/ProductHomPage'

export default function HomePage() {
  return (
    <div className='z-10 mt-16'>
        <CarouselHome/>
        <ProductHomPage/>
        <FromBlogHomePage/>
        <JoinOurHomePage/>
    </div>
  )
}
