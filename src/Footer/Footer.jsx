import React from 'react'
import './Footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

function Footer() {
  return (

    <div className='foot'>
    <footer>
    <a href="#" className='footer__logo'>NISHANT KUMAR</a>
    <ul className="permalinks">
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#Experience">Experience</a></li>
    <li><a href="#project">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
    <a href="https://www.linkedin.com/in/nishant-kumar-7729141b6/" target='_blank'><AiOutlineLinkedin /></a>

    <a href="https://www.instagram.com/_21_sherlock/" target='_blank'><BsInstagram /></a>

    <a href="https://twitter.com/Nishant_kmr_21" target='_blank'><BsTwitter /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Nishant Kumar. All rights reserved. </small>
    </div>
    </footer>
    </div>
  )
}

export default Footer
