import React from 'react'
import { Image } from 'antd';
import "./ProductHomPage.scss"
import {BsCartPlus} from "react-icons/bs"
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../Redux/cart/cartList';
export default function ProductItem(props) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addItemToCart(props.data));
  };
  return (
    <div className='overflow-hidden w-full h-full productItem my-3 hover:shadow-md transition-all rounded-lg'>
        <div className='productImg relative w-full'>
             <Image  style={{ height: '300px', width: '100%', objectFit: 'cover' }} src={`${props.data.image}`} className='object-cover'/>
             <button onClick={handleClick} className='productItemIcon absolute bottom-0 left-[10px] p-5 text-primary hover:scale-125'><BsCartPlus className='text-[20px]'/></button>
        </div>
        <Link to={`/product/${props.data.id}`}>
        <div className='productContent text-center my-3 font-roboto'>
            <h1 className='capitalize text-[13px]'>{props.data.name}</h1>
            <h1 className='text-[13px] font-bold'>{props.data.price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</h1> 
        </div>
        </Link>
    </div>
  )
}
