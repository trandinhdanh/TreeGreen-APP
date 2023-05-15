import React, { useTransition } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{ Pagination, Autoplay } from "swiper";
import { arr } from "./BlogFakedata";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
SwiperCore.use([Autoplay]);
export default function FromBlogHomePage() {
  const {t} = useTranslation()
  return (
    <div className="fromBlog h-full  ">
      <div className="pb-10  container mx-auto mb:px-5 md:px-24 lg:px-24">
        <div className="fromBlogTitle text-center mb-8">
          <h1 className="font-bold font-montserrat text-3xl text-black">{t('From')}  <span className="text-primary">{t('Our Blog')}</span></h1>
          <p className="text-black font-serif text-[13px]">
            {t('A perfect blend of creativity, energy,')}
            <br /> {t('communication')}</p>
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
                spaceBetween: 40,
              },
            }}
          >
            {arr.map((item,i) => { 
              return(
                <SwiperSlide key={i} className="py-3">
                   <Link to={`/blog/${item.id}`}>
                  <div className="px-3 py-5  rounded-lg hover:shadow-lg transition-all">
                    <img className="rounded-lg " src={item.img} />
                    <h1 className="text-center text-[15px] mt-[10px] font-bold ">{item.title}</h1>
                    <p className="text-center text-[12px] text-gray-500">{item.des}</p>
                  </div>
                  </Link>
                </SwiperSlide>
              )
             })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
