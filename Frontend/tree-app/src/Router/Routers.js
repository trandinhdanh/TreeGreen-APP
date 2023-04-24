import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import HomePage from '../Page/HomePage/HomePage'
import LoginPage from '../Page/LoginPage/LoginPage'
import NotFoundPage from '../Page/NotFoundPage/NotFoundPage'
import ShopPage from '../Page/ShopPage/ShopPage'
import BlogPage from '../Page/BlogPage/BlogPage'
import IntroducePage from '../Page/IntroducePage/IntroducePage'
import DetailProductPage from '../Page/DetailProductPage/DetailProductPage'
import MainLayout from '../Layout/MainLayout'
import BlogDetailPage from '../Page/BlogDetailPage/BlogDetailPage'
import ManagerPage from '../Page/Manager/ManagerPage/ManagerPage'
import RegisterPage from '../Page/RegisterPage/RegisterPage'

export default function Routers() {
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
                </Route>
                <Route path='/login' element = {<LoginPage/>} />
                <Route path='/Register' element = {<RegisterPage/>} />
                <Route path='/manage' element = {<ManagerPage/>} />
                <Route path='/*' element = {<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
