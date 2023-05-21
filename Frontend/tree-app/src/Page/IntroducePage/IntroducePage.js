import React from 'react'
import { useTranslation } from 'react-i18next'

export default function IntroducePage() {
  const {t} = useTranslation()
  return (
   <div>
     <div className="intro h-screen bg-[url('https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] w-full h-full bg-cover" id="gioiThieu">
    <div className="container mx-auto p-12">
      <div className="flex items-center justify-around lg:flex md:flex-col sm:flex-col mb:flex-col">
        <div className="introLeft w-50 text-center">
          <h1 className="text-3xl font-bold text-white lg:mt-32">
            {t('appIntro')}
          </h1>
          <p className="text-base text-white my-5">
           {t('desIntro')}
          </p>
          <button className="px-5 py-2 my-3 bg-[#245953] text-white rounded font-bold transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-[#34776e] duration-300">
          {t('btnIntro')}
          </button>
        </div>
        <div className="introRight w-50 ">
          {/* <div className=" w-full">
            <img
            className="object-contain"
            style={{height:"400px", width:"100%"}}
              src="https://res.cloudinary.com/dvzingci9/image/upload/v1664007780/My-portfolio/iPhone_12_Pro_Max_1_xilech.png?fbclid=IwAR3shyANOUmzxQ56gj3lFpdTCJSTchfvrA6Y8AYjrs-QwX1hOJcgoYs59QI"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  </div>
   </div>
  )
}
