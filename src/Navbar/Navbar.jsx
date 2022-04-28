import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookmarkHeart} from 'react-icons/bs'
import {FaProjectDiagram} from 'react-icons/fa'
import {AiOutlineContacts} from 'react-icons/ai'

function Navbar() {

  return (
    <nav>
    <a href="#"><AiOutlineHome /></a>
    <a href="#about"><AiOutlineUser /></a>
    <a href="#Experience"><BsBookmarkHeart /></a>
    <a href="#project"><FaProjectDiagram /></a>
    <a href="#contact"><AiOutlineContacts /></a>
    </nav>
  )
}

export default Navbar
