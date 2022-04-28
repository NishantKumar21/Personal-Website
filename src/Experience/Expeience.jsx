import React from 'react'
import './Expeience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Expeience() {
  return (
   <section id='Experience'>
   <h5 className='exp_heading'>What skills I have</h5>
   <h2 className='exp_heading'>My Experience</h2>


  <div className="container experience__container" >
  <div className="experience__frontend">
  <h3>Frontend Devlopment</h3>
  <div className='experience__content'>
  <article className="experience__details">
    <BsPatchCheckFill  className="experience__details-icons" />
    <div>
    <h4>HTML</h4>
    <small className='text-light'>Experienced</small>
    </div>
  </article>

  <article className="experience__details">
    <BsPatchCheckFill className="experience__details-icons"/>
    <div>
    <h4>CSS</h4>
    <small className='text-light'>Intermediate</small>
    </div>
  </article>

  <article className="experience__details">
    <BsPatchCheckFill className="experience__details-icons"/>
    <div>
    <h4>Javascript</h4>
    <small className='text-light'>Intermediate</small>
    </div>
  </article>

  <article className="experience__details">
    <BsPatchCheckFill className="experience__details-icons" />
    <div>
    <h4>React</h4>
    <small className='text-light'>Intermediate</small>
    </div>
  </article>

  <article className="experience__details">
    <BsPatchCheckFill className="experience__details-icons"/>
    <div>
    <h4>Bootstarp</h4>
    <small className='text-light'>Experienced</small>
    </div>
  </article>

  <article className="experience__details">
    <BsPatchCheckFill className="experience__details-icons" />
    <div>
    <h4>Tailwind</h4>
    <small className='text-light'>Intermediate</small>
    </div>
  </article>
  </div>
  </div>





  <div className="experience__tools">
  <h3>Tools and More</h3>
  <div className='experience__content'>
  <article className="experience__details">
    <BsPatchCheckFill className="experience__details-icons"/>
  <div>
  <h4>Dev Tools</h4>
  <small className='text-light'>Intermediate</small>
  </div>
  </article>

  <article className="experience__details">
    <BsPatchCheckFill className="experience__details-icons"/>
    <div>
    <h4>Git</h4>
    <small className='text-light'>Intermediate</small>
    </div>
  </article>

  <article className="experience__details">
    <BsPatchCheckFill className="experience__details-icons"/>
    <div>
    <h4>Github</h4>
    <small className='text-light'>Intermediate</small>
    </div>
  </article>

  <article className="experience__details">
    <BsPatchCheckFill className="experience__details-icons"/>
    <div>
    <h4>NPM</h4>
    <small className='text-light'>Intermediate</small>
    </div>
  </article>

  <article className="experience__details">
  <BsPatchCheckFill className="experience__details-icons"/>
  <div>
  <h4>UI/UX</h4>
  <small className='text-light'>Intermediate</small>
  </div>
</article> 

<article className="experience__details">
<BsPatchCheckFill className="experience__details-icons"/>
<div>
<h4>C++</h4>
<small className='text-light'>Experienced</small>
</div>
</article>
  </div>
  </div>
  </div>
   </section>
  )
}

export default Expeience
