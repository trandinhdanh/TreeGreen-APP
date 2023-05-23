import React, { useEffect, useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
import { dataFake } from '../ProductHomPage/dataFake';
import { InputNumber } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItemFromCart, updateItemQuantity } from '../../Redux/cart/cartList';
import { useNavigate } from 'react-router-dom';
export default function Cart({openCart,handleCartClick }) {
  const {t} = useTranslation();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartList.items); 
  // useEffect(() => { 
  //   dispatch(getAllProduct());
  //  },[dispatch])

    const handleRemoveClick = (productId) => {
     dispatch(removeItemFromCart(productId));
    };
    const handleRemoveAllClick = () => {
      dispatch(clearCart());
     };
 
    const totalPrice = cart.every(p => typeof p.price === 'number' && typeof p.quantity === 'number')
    ? cart.reduce((acc, product) => acc + (product.quantity * product.price), 0)
    : 0;
     
  const handleProductChange = (productId, quantity) => {
    dispatch(updateItemQuantity({ id: productId, quantity }));
  }
  const handleClickOutsideCart = (event) => {
    if (event.target.classList.contains('cartModal')) {
      handleCartClick();
    }
  };
   if(!openCart){
    return "";
   } 
  return (
   <div className={`cartModal ${openCart ? 'block' : 'hidden'} fixed top-0 left-0 right-0 h-full bg-[#00000037]  animate__animated animate__fadeIn`}
    onClick={handleClickOutsideCart} >
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fff] p-10 rounded-lg
        h-[80%] w-[80%] p-8'> 
        <AiOutlineClose className='absolute top-8 right-8 text-[20px]' onClick={handleCartClick}/>
              <div className='contentCart text-left '>
                  <h1 className='font-bold text-[20px] font-roboto'>{t('Your Cart')}</h1>  
                 <div className='h-[400px] overflow-y-auto'>
                 <table className="w-full table-fixed">
                    <thead className="border-b-2">
                      <tr>
                        <th className="py-2 px-4 ">{t('Product')}</th>
                        <th className="py-2 px-4 ">{t('Quantity')}</th>
                        <th className="py-2 px-4 ">{t('Price')}</th>
                        <th className="py-2 px-4 text-center"><button onClick={handleRemoveAllClick} className=''>{t('Remove All')}</button></th>
                      </tr>
                    </thead>
                    {
                      cart.length === 0 
                      ? <p className='text-[16px]  font-roboto'>{t('No Products')}</p>
                      :  <>
                        <tbody className=''>
                      {cart.map(product => (
                        <tr key={product.id} className="border-b-2">
                          <td className="py-2 px-4 " ><img src={product.image} className='h-[100px] w-[100px] object-cover rounded-lg' /></td>
                          <td className="py-2 px-4 "><InputNumber min={1} defaultValue={product.quantity} onChange={(value) => handleProductChange(product.id, value)}/></td>
                          {/* <td className="py-2 px-4 "><InputNumber min={1} defaultValue={product.quantity} /></td> */}
                          <td className="py-2 px-4 ">{product.price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</td>
                          <td className="py-2 px-4"><BsTrash className='hover:scale-125 transition-all text-[18px] mx-auto' onClick={() => { handleRemoveClick(product.id) }} /></td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className=''>
                      <tr className="">
                        <td colSpan="2" className="py-2 px-4  text-right font-bold">Tổng cộng</td>
                        <td className="py-2 px-4  font-bold">{totalPrice.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}</td>
                        <td className="py-2 px-4  font-bold text-center">
                            <button onClick={() => { navigate("/payment"); handleCartClick() }} className="bg-primary text-white px-5 py-2 font-bold rounded-lg">{t('Pay')}</button>
                        </td>
                      </tr>
                     
                    </tfoot>
                    </>
                    }
                    
                  </table>
                 </div>
              </div>
        </div>
    </div>
  )
}
