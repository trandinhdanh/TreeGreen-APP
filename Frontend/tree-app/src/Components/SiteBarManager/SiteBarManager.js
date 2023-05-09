import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { IoBeerOutline,IoBagOutline,IoPersonOutline,IoPencil } from "react-icons/io5";
export default function SiteBarManager() {
    
  return (
    <div className="shadow-xl ">
      <div className="w-[200px] h-full ">
        <aside className="w-full " aria-label="Sidebar">
          <div className="overflow-y-auto px-3 bg-gray-50 rounded-xl  h-[90vh]">
            <ul className="py-10  h-[90vh] flex flex-col justify-between">
              <div className="space-y-2">
                <Link to="/">
                    <p className="font-playfair text-[18px] tracking-wider m-0 text-[#263A29]"> 
                     <span className="text-primary font-bold">GREEN </span> 
                        EARTH
                     </p>
                </Link>

                <li>
                  <Link
                    to="/manager"
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  hover:bg-gray-300 "
                  >
                    <AiOutlineHome className='text-[20px]'/>
                    <span className="flex-1 ml-3 whitespace-nowrap text-[14px]">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/manager/product"
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  hover:bg-gray-300 "
                  >
                    <IoBeerOutline className='text-[20px]'/>
                    <span className="flex-1 ml-3 whitespace-nowrap text-[14px]">Products</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/manager/order"
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  hover:bg-gray-300 "
                  >
                    <IoBagOutline className='text-[20px]'/>
                    <span className="flex-1 ml-3 whitespace-nowrap text-[14px]">Order</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/Manager/user"
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  hover:bg-gray-300 "
                  >
                    <IoPersonOutline className='text-[20px]'/>
                    <span className="flex-1 ml-3 whitespace-nowrap text-[14px]">User</span>
                  </Link>
                </li>
                
                <li>
                  <Link
                    to="/Manager/user"
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  hover:bg-gray-300 "
                  >
                    <IoPencil className='text-[20px]'/>
                    <span className="flex-1 ml-3 whitespace-nowrap text-[14px]">Blog</span>
                  </Link>
                </li>
              </div>

              <div>
                <li>
                  <Link
                    to="/Manager/profile"
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  hover:bg-gray-300 "
                  >
                  
                      <RiAccountCircleFill className=" text-[30px]" />     
                    <span className="flex-1 ml-3 whitespace-nowrap text-[20px] font-bold">
                      dinhdanh
                    </span>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}