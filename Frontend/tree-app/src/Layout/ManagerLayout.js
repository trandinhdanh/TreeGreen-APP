import React from 'react'
import { Outlet } from 'react-router-dom'
import SiteBarManager from '../Components/SiteBarManager/SiteBarManager'
export default function MainLayout() {
  return (
    <div className=" p-8">
        <div className='bg-[#e8e8e8] flex shadow-xl rounded-2xl'>
            <div className="">
              <SiteBarManager />
            </div>
            <div className=" px-7 py-4 w-full">
              <Outlet />
            </div>
        </div>
  </div>
  )
}
