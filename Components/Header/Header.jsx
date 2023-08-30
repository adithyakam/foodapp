import React from 'react'
import "./Header.css"
import logo from '../../assets/logo.svg'
import offer from '../../assets/offers.svg'
import help from '../../assets/help.svg'
import profile from '../../assets/profile.svg'
import cart from '../../assets/cart.svg'


function Header() {
  return (
    <div className='header'>
        <div className='header-info'>
            <img src={logo} className='header-logo-main'/>
            <h1>shimoga</h1>
        </div>
        <div className='header-menu-items'>
            <div className='header-content'><img src={offer} className='header-logo'/> <h1>offer </h1></div>
            <div className='header-content'><img src={help} className='header-logo'/> <h1>help</h1></div>
            <div className='header-content'><img src={profile} className='header-logo'/> <h1>profile</h1></div>
            <div className='header-content'><img src={cart} className='header-logo'/> <h1>0</h1></div>
        </div>
    </div>
  )
}

export default Header