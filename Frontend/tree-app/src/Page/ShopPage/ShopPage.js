import React, { useState } from 'react'
import FilterShopPage from '../../Components/FilterShopPage/FilterShopPage'
import { dataFake } from '../../Components/ProductHomPage/dataFake'
import ProductItem from '../../Components/ProductHomPage/ProductItem'
import {BiFilterAlt} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
export default function ShopPage() {
    const [isFilter , setIsFilter] = useState(false);
    let handleIsFilter = () => {
        setIsFilter((current) => !current);
      };
  return (
    <div className='z-10 my-16 '>
        <div className='w-full h-[150px] relative'>
            <img className='w-full h-full bg-cover' src='http://mauweb.monamedia.net/fiorello/wp-content/uploads/2018/05/Rublevoy_Steemit.png'/>
            <div className='font-mono  text-white text-center  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                <h1 className='uppercase font-bold mb-2'>Shop</h1>
                <button onClick={() => { handleIsFilter() }} className=' lg:hidden flex items-center text-[12px]'><BiFilterAlt/>Filler</button>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-10 container mx-auto mb:px-5 md:px-24 lg:px-24 pt-10'>
            <div className={`${isFilter ? "fixed top-0 left-0 bottom-0 p-5 z-30 bg-white md:block sm:block mb:block w-[300px]":"md:  sm:hidden mb:hidden"} lg:col-span-1 lg:block transition-all ease-in`}>
                <button onClick={() => { handleIsFilter() }} className={`${isFilter ? 'block absolute top-3 right-3 p-3' : "hidden"} hover:rotate-180 transition-all`}>  <AiOutlineClose className='text-[20px] text-[#867070]'/></button>
                <FilterShopPage/>
            </div>
            <div className='lg:col-span-3 md:col-span-12 sm:col-span-12 mb:col-span-12'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mb:grid-cols-2 gap-5'>
                   {dataFake.map((item,i) => { 
                        return <ProductItem key={i} data={item}/>
                    })}
                </div>
            </div>
        </div>

    </div>
  )
}
