import React, { useState } from 'react'
import { Image, message } from 'antd';
import "./ProductHomPage.scss"
import {BsCartPlus} from "react-icons/bs"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { openNotificationIcon } from '../NotificationIcon/NotificationIcon';
import { cartService } from '../../services/cartService';
import { localStorageService } from '../../services/localStorageService';
export default function ProductItem(props) {

  const navigate = useNavigate();
  const handleClick = async () => {
    if (props.isLoggedIn) {

      try {
        const productID = props.data.id
        console.log("userID" ,localStorageService.get('USER').userDTO.id);
        console.log(productID);
       const reponse = await cartService.addToCart(localStorageService.get('USER').userDTO.id, productID, 1);
        // openNotificationIcon('success', 'Success', 'Add Product Success!');
      } catch (error) {
        console.log(error);
        openNotificationIcon('error', 'Error', 'Failed to add product to cart!');
      }
    } else {
      message.error('Please log in to add products to the cart');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    }
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
