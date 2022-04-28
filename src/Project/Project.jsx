import React from 'react'
import './Project.css'
import pro1 from '../assets/pro1.jpg'
import img2 from '../assets/img2.png'
import imgfirst from '../assets/imgfirst.png'





function Project() {
  return (
   <section id='project'>
   <h5>My Recent Work</h5>
   <h2>Projects</h2>
   

   <div className="container projects__container">
   <article className="projects__item">
   <div className='projects__item-image'>
   <img src={imgfirst} alt="" />
   </div>
   <h3>SADAK</h3>
   <div className='projects__item-cta'>
   <a href="https://github.com/NishantKumar21/SADAK" className='btn'>Github</a>
   <a href="https://sadak.vercel.app/" className='btn btn-primary' target='_blank'>Try it</a>
   </div>
   </article>

   <article className="projects__item">
   <div className='projects__item-image'>
   <img src={img2} alt="" />
   </div>
   <h3>Portfolio Website</h3>
   <div className='projects__item-cta'>
   <a href="https://github.com/NishantKumar21/Portfolio-Website" className='btn'>Github</a>
   <a href="#" className='btn btn-primary' target='_blank'>try it</a>
   </div>
   </article>

   <article className="projects__item">
   <div className='projects__item-image'>
   <img src={pro1} alt="" />
   </div>
   <h3>This is project 3</h3>
   <div className='projects__item-cta'>
   <a href="https://github.com/NishantKumar21" className='btn'>Github</a>
   <a href="#" className='btn btn-primary' target='_blank'>Try it</a>
   </div>
   </article>

   
   </div>
   </section>
  )
}

export default Project
