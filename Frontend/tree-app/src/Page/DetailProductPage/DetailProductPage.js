import React, { useEffect, useState } from "react";
import {Link, useParams } from 'react-router-dom'
import {BsArrowLeftCircle,BsArrowRightCircle} from "react-icons/bs"
import { dataFake } from "../../Components/ProductHomPage/dataFake";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { Pagination, Navigation } from "swiper";
import DetailProductImg from "./DetailProductImg/DetailProductImg";
import DetailProductIInfo from "./DetailProductIInfo/DetailProductIInfo";
import DetailProductSimilar from "./DetailProductSimilar/DetailProductSimilar";

export default function DetailProductPage() {
 const {id} = useParams();
 const [itemProduct,setItemProduct] = useState({});
 const getProduct = (id) => { 
      for (let index = 0; index < dataFake.length; index++) {
                if(id == dataFake[index].id){

                return dataFake[index]
            }
          }
        }
    useEffect(() => { 
     let item = getProduct(id);
      setItemProduct(item);
      getProduct(id)
   },[id])
  return (
    <div className="pt-24  container mx-auto lg:px-24 md:px-24 sm:px-24 mb:px-5 pb-10">
        <div className="flex justify-between my-3">
            <h1 className="capitalize text-[15px] text-gray-400 font-montserrat ">Sản phẩm</h1>
            <div className="flex items-center space-x-3 text-gray-400 text-[22px]">
              <Link to={`/product/${id-1}`}>
                  <BsArrowLeftCircle className="hover:text-primary transition-all"/>
              </Link>
              <Link to={`/product/${parseInt(id)}`}>
                  <BsArrowRightCircle  className="hover:text-primary transition-all"/>
              </Link>
            </div>
        </div>
        <div className="grid grid-cols-12"> 
            <div className="lg:col-span-5 md:col-span-6 sm:col-span-12 mb:col-span-12"><DetailProductImg data={itemProduct} /></div>
            <div className="col-span-7 md:col-span-6 sm:col-span-12 mb:col-span-12"><DetailProductIInfo data={itemProduct}/></div>
        </div>
        <DetailProductSimilar data={itemProduct}/>
  </div>
  );
}
