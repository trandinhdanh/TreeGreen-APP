import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation, Pagination,Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CarouseItem from './CarouseItem';
SwiperCore.use([Autoplay]);
export default function CarouselHome() {
  return (
    <div className='container mx-auto mb:px-5 md:px-24 lg:px-24'>
      {/* comment test git */}
        <Swiper
        modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      module ={[Autoplay, Pagination, Navigation]}
      
      >
        
      <SwiperSlide><CarouseItem imgSrc="https://res.cloudinary.com/dtsfnikj0/image/upload/v1685087449/h3-slider-background-2_jnckkc.jpg" title="Send Tree Like You Mean It" des="Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will make it special cursus a sit amet mauris."/></SwiperSlide>
      <SwiperSlide><CarouseItem imgSrc="https://res.cloudinary.com/dtsfnikj0/image/upload/v1685087449/h3-slider-background-3_fsfgvb.jpg" title="Send Tree Like You Mean It" des="Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will make it special cursus a sit amet mauris."/></SwiperSlide>
      <SwiperSlide><CarouseItem imgSrc="https://res.cloudinary.com/dtsfnikj0/image/upload/v1685087449/h3-slider-background_vr4kur.jpg" title="Send Tree Like You Mean It" des="Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will make it special cursus a sit amet mauris."/></SwiperSlide>
    </Swiper>
    </div>
  )
}
