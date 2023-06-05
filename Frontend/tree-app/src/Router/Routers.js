import React, { useEffect } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import HomePage from '../Page/HomePage/HomePage'
import LoginPage from '../Page/LoginPage/LoginPage'
import NotFoundPage from '../Page/NotFoundPage/NotFoundPage'
import ShopPage from '../Page/ShopPage/ShopPage'
import BlogPage from '../Page/BlogPage/BlogPage'
import IntroducePage from '../Page/IntroducePage/IntroducePage'
import DetailProductPage from '../Page/DetailProductPage/DetailProductPage'
import MainLayout from '../Layout/MainLayout'
import ManagerLayout from '../Layout/ManagerLayout'
import BlogDetailPage from '../Page/BlogDetailPage/BlogDetailPage'
import ManagerPage from '../Page/Manager/ManagerPage/ManagerPage'
import RegisterPage from '../Page/RegisterPage/RegisterPage'
import PaymentPage from '../Page/PaymentPage/PaymentPage'
import ProductManagerPage from '../Page/Manager/ProductManagerPage/ProductManagerPage'
import RegisterSellerPage from '../Page/RegisterSellerPage/RegisterSellerPage'
import UserPage from '../Page/Manager/UserPage/UserPage'
import UserPageRouter from '../Router/Request/UserPage'
import BlogManagerPage from '../Page/Manager/BlogManagerPage/BlogManagerPage'
import CategoryManager from '../Page/Manager/CategoryManager/CategoryManager'
import ProductUpdateManagerPage from '../Page/Manager/ProductManagerPage/ProductUpdateManagerPage/ProductUpdateManagerPage'
import ProductNewManagerPage from '../Page/Manager/ProductManagerPage/ProductNewManagerPage/ProductNewManagerPage'
import NewBlogManagerPage from '../Page/Manager/BlogManagerPage/NewBlogManagerPage/NewBlogManagerPage'
import OrderPage from '../Page/OrderPage/OrderPage'
import OderManagerPage from '../Page/Manager/OderManagePage/OderManagerPage'
import StatisticalManagerPage from '../Page/Manager/StatisticalManagerPage/StatisticalManagerPage'
import ProfileUpdatePage from '../Page/ProfileUpdatePage/ProfileUpdatePage'
import { useSelector } from 'react-redux'
import UpdateBlogManagerPage from '../Page/Manager/BlogManagerPage/UpdateBlogManagerPage/UpdateBlogManagerPage'

export default function Routers() {
  const auth = useSelector((state) => state.auth.isLoggedIn);
    useEffect(() => { 
        console.log(auth);
     },[])
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<MainLayout/>}>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/shop' element={<ShopPage/>} />
                    <Route path='/blog' element={<BlogPage/>} />
                    <Route path='/introduce' element={<IntroducePage/>} />
                    <Route path='/product/:id' element={<DetailProductPage/>} />
                    <Route path='/blog/:id' element={<BlogDetailPage/>} />
                    <Route path='/payment' element={<PaymentPage/>} />
                    <Route path='/order' element={<OrderPage/>} />
                    <Route path='/profile/:id' element={<ProfileUpdatePage/>} />
                </Route>
                
                <Route path='/manager' element = {<ManagerLayout/>} >
                    <Route path="/manager" element={<ManagerPage/>} />
                    <Route path="/manager/product" element={<ProductManagerPage/>} />
                    <Route path="/manager/product-add" element={<ProductNewManagerPage/>} />
                    <Route path="/manager/product-update/:id" element={<ProductUpdateManagerPage/>} />
                    <Route path="/manager/order" element={<OderManagerPage/>} />
                    <Route path="/manager/user" element={<UserPage/>} />
                    <Route path="/manager/blog" element={<BlogManagerPage/>} />
                    <Route path="/manager/blog-add" element={<NewBlogManagerPage/>} />
                    <Route path="/manager/blog-update/:id" element={<UpdateBlogManagerPage/>} />
                    <Route path="/manager/category" element={<CategoryManager/>} />
                    <Route path="/manager/statistical" element={<StatisticalManagerPage/>} />
                </Route>

                <Route path='/login' element = {<LoginPage/>} />
                <Route path='/register' element = {<RegisterPage/>} />
                <Route path='/registerSeller' element = {<RegisterSellerPage/>} />
                
                <Route path='/*' element = {<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
