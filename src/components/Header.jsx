import React from 'react'
import '../style/header.css'
import icon from '../image/header_icon.svg'
import down from '../image/arrow_down.svg'
import usa from '../image/usa.svg'
import img from '../image/header_img.png'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header className='header'>
      <div className="container">
        <nav className='header__list'>
            <ul>
              <NavLink to={"/shop"} >
                <li>
                 SHOP
                <img src={down} alt="" />
                </li>
              </NavLink>
                <NavLink to={"/about"} >
                  About
                </NavLink>
                <NavLink to={"/error"}>
                  <li>
                Fun stuff
                <img src={down} alt="" />
                </li>
                </NavLink>
                <NavLink to={"/bag"} >
                   <li>Find us</li>
                </NavLink>
               
            </ul>
              <NavLink to={"/"} >
                 <div className="header__img">
                <img src={img} alt="" />
            </div>

              </NavLink>
           
            <ul>
              <NavLink to={"/error"}>
                <li>
                    <img src={usa} alt="" />
                    USA
                    <img src={down} alt="" />
                </li>
              </NavLink >
                <NavLink to={"/error"}>
                    <li>CONTACT</li>
                </NavLink>
              <NavLink to={"/error"}>
                 <li>
                    LOG IN
                    <img src={icon} alt="" />
                </li>
              </NavLink>
               
            </ul>

        </nav>
      </div>
    </header>
  )
}

export default Header
