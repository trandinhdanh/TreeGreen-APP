import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { InputNumber } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCartItems, removeFromCart, updateQuantity } from '../../Redux/cart/cartSlice';
import { localStorageService } from '../../services/localStorageService';

export default function Cart({ openCart, handleCartClick }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [user, setUser] = useState();
  
  useEffect(() => {
    if (isLoggedIn) {
      const user = localStorageService.get("USER");
      setUser(user);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (user && user.roles[0] !== "ADMIN" && user.roles[0] !== "SELLER") {
      dispatch(fetchCartItems(user.userDTO.id));
    }
  }, [dispatch, user]);

  const handleRemoveClick = async (productId) => {
    try {
      await dispatch(removeFromCart({ userId: user.userDTO.id, productId }));
      console.log('Product deleted successfully');
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  const handleProductChange = async (productId, quantity) => {
    try {
      await dispatch(updateQuantity({ userId: user.userDTO.id, productId, quantity }));
      console.log('Cart quantity updated successfully');
    } catch (error) {
      console.error('Failed to update cart quantity:', error);
    }
  };

  const handleClickOutsideCart = (event) => {
    if (event.target.classList.contains('cartModal')) {
      handleCartClick();
    }
  };

  if (!openCart) {
    return null;
  }

  return (
    <div
      className={`cartModal ${openCart ? 'block' : 'hidden'} fixed top-0 left-0 right-0 h-full bg-[#00000037]  `}
      onClick={handleClickOutsideCart}
    >
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fff] p-10 rounded-lg h-[80%] w-[80%] p-8 animate__animated animate__zoomIn">
        <AiOutlineClose className="absolute top-8 right-8 text-[20px]" onClick={handleCartClick} />
        <div className="contentCart text-left">
          <h1 className="font-bold text-[20px] font-roboto">{t('Your Cart')}</h1>
          <div className="h-[400px] overflow-y-auto">
            <table className="w-full table-fixed">
              <thead className="border-b-2">
                <tr>
                  <th className="py-2 px-4">{t('Product')}</th>
                  <th className="py-2 px-4">{t('Name')}</th>
                  <th className="py-2 px-4">{t('Quantity')}</th>
                  <th className="py-2 px-4">{t('Price')}</th>
                  <th className="py-2 px-4 text-center">
                    <button onClick={() => {}} className="">
                      {t('Remove All')}
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {isLoggedIn && user.roles[0] !== "ADMIN" && user.roles[0] !== "SELLER" ? (
                  cart?.cart?.cartItems?.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="py-2 px-4 text-[16px] font-roboto">
                        {t('No Products')}
                      </td>
                    </tr>
                  ) : (
                    <>
                      {cart?.cart?.cartItems?.map((product) => (
                        <tr key={product.id} className="border-b-2">
                          <td className="py-2 px-4">
                            <img src={product.product.image} className="h-[100px] w-[100px] object-cover rounded-lg" alt="Product" />
                          </td>
                          <td className="py-2 px-4">
                            {product.product.name}
                          </td>
                          <td className="py-2 px-4">
                            <InputNumber
                              min={1}
                              max={product.product.quantity}
                              defaultValue={product.quantity}
                              onChange={(value) => handleProductChange(product.product.id, value)}
                            />
                          </td>
                          <td className="py-2 px-4">
                            {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                          </td>
                          <td className="py-2 px-4">
                            <BsTrash
                              className="hover:scale-125 transition-all text-[18px] mx-auto"
                              onClick={() => handleRemoveClick(product.product.id)}
                            />
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan="2" className="py-2 px-4 text-right font-bold">
                          {t('Total Price')}
                        </td>
                        <td className="py-2 px-4 font-bold">
                          {cart?.cart?.totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        </td>
                        <td className="py-2 px-4 font-bold text-center">
                          <button
                            onClick={() => {
                              navigate('/payment');
                              handleCartClick();
                            }}
                            className="bg-primary text-white px-5 py-2 font-bold rounded-lg"
                          >
                            {t('Pay')}
                          </button>
                        </td>
                      </tr>
                    </>
                  )
                ) : (
                  <tr>
                    <td colSpan="5" className="py-2 px-4 text-[16px] font-roboto">
                      {t('You are not a buyer')}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
