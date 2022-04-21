import { FaMapMarkerAlt, FaArrowRight, FaPhone,FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa'
import { useSelector } from "react-redux";

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Footer = () => {

    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 1000,
          easing: 'ease'
        });
      })

    const travelState = useSelector((state) => state.travel)
  return (
    <div className={`footer ${travelState.nightMode ? 'l-dark' : 'l-light'}`}>
        <div className="container">
         <div data-aos='fade-right' className="our-brances">
             <h1 className='brance-title'>Our Brances</h1>
             <h5> <FaMapMarkerAlt color='rgb(255, 145, 0)'/> India </h5>
             <h5> <FaMapMarkerAlt color='rgb(255, 145, 0)'/> Russia </h5>
             <h5> <FaMapMarkerAlt color='rgb(255, 145, 0)'/> Canada </h5>
             <h5> <FaMapMarkerAlt color='rgb(255, 145, 0)'/> Turky </h5>
             <h5> <FaMapMarkerAlt color='rgb(255, 145, 0)'/> Canada </h5>
         </div>
         <div data-aos='zoom-in' className="quick-links">
             <h1 className='quick-links-title'>Quick Links</h1>
             <h5> <FaArrowRight color='rgb(255, 145, 0)'/> Home </h5>
             <h5> <FaArrowRight color='rgb(255, 145, 0)'/> Packages </h5>
             <h5> <FaArrowRight color='rgb(255, 145, 0)'/> Services </h5>
             <h5> <FaArrowRight color='rgb(255, 145, 0)'/> Review </h5>
             <h5> <FaArrowRight color='rgb(255, 145, 0)'/> Contact </h5>
             <h5> <FaArrowRight color='rgb(255, 145, 0)'/> Pricing </h5>
             <h5> <FaArrowRight color='rgb(255, 145, 0)'/> Blogs </h5>
            
         </div>
         <div data-aos='zoom-in' className="contact-info">
             <h1 className='contact-info-title'>Contact Info</h1>
             <h5> <FaPhone color='rgb(255, 145, 0)'/> +8801813824928 </h5>
             <h5> <FaPhone color='rgb(255, 145, 0)'/> +8801733930356 </h5>
             <h5> <FaEnvelope color='rgb(255, 145, 0)'/> munnaislamapu@gmail.com </h5>
             <h5> <FaMapMarkerAlt color='rgb(255, 145, 0)'/> Bangladesh, Kishorgonj </h5>
         </div>

         <div data-aos='fade-left' className="follow-us">
             <h1 className='follow-us-title'>Follow Us</h1>
             <h5> <FaFacebook color='rgb(255, 145, 0)'/>  FaceBook </h5>
             <h5> <FaTwitter color='rgb(255, 145, 0)'/> Twitter </h5>
             <h5> <FaInstagram color='rgb(255, 145, 0)'/> Instagram </h5>
             <h5> <FaLinkedin color='rgb(255, 145, 0)'/> LinkDin </h5>
             <h5> <FaPinterest color='rgb(255, 145, 0)'/> Pinterest </h5>
         </div>

        
         </div>
         <hr className='footer-line'/>
         <h4 className='owner-intro' >Practiced By <span style={{color: 'rgb(255, 145, 0)'}}> Web Munna</span> || MERN STACK Web Developer</h4>
    </div>
  )
}

export default Footer