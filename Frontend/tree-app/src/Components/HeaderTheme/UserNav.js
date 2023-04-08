import React, { useState } from 'react'
import {FiUser} from 'react-icons/fi'
import {BsCart2} from "react-icons/bs"
import { Link } from 'react-router-dom';

export default function UserNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className='space-x-7 flex items-center justify-end relative'>
           <div className='cartIconHeader '> <BsCart2 className=' text-[25px]'/></div> 
           <div className='userIconHeader'> <FiUser className=' text-[25px]'/></div>     
       </div>
  )
}
