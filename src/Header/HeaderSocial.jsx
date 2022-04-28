import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import{BsInstagram} from 'react-icons/bs'

function HeaderSocial() {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/nishant-kumar-7729141b6/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/NishantKumar21" target="_blank"><BsGithub/></a>
      <a href="https://www.instagram.com/_21_sherlock/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial

