import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { arr } from "./BlogFakedata";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function FromBlogHomePage() {
  
  return (
    <div className="fromBlog h-full">
      <div className="pb-20 pt-10 container mx-auto mb:px-5 md:px-24 lg:px-24">
        <div className="fromBlogTitle text-center mb-8">
          <h1 className="font-bold font-montserrat text-3xl">From  <span className="text-primary">Our Blog</span></h1>
          <p className="text-gray-400 font-serif text-[13px]">
            A perfect blend of creativity, energy,
            <br /> communication, happiness and love. Let us arrange a smile for
            you.
          </p>
        </div>
        <div className="swiperSlider">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // navigation
            // pagination={{ clickable: true }}
            // module={[Autoplay, Pagination, Navigation]}
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
                spaceBetween: 40,
              },
            }}
          >
            {arr.map((item,i) => { 
              return(
                <SwiperSlide key={i}>
                  <img className="" src={item.img}/>
                  <h1 className="text-center text-[15px] mt-[10px]">{item.title}</h1>
                  <p className="text-center text-[12px] text-gray-400">{item.des}</p>
                </SwiperSlide>
              )
             })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
