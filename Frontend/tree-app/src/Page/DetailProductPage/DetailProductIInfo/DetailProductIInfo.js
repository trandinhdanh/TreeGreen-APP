import React, { useEffect, useState } from 'react'
import {Button,Space, InputNumber, message } from 'antd';
import { useDispatch } from 'react-redux';
import { localStorageService } from '../../../services/localStorageService';
import { cartService } from '../../../services/cartService';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../Redux/cart/cartSlice';

export default function DetailProductIInfo(props) {
  const [quantityItem , setQuantityItem] = useState(1)
  const [userID,setUserId] = useState()
const navigate = useNavigate();
const dispatch = useDispatch();
useEffect(() => { 
  if(props.isLoggedIn){
    setUserId(localStorageService.get('USER').userDTO.id)
  }
 },[userID])
const handleClick = async () => {
  if (props.isLoggedIn) {
      const productID = props.data.id;
      await dispatch(addToCart({ userId: userID, productId: productID, quantity: quantityItem }));
  } else {
    message.error('Please log in to add products to the cart');
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  }
};
  return (
    <div className='p-7'>
          <h1 className='font-bold font-roboto uppercase text-[20px]'>{props.data.name}</h1>
          <h1 className='= font-popping uppercase text-[20px] mb-3'>{props.data.price?.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</h1>
          <p className='font-roboto'>{props.data.description}</p>
         <div className='flex items-center my-3'>
              <InputNumber min={1} max={15} defaultValue={1} onChange={(value) => setQuantityItem(value)} />
              <button className='ml-3 px-2 py-1 rounded hover:bg-primary transition-all bg-primary text-white uppercase font-bold font-sans text-[15px]' onClick={handleClick}>Thêm vào giỏ</button>
         </div>
         <div className='space-y-2 text-gray-400 mt-5'>
            <h3 className='text-[12px]'>Mã Sản phẩm: <span className='text-[#000]'>{props.data.code}</span></h3>
            <h3 className='text-[12px]'>Loại Sản phẩm: <span className='text-[#000]'>{props.data.category?.name}</span></h3>
            <h3 className='text-[12px]'>Người bán: <span className='text-[#000]'>{props.data.createBy}</span></h3>
            <h3 className='text-[12px]'>Số Lượng: <span className='text-[#000]'>{props.data.quantity}</span></h3>
            <h3 className='text-[12px]'>Số lượt xem: <span className='text-[#000]'>{props.data.productView}</span></h3>
         </div>
    </div>
  )
}
// id(pin):21
// createBy(pin):"Developers"
// createDate(pin):"2023-04-24T14:59:51.000+00:00"
// modifiedBy(pin):"Developers"
// modifiedDate(pin):"2023-04-24T14:59:51.000+00:00"
// name(pin):"Đuôi rồng xanh"
// code(pin):"sp21"
// image(pin):"https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887731/riel6fkvwdgnjwmalyxx.jpg"
// price(pin):2704000
// quantity(pin):27
// productView(pin):1
// shortDescription(pin):"Một loại cây có lá xanh đặc biệt với hình dạng giống như đuôi rồng, thường được trồng để làm cảnh hoặc để trang trí ngoài trời."
// description(pin):"Là một loại cây có nguồn gốc từ Nam Mỹ, có tên khoa học là Epiphyllum spp. và thuộc họ Cactaceae. Cây có hoa màu trắng, đỏ hoặc hồng và thường mọc trên các nhánh thân dài và mảnh mai. Đuôi rồng xanh thường được trồng để làm cảnh trong sân vườn hoặc vườn trước nhà, và có thể được sử dụng để làm cây leo hoặc tạo hình trong các không gian cảnh quan."