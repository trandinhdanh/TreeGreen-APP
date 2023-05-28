import React, { useEffect, useState } from 'react'
import { Image, message } from 'antd';
import "./ProductHomPage.scss"
import {BsCartPlus} from "react-icons/bs"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { openNotificationIcon } from '../NotificationIcon/NotificationIcon';
import { cartService } from '../../services/cartService';
import { localStorageService } from '../../services/localStorageService';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cart/cartSlice';
export default function ProductItem(props) {
  const [addingToCart, setAddingToCart] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState()
  useEffect(() => { 
    if (props.isLoggedIn) {
      const user = localStorageService.get("USER");
      setUser(user);
    }
   },[props.isLoggedIn])
  const handleClick = async () => {
    if (props.isLoggedIn && user.roles[0] === "USER") {
        setAddingToCart(true);

        const productID = props.data.id;

        await dispatch(addToCart({ userId: user.userDTO.id, productId: productID, quantity: 1 }));

        setAddingToCart(false);
      
    } else {
      message.error('Please log USER in to add products to the cart');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    }
  };
  return (
    <div className='overflow-hidden w-full h-full productItem my-3 hover:shadow-md transition-all rounded-lg'>
        <div className='productImg relative w-full'>
             <Image  style={{ height: '300px', width: '100%', objectFit: 'cover' }} src={`${props.data.image}`} className='object-cover'/>
             <button
      onClick={handleClick}
      className={`productItemIcon absolute bottom-0 left-[10px] p-5 text-primary hover:scale-125 ${addingToCart ? 'disabled' : ''}`}
      disabled={addingToCart}
    >
      <BsCartPlus className="text-[20px]" />
    </button>
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
