import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{ Pagination, Autoplay } from "swiper";
import { arr } from "../../HomePage/FromBlogHomePage/BlogFakedata";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../../Components/ProductHomPage/ProductItem";
import { getAllProduct } from "../../../Redux/products/productList";
SwiperCore.use([Autoplay]);
export default function ManagerPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productList.allProduct); 
  useEffect(() => { 
    dispatch(getAllProduct());
   },[dispatch]) 
  return (
    <div className="w-full">
      <div className="headerManager font-roboto ">
        <h1 className="font-bold text-[20px] uppercase ">
          Welcome to Green Earth
        </h1>
        <p className="text-gray-500">Hello dinhdanh, Welcome Back</p>
      </div>
      <div className="grid grid-cols-2 gap-5">
      <div>
      <div style={{ backgroundImage: `url('https://cdn.shopify.com/s/files/1/0662/5489/files/st2wide_1950x.jpg?v=1670360320')` }} className="bg-cover h-40 bg-center w-full rounded-xl p-6 text-white">
        <h1 className="font-bold uppercase">Create And Sell extraordiry product</h1>
        <div className="flex mt-5">
            <button className="px-3 py-2 text-[14px] bg-white text-primary rounded-lg mx-2">Explore More</button>
            <button className="px-3 py-2 text-[14px] bg-white text-primary rounded-lg mx-2">Top Seller</button>
        </div>
        
      </div>
      <div className="my-5">
          <h1 className="font-bold uppercase ">list product</h1>
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
                    <div className="h-[150px] text-center bg-[#e0e0e0] rounded-lg overflow-hidden">
                        <img className="h-[100px] w-full object-cover rounded-lg" src={`${item.image}`}/>
                        <h1 className="mt-2 text-[14px] ">{item.name}</h1>
                    </div>
                </SwiperSlide>
              )
             })}
          </Swiper>
        </div>
      </div>
      </div>
     

        <div className="">Cột 2</div>
      </div>
    </div>
  );
}
