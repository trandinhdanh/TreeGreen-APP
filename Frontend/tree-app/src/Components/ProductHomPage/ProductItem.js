import React from 'react'
import { Image } from 'antd';
import "./ProductHomPage.scss"
import {BsCartPlus} from "react-icons/bs"
import { Link, NavLink } from 'react-router-dom';
export default function ProductItem(props) {
  return (
    <div className='overflow-hidden w-full h-full productItem my-3 hover:shadow-md transition-all rounded-lg'>
        <div className='productImg relative'>
             {/* <img className='' src={`${props.data.img}`} /> */}
             <Image width={'full'} height={'80'} src={`${props.data.img}`} className='w-full h-full rounded-lg'/>
             <div className='productItemIcon absolute bottom-0 left-[10px] p-5 text-primary hover:scale-125'><BsCartPlus className='text-[20px]'/></div>
        </div>
        <Link to={`/product/${props.data.id}`}>
        <div className='productContent text-center my-3 font-roboto'>
            <h1 className='capitalize text-[13px]'>{props.data.name}</h1>
            <h1 className='text-[13px] font-bold'>{props.data.price} VNĐ</h1>
        </div>
        </Link>
    </div>
  )
}
