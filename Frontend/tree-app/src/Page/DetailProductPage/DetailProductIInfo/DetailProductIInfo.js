import React from 'react'
import {Button,Space, InputNumber } from 'antd';

export default function DetailProductIInfo(props) {
  const onChange = (value) => {
  console.log('changed', value);
};
  return (
    <div className='p-7'>
          <h1 className='font-bold font-popping uppercase text-[20px]'>{props.data.name}</h1>
          <h1 className='= font-popping uppercase text-[20px] mb-3'>{props.data.price} VNĐ</h1>
          <p className='font-roboto'>{props.data.des}</p>
         <div className='flex items-center my-3'>
              <InputNumber min={1} max={15} defaultValue={3} onChange={onChange} />
              <button className='ml-3 px-2 py-1 rounded hover:bg-primary transition-all bg-primary text-white uppercase font-bold font-sans text-[15px]'>Thêm vào giỏ</button>
         </div>
         <div className='space-y-2 text-gray-400 mt-5'>
            <h3 className='text-[12px]'>Mã Sản phẩm: <span className='text-[#000]'>{props.data.id}</span></h3>
            <h3 className='text-[12px]'>Danh Mục: <span className='text-[#000]'>{props.data.type}</span></h3>
            <h3 className='text-[12px]'>Người bán: <span className='text-[#000]'>{props.data.type}</span></h3>
         </div>
    </div>
  )
}
