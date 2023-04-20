import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
import { dataFake } from '../ProductHomPage/dataFake';
import { InputNumber } from 'antd';
import { useTranslation } from 'react-i18next';
export default function Cart({openCart,handleCartClick }) {
  const {t} = useTranslation();
  const [products, setProducts] = useState(dataFake);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleCheckboxChange = (productId) => {
    const productIndex = selectedProducts.indexOf(productId);
    if (productIndex === -1) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    }
  };
    const handleRemoveClick = (productId) => {
      setProducts(products.filter(product => product.id !== productId));
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    };

    const totalPrice = products.every(p => typeof p.price === 'number' && typeof p.quantity === 'number')
    ? products.reduce((acc, product) => acc + (product.quantity * product.price), 0)
    : 0;

  const onChange = (productId, quantity) => {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: quantity };
      }
      return product;
    }));
    console.log(products)
  };
  //Gián tiếp để truyền id vào onchange
  const handleProductChange = (productId) => (value) => {
    onChange(productId, value);
  };
   if(!openCart){
    return "";
   } 
  return (
    <div className={`cartModal ${openCart ? 'block' : 'hidden'} fixed top-0 left-0 right-0 h-full bg-[#00000037] `} >
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fff] p-10 rounded-lg
        h-[80%] w-[80%] p-8'> 
        <AiOutlineClose className='absolute top-8 right-8 text-[20px]' onClick={handleCartClick}/>
              <div className='contentCart text-left '>
                  <h1 className='font-bold text-[20px] font-roboto'>{t('Your Cart')}</h1>  
                 <div className='h-[400px] overflow-y-auto'>
                 <table className="w-full table-fixed">
                    <thead className="border-b-2">
                      <tr>
                        <th className="py-2 px-4 "> <input type="checkbox" className="mr-2" /></th>
                        <th className="py-2 px-4 ">{t('Product')}</th>
                        <th className="py-2 px-4 ">{t('Quantity')}</th>
                        <th className="py-2 px-4 ">{t('Price')}</th>
                        <th className="py-2 px-4 "></th>
                      </tr>
                    </thead>
                    <tbody className=''>
                      {products.map(product => (
                        <tr key={product.id} className="border-b-2">
                          <td className="py-2 px-4 "><input type="checkbox" checked={selectedProducts.indexOf(product.id) !== -1} onChange={() => handleCheckboxChange(product.id)} /></td>
                          <td className="py-2 px-4 "><img src={product.img} className='h-[100px] w-[100px] rounded-lg'/></td>
                          {/* <td className="py-2 px-4 "><input type="number" min="1" value={product.quantity} onChange={(e) => handleQuantityChange(product.id, e.target.value)} /></td> */}
                          <td className="py-2 px-4 "><InputNumber min={1} defaultValue={1} onChange={handleProductChange(product.id)} /></td>
                          <td className="py-2 px-4 ">{product.price}</td>
                          <td className="py-2 px-4 "><BsTrash className='hover:scale-125 transition-all text-[18px]' onClick={() => { handleRemoveClick(product.id) }} /></td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="">
                        <td colSpan="3" className="py-2 px-4  text-right font-bold">Tổng cộng</td>
                        <td className="py-2 px-4  font-bold">{totalPrice}</td>
                      </tr>
                    </tfoot>
                  </table>
                 </div>
              </div>
        </div>
    </div>
  )
}
