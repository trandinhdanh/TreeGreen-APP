import React from 'react'
import "./CarouseItem.scss"

export default function CarouseItem(props) {
  return (
    <div className='bannerCarousel h-[450px] '>
        <div className='bannerMain relative '>
          <div className='textCarousel content absolute left-[10%] top-1/4 w-[400px] mb:w-3/4 z-10'>
            <h1 className='mb:text-[30px] text-[45px] font-bold tracking-wide text-[#245953] animate__animated animate__fadeInUp '>{props.title}</h1>
            <p className='mt-5 text-[#867070] text-sm tracking-wider animate__animated animate__fadeInUp animate__delay-1s'>{props.des}</p>
          </div>
          <div className='imgCarousel z-0 '>
              <img className='w-full h-[450px]' src={`${props.imgSrc}`} />        
          </div>
        </div>
    </div>
  )
}
