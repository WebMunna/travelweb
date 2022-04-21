import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useRef } from 'react'
import { useSelector } from 'react-redux';
import ServiceBox from '../components/ServiceBox'

const Services = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease'
    });
  })

  const travelState = useSelector((state) => state.travel)

  const services = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })}

    if (travelState.serviceBtn){
      scrollToSection(services)
      // console.log('scroll trigered')
    }
  
  return (
    <div data-aos='fade-left' ref={services} className='services' id='services'>
    <h1 className='service-title'> Our Services </h1>
    <div className="service-boxes">
       <ServiceBox icon={"1"} number={"01"} text={"Affordable Hotels"}/>
       <ServiceBox icon={"2"} number={"02"} text={"Fastest Travel"}/>
       <ServiceBox icon={"3"} number={"03"} text={"Food And Drinks"}/>
       <ServiceBox icon={"4"} number={"04"} text={"Around The World"}/>
       <ServiceBox icon={"5"} number={"05"} text={"New Adventures"}/>
       <ServiceBox icon={"6"} number={"06"} text={"Safety Guide"}/>
    </div>
   </div>
  )
}

export default Services