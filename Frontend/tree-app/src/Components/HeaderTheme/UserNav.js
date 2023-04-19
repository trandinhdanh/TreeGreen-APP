import React, { useState } from 'react'
import {FiUser} from 'react-icons/fi'
import {BsCart2} from "react-icons/bs"
import {TbWorld} from "react-icons/tb"
import { Link } from 'react-router-dom';
import './UserNav.scss'
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import Cart from '../Cart/Cart';
export default function UserNav() {
  const [open, setOpen] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpenLanguage(false)
  };
  const handleCartClick = () => {
    setOpenCart(false);
  }
  return (
    <div className=' flex items-center justify-end relative'>
           <div
          onClick={() => {
            setOpenLanguage(!openLanguage)
            setOpen(false);
          }}
          className={`p-1 rounded-[50%] hover:bg-gray-200 transition-all`}
        >
          <TbWorld className="text-[20px] " />
        </div>
         {/* DROPDOWN LANGUAGE */}
         <div className="dropdownLanguge relative ">
          <ul
            className={`${
              openLanguage ? '' : 'hidden'
            } animate__animated animate__fadeInUp bg-white dropdownLanguage rounded-md border border-gray-300 transition duration-500`}
          >
            <li
              onClick={() => handleChangeLanguage('vi')}
              className=" cursor-pointer  hover:bg-gray-200 transition duration-300"
            >
              <p className="hover:text-black py-2 m-0 transition duration-100">Tiếng Việt</p>
            </li>
            <li
             onClick={() => handleChangeLanguage('en')}
              className=" cursor-pointer  hover:bg-gray-200 transition duration-300"
            >
              <p className="hover:text-black py-2 m-0 transition duration-100">English</p>
            </li>
          </ul>
        </div>
         {/* CART SHOP */}
           <div className='cartIconHeader p-1 rounded-[50%] hover:bg-gray-200 transition-all mx-4' onClick={() => { 
              setOpenCart(!openCart);
              setOpen(false)
              setOpenLanguage(false)
            }
            }> <BsCart2 className=' text-[20px]'/></div> 
          <Cart openCart={openCart} handleCartClick={handleCartClick}/>

          {/* DROPDOWN INFOR */}
           <div className='userIconHeader p-1 rounded-[50%] hover:bg-gray-200 transition-all' onClick={() => {
            setOpen(!open);
            setOpenLanguage(false)
           }}> <FiUser className=' text-[20px]'/>
            
            </div>
        <div className="dropdownMenu relative">
          <ul
            className={`animate__animated animate__fadeInUp text-left   bg-white dropdown rounded-xl border border-gray-300 transition duration-500 ${
              open ? '' : 'hidden'
            } `}
          >
            <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
                <Link
                  to="/Register"
                  className="w-full text-black block h-full transition duration-100"
                >
                  <p>{t('Register')}</p>
                </Link>
            </li>
            
            
            <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
                <Link
                  to="/Login"
                  className="w-full block h-full transition duration-100"
                >
                 <p> {t('Login')}</p>
                </Link>
            </li>
           
            <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
              <p className="transition duration-100">{t('Become a seller')}</p>
            </li>
            {/* <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
              <p className="transition duration-100">
                {' '}
                {t('Organize the experience')}
              </p>
            </li> */}
            <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
              <p className="transition duration-100">{t('Help')}</p>
            </li>
          </ul>
        </div>     
       </div>
  )
}
