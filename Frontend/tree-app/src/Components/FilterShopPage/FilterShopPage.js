import React, { useState } from 'react'
import { Slider } from 'antd';
import "./FilterShopPage.scss"
import {arr} from "../../Page/HomePage/FromBlogHomePage/BlogFakedata"
import { NavLink } from 'react-router-dom';
import BlogNew from '../../Page/BlogPage/BlogNew/BlogNew';
export default function FilterShopPage() {
    const listBtn = ['all', 'popular', 'winter' , 'cactuses' ,'green']; 
    const [price,setPrice] = useState([0,1000000]);
    let timeout = 0.5;
    function onChange(value) {
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          console.log('Giá trị mới:', value);
          setPrice(value);
        }, 500);
        return value;
      }
  return (
    <>
        <div className=''>
            <h1 className='uppercase font-bold font-roboto text-[#867070]'>Danh Mục Sản Phẩm</h1>
            <div className=''>
                {listBtn.map((item,i) => { 
                    return <button key={i} className='block font-serif text-[14px] my-2 capitalize text-[#2E4F4F] transition-all hover:text-primary hover:font-bold hover:pl-3'>{item}</button>
                })}
            </div>
        </div>
        <div className='my-7'>
            <h1 className='uppercase font-bold font-roboto text-[#867070] mt-5'>lọc theo giá</h1>
            <div className=''>
                 <Slider range={{draggableTrack: true, }} max={1000000} defaultValue={price} onChange={onChange}/>
                <p className=''>Giá: <span className=' font-bold'>{price[0]} đ - {price[1]} đ</span></p>
            </div>
                <button className='px-3 py-1 mt-3 text-[12px] hover:scale-125 transition-all text-white font-roboto font-bold uppercase rounded-xl bg-[#867070]'>Lọc</button>
        </div>
        <BlogNew/>   
        
    </>
  )
}
