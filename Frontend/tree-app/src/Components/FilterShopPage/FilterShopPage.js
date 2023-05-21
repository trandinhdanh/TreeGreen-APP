import React, { useState } from 'react'
import { Slider } from 'antd';
import "./FilterShopPage.scss"
import {arr} from "../../Page/HomePage/FromBlogHomePage/BlogFakedata"
import { NavLink } from 'react-router-dom';
import BlogNew from '../../Page/BlogPage/BlogNew/BlogNew';
import { useTranslation } from 'react-i18next';
export default function FilterShopPage({onFilterChange}) {
    const {t} = useTranslation();
    const listBtn = ['all', 'popular', 'winter' , 'cactuses' ,'green']; 
    const [searchValue, setSearchValue] = useState("");
    const [price,setPrice] = useState([0,5000000]);
    let timeout = 0.5;
    function onChange(value) {
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          setPrice(value);
        }, 500);
        return value;
      }
      const handleFilter = () => { 
        onFilterChange(price , searchValue)
       }
       const handleSearch = (e) => {
        setSearchValue(e.target.value);
        onFilterChange(price, e.target.value);
      };
  return (
    <>
        <div className=''>
          <input
              type="text"
              placeholder={t('Search')}
              value={searchValue}
              onChange={handleSearch}
              className="my-2 px-2 py-1 w-full border border-gray-300 rounded"
            />
            <h1 className='uppercase font-bold font-roboto text-primary'>{t('productPortfolio')}</h1>
            <div className=''>
                {listBtn.map((item,i) => { 
                    return <button key={i} className='block font-serif text-[14px] my-2 capitalize text-[#2E4F4F] transition-all hover:text-primary hover:font-bold hover:pl-3'>{item}</button>
                })}
            </div>
        </div>
        <div className='my-7'>
            <h1 className='uppercase font-bold font-roboto text-primary mt-5'>{t('filterPrice')}</h1>
            <div className=''>
                 <Slider range={{draggableTrack: true, }} max={5000000} defaultValue={price} onChange={onChange}/>
                <p className=''>Giá: <span className=' font-bold'>{price[0].toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})} - {price[1].toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})} </span></p>
            </div>
                <button className='px-5 py-2 mt-3 text-[12px] hover:scale-125 transition-all text-white font-roboto font-bold uppercase rounded-lg bg-primary' onClick={() => { handleFilter() }}>{t('filter')}</button>
        </div>
        {/* <BlogNew/>    */}
        
    </>
  )
}
