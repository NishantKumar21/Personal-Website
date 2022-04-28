import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../assets/me.JPG'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (

    <div className='header'>
    <div className=' container header__container'>
      <h5>Hello I'am</h5>
      <h1>Nishant Kumar</h1>
      <h5 className="text-light">Frontend Developer</h5>
      <CTA />
      <HeaderSocial />
      <div className="me">
      <img src={me} alt="" />
      </div>

     <a href="#contact" className="scroll__down">Scroll Down</a>
     
    </div>
    </div>
  )
}

export default Header
