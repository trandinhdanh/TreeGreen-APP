import React, { useEffect, useState, useTransition } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{ Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { blogService } from "../../../services/blogService";
SwiperCore.use([Autoplay]);
export default function FromBlogHomePage() {
  const {t} = useTranslation()
  const [blog,setBlog] = useState([])
  useEffect(() => { 
    const fetchBlog = async () => { 
      try {
        const response = await blogService.getAllBlog()
        setBlog(response)
        console.log(response);
      } catch (error) {
        console.log(error)
      }
     }
     fetchBlog()
   },[])
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
            {blog?.map((item,i) => { 
              return(
                <SwiperSlide key={i} className="py-3">
                   <Link to={`/blog/${item.id}`}>
                  <div className="px-3 py-5  rounded-lg hover:shadow-md transition-all h-[300px]">
                    <img className="rounded-lg h-2/3 w-full object-cover" src={item.image} />
                    <h1 className="text-center text-[15px] mt-[10px] font-bold ">{item.title}</h1>
                    <p className="text-center text-[12px] text-gray-500">{item.shortDescription}</p>
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
