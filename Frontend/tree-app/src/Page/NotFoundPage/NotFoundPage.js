import React from 'react'
import "./NotFoundPage.scss"
import { NavLink } from 'react-router-dom'
export default function NotFoundPage() {
  return (
    <div className="wrapperNotFound font-popping">
    <h1>404</h1>
    <p>The page are you looking for doesn't exits or an other error occurred</p>
    <div className="buttons">
        <NavLink to={'/'}><button className="btn btn1">Back to Home</button></NavLink>
    </div>
</div>
  )
}
