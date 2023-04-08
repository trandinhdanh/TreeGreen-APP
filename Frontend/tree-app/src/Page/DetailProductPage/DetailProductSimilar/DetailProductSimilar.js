import React, { useState } from 'react'
import { dataFake } from '../../../Components/ProductHomPage/dataFake'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import ProductItem from '../../../Components/ProductHomPage/ProductItem';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function DetailProductSimilar(props) {
        const renderProduct = dataFake.filter(item => props.data.type == "all" || props.data.type == item.type);
    console.log(renderProduct)
  return (
    <div className='mt-20'>
        <h1 className='font-bold font-roboto uppercase text-[20px]'>Sản phẩm tương tự</h1>
        <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            
            breakpoints={{
              350: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              650: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {dataFake.map((item,i) => { 
              return(
                <SwiperSlide key={i}>
                <ProductItem data={item}/>
                </SwiperSlide>
              )
             })}
          </Swiper>
    </div>
  )
}
