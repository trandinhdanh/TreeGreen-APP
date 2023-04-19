import React, { useState } from 'react'
import {dataFake} from './dataFake'
import ProductItem from './ProductItem'
import { useTranslation } from 'react-i18next'
const listBtn = ['all', 'popular', 'winter' , 'cactuses' ,'green']
console.log(dataFake)
export default function ProductHomPage() {
  const {t} = useTranslation();
  const [data,setData] = useState(dataFake);
  const [statusFilter,setStatusFilter] = useState("all");
  const filterProduct = (filter) => { 
      setStatusFilter(filter);
  }
  const renderProduct = data.filter(item => statusFilter == "all" || statusFilter == item.type);
  return (
    <div className=' h-full container mx-auto mb:px-5 sm:px-5 md:px-24 lg:px-24 my-10'>
        <div className='productContainer'>
            <div className='productListBtn'>
                <ul className='flex items-center mb:hidden block font-mono text-gray-800 text-sm font-bold'>
                   {listBtn.map((filter,i) =>{
                     return <li key={i} className='mr-5 hover:text-primary hover:text-[15px] transition-all'><button onClick={() => { filterProduct(filter) }} className='uppercase'>{filter}</button></li>
                   })}
                </ul>
            </div>
            <div className='grid mb:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                   {renderProduct.map((item,i) => { 
                      return <ProductItem key={i} data={item} />
                    })}
            </div>
        </div>
    </div>
  )
}
