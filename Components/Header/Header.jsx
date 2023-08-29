import React from 'react'
import "./Header.css"
import logo from '../../assets/logo2.jpg'

function Header() {
  return (
    <div className='header'>
        <div className='header-info'>
            <img src={logo} className='header-logo'/>
            <h1>location</h1>
        </div>
        <div className='header-menu-items'>
            <h1>Offers</h1>
            <h1>Help</h1>
            <h1>SignIn</h1>
            <h1>Cart</h1>
        </div>
    </div>
  )
}

export default Header