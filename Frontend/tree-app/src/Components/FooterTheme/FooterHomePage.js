import React from 'react'
import "./FooterHomePage.scss"
import {ImLocation} from "react-icons/im"
import {AiTwotonePhone} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
import {FaInstagramSquare} from "react-icons/fa"
import ScrollToTop from 'react-scroll-to-top'

export default function FooterHomePage() {
  return (
    <footer className='footer  bg-[#e9e8e8] rounded-t-[50px]'>
       <ScrollToTop
        smooth
        top={200}
        height={20}
        width={40}
        className="shadow-xl"
      />
        <div className='grid mb:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-7 container mx-auto mb:mx-5 md:px-24 lg:px-24 '>
            <div className='col'>
                <img className='w-[170px]' src='http://mauweb.monamedia.net/fiorello/wp-content/uploads/2018/06/logo-fiorello.png' />
                <p>Thiên niên luôn mang lại cho cuộc sống của chúng ta thêm muôn màu. Hãy đến với chúng tôi để tận hưởng được nhiều thêm những giá trị mới...</p>
            </div>
            <div className='col'>
                <p className='flex items-center'><ImLocation className='mr-2 text-base'/>  Trường Đại học Nông Lâm thành phố HCM</p>
                <p className='flex items-center'><AiTwotonePhone className='mr-2 text-base' /> 0123456789</p>
                <p className='flex items-center'><MdEmail className='mr-2 text-base'/> greenearth@gmail.com</p>
                <p className='flex items-center'><FaInstagramSquare className='mr-2 text-base' /> greenearth</p>
            </div>
            <div className='col mb:hidden'>
                <p className='flex items-center'><ImLocation className='mr-2 text-base'/>  Trường Đại học Nông Lâm thành phố HCM</p>
                <p className='flex items-center'><AiTwotonePhone className='mr-2 text-base' /> 0123456789</p>
                <p className='flex items-center'><MdEmail className='mr-2 text-base'/> greenearth@gmail.com</p>
                <p className='flex items-center'><FaInstagramSquare className='mr-2 text-base' /> greenearth</p>
            </div>
            <div className='col mb:hidden'>
                    <p className='text-base font-bold font-serif'>Đăng kí</p>
                    <p>Đăng kí để nhận thông tin mới nhất từ chúng tôi</p>
                <form>   
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <input type="search" id="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 " placeholder="Nhập email" required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-primary font-medium rounded-lg text-sm px-4 py-2 ">Gửi</button>
                  </div>
                </form>
            </div>
        </div>
        <div className='py-3 mt-3 items-center text-center border-t-[#666] border-[1px]'>
          <p className='text-sm'>Designed by Dinh Danh & Van Hieu</p>
        </div>
    </footer>
  )
}
