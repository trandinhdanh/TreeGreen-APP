import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{ Pagination, Autoplay } from "swiper";
import {AiOutlineArrowRight} from 'react-icons/ai'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
SwiperCore.use([Autoplay]);
export default function LeftMangerPage({products}) {
  return (
    <div className="col-span-2">
    <div style={{ backgroundImage: `url('https://cdn.shopify.com/s/files/1/0662/5489/files/st2wide_1950x.jpg?v=1670360320')` }} className="bg-cover h-40 bg-center w-full rounded-xl p-6 text-white">
      <h1 className="font-bold uppercase">Create And Sell extraordiry product</h1>
      <div className="flex mt-5">
          <button className="px-3 py-2 text-[14px] bg-white text-primary rounded-lg mx-2">Explore More</button>
          <button className="px-3 py-2 text-[14px] bg-white text-primary rounded-lg mx-2">Top Seller</button>
      </div>
      
    </div>
    <div className="my-5">
        <div className="flex items-center justify-between">
        <h1 className="font-bold uppercase ">list product</h1>
        <Link to={'/manager/product'} className="font-bold uppercase flex text-primary items-center">see all <AiOutlineArrowRight className="ml-4"/> </Link>
        </div>
        <div className="swiperSlider">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          pagination={{ clickable: true }}
          module={[Autoplay, Pagination]}
          breakpoints={{
            350: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            650: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
        >
          {products?.map((item,i) => { 
            return(
              <SwiperSlide key={i} className="py-3">
                  <div className="h-[200px] text-center bg-[#e0e0e0] rounded-xl overflow-hidden">
                      <img className="h-[140px] w-full object-cover rounded-lg bg-center" src={`${item.image}`}/>
                      <h1 className="mt-2 text-[14px] ">{item.name}</h1>
                  </div>
              </SwiperSlide>
            )
           })}
        </Swiper>
      </div>
    </div>
    </div>
  )
}
