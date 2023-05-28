import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../Redux/products/productList'
import {BsArrowRightShort} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { localStorageService } from '../../services/localStorageService'
import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton'
export default function ProductHomPage() {
  const {t} = useTranslation();
  const [userID , setUserID] = useState()
  const products = useSelector((state) => state.products.productList.allProduct); 
  const loading = useSelector((state) => state.products.productList.loading); 
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className=' h-full container mx-auto mb:px-5 sm:px-5 md:px-24 lg:px-24 my-10'>
        <div className='productContainer'>
            <div className='productListBtn'>
               <Link to='/shop'> <h1 className='text-primary font-bold font-mono flex items-center uppercase'>{t('All Product')}<BsArrowRightShort className='ml-2'/></h1></Link>
            </div>
            <div >
              {loading ? (
                <>
                  <LoadingSkeleton />
                </>
              ) : (
                <div className="grid mb:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {products?.slice(0, 8).map((item, i) => {
                    return <ProductItem key={i} data={item}  isLoggedIn={isLoggedIn} />;
                  })}
                </div>
              )}
            </div>

        </div>
    </div>
  )
}
