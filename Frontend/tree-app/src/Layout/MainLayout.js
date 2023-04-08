import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterHomePage from '../Components/FooterTheme/FooterHomePage'
import HeaderTheme from '../Components/HeaderTheme/HeaderTheme'
export default function MainLayout() {
  return (
    <>
        <HeaderTheme/>
          <Outlet/>
        <FooterHomePage/>
    </>
  )
}
