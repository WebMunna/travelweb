import ContactForm from "../components/ContactForm"

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Contact = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease'
    });
  })
  

  return (
    <div data-aos='fade-right' className='contact' id="contact">
    <h1 className='contact-title'> Contact Us </h1>
    <div className="contact-boxes">
        <ContactForm/>
    </div>
   </div>
  )
}

export default Contact