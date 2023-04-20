import React from 'react'
import { NavLink } from 'react-router-dom'
import { arr } from '../../HomePage/FromBlogHomePage/BlogFakedata'
import { useTranslation } from 'react-i18next';

export default function BlogNew() {
  const {t} = useTranslation();
  return (
    <div className=''>
    <h1 className='uppercase font-bold font-roboto text-[#867070]  mb-5'>{t('newPost')}</h1>
    {arr.map((item,i) => { 
        return <NavLink key={i}>
             <div className='flex items-center'>
            <img src={`${item.img}`} className='w-[40px] h-[40px] object-cover mb-2 mr-2 rounded-lg'/>
            <h1 className='text-[12px] font-serif'>{item.title}</h1>
        </div>
        </NavLink>
     })}
    </div>
  )
}
