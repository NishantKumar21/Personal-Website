import React from 'react'
import './About.css'
import newp from '../assets/newp.png'
import {IoIosSchool} from 'react-icons/io'
import {FaSchool} from 'react-icons/fa'
import {FaProjectDiagram} from 'react-icons/fa'

function About() {
  return (


    <section id='about'>
    <h5 className='heading1'>Get to know</h5>
    <h2 className='heading2'>About me</h2>

    
    <div className=" about__container">
    <div className="about__me">
    <div className="about__me-image">
      <img src={newp} className="small" alt="" />
    </div>
    </div>
    <div className="about__content">
    <div className="about__cards">

    <article className='about__card'>
    <FaSchool className='about__icon' />
    <h5>College</h5>
    <small>IIITK</small>
    </article>

    <article className='about__card'>
    <IoIosSchool className='about__icon' />
    <h5>Dergree</h5>
    <small>B Tech CSE</small>
    </article>

    <article className='about__card'>
    <FaProjectDiagram className='about__icon' />
    <h5>Projects</h5>
    <small>10+ Completed</small>
    </article>
    </div>
<div className='para'>
<p >I am a front-end web developer. I can provide clean code . I also make the website more & more interactive with web animations . A responsive design makes your website accessible to all users, regardless of their device.</p>

</div>
   
    <div id='btns'>
    <a href="#contact" className='btn btn-primary' >Let's Talk</a>
    </div>
    
    </div>
    </div>
    </section>
  )
}

export default About
