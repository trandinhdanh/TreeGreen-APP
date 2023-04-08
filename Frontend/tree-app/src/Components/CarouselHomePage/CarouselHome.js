import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CarouseItem from './CarouseItem';
export default function CarouselHome() {
  return (
    <div className='container mx-auto mb:px-5 md:px-24 lg:px-24'>
        <Swiper
        modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      module ={[Autoplay, Pagination, Navigation]}
      
      >
        
      <SwiperSlide><CarouseItem imgSrc="http://mauweb.monamedia.net/fiorello/wp-content/uploads/2018/06/h3-slider-background-2.jpg" title="Send Tree Like You Mean It" des="Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will make it special cursus a sit amet mauris."/></SwiperSlide>
      <SwiperSlide><CarouseItem imgSrc="http://mauweb.monamedia.net/fiorello/wp-content/uploads/2018/06/h3-slider-background-3.jpg" title="Send Tree Like You Mean It" des="Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will make it special cursus a sit amet mauris."/></SwiperSlide>
      <SwiperSlide><CarouseItem imgSrc="http://mauweb.monamedia.net/fiorello/wp-content/uploads/2018/06/h3-slider-background.jpg" title="Send Tree Like You Mean It" des="Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will make it special cursus a sit amet mauris."/></SwiperSlide>
    </Swiper>
    </div>
  )
}
