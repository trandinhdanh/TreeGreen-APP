import React from 'react'
import "./NotFoundPage.scss"
import { NavLink } from 'react-router-dom'
export default function NotFoundPage() {
  return (
    <div className="wrapperNotFound font-popping">
          <div className='absolute top-1/4 left-[10%]'>
              <h1 className='text-[80px] font-momo'>Oops!</h1>
              <p>The page are you looking for doesn't exits or an other error occurred</p>
              <div className="buttons">
                  <NavLink to={'/'}><button className="btn btn1">Back to Home</button></NavLink>
              </div>
          </div>
    </div>
  )
}
