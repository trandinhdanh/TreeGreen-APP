import React from 'react'
import {Image} from 'antd'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
export default function DetailProductImg(props) {
  return (
    <>
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><img className='w-full h-[500px] object-cover' src={`${props.data.image}`} /></SwiperSlide>
      <SwiperSlide><img className='w-full h-[500px] object-cover' src={`${props.data.image}`} /></SwiperSlide>
      <SwiperSlide><img className='w-full h-[500px] object-cover' src={`${props.data.image}`} /></SwiperSlide>
      <SwiperSlide><img className='w-full h-[500px] object-cover' src={`${props.data.image}`} /></SwiperSlide>
  
    </Swiper>
  </>
  )
}