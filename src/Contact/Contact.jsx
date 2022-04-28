import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {

const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_t9j4ezo', 'template_02a54qj', form.current, '2aFKSRBr_QzpmVNhg')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};





  return (
   <section id='contact'>
   <h5>Get In Touch </h5>
   <h2>Contact Me</h2>

   <div className="container contact__container">
   <div className="contact__options">


   <article className="contact__option">
   <MdOutlineEmail className='contact__option-icon'/>
   <h4>Email</h4>
   <h5 className='email'>nishantkumar2019@iiitkottayam.ac.in</h5>
   <a href="mailto:nishantkumar2019@iiitkottayam.ac.in" target='_blank'>Send a Message</a>
   </article>

   <article className="contact__option">
   <AiOutlineLinkedin className='contact__option-icon'/>
   <h4>LinkedIn</h4>
   <h5>Nishant Kumar</h5>
   <a href="https://www.linkedin.com/in/nishant-kumar-7729141b6/" target='_blank'>Send a Message</a>
   </article>

   <article className="contact__option">
   <BsWhatsapp className='contact__option-icon'/>
   <h4>WhatsApp</h4>
   <h5>+918400921178</h5>
   <a href="https://wa.me/qr/GFDD2K6GDIO4C1" target="_blank">Send a Message</a>
   </article>
   </div>


   <form ref={form} onSubmit={sendEmail}>
   
   <input type="text" name='name' placeholder='Your Good Name' required />
   <input type="email" name='email' placeholder='Your Email'  required/> 
   <textarea name="message" id="message"  rows="7" placeholder='Your Message' required></textarea>
   <button type='submit' className='btn btn-primary'>Send Message</button>
   </form>
   </div>
   </section>
  )
}

export default Contact
