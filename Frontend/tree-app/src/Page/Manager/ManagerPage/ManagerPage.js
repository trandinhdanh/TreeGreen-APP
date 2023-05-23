import React, { useEffect, useState } from "react";

import {AiOutlineArrowRight} from 'react-icons/ai'


import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../../Redux/products/productList";
import LeftMangerPage from "./ComponentManagerPage/LeftMangerPage";
import RightManagerPage from "./ComponentManagerPage/RightManagerPage";
import { localStorageService } from "../../../services/localStorageService";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

export default function ManagerPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productList.allProduct); 
  const [user,setUser] = useState(localStorageService.get("USER"))
  useEffect(() => { 
    dispatch(getAllProduct());
   },[dispatch]) 

  return (
    <div className="w-full">
      <div className="headerManager font-roboto ">
        <h1 className="font-bold text-[20px] uppercase ">
          Welcome to Green Earth
        </h1>
        <p className="text-gray-500">Hello {user.shopName}, Welcome Back</p>
      </div>
      <div className="grid grid-cols-3 gap-5">
      <LeftMangerPage products={products}/>
      <RightManagerPage/>
      </div>
    </div>
  );
}
