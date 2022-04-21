import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import { useRef } from 'react'
import { useSelector } from 'react-redux'
import PricingBox from '../components/PricingBox'

const Pricing = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease'
    });
  })

  const travelState = useSelector((state) => state.travel)

  const pricing = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })}

    if (travelState.pricingBtn){
      scrollToSection(pricing)
      // console.log('scroll trigered')
    }
  return (
    <div data-aos='fade-right' className='pricing' ref={pricing}>
    <h1 className='pricing-title'> Our Pricing</h1>
    <div className="pricing-boxes">
      <PricingBox title={"Basic Plan"} price={"30"}/>
      <PricingBox title={"Standerd Plan"} price={"50"}/>
      <PricingBox title={"Premium Plan"} price={"90"}/>
    </div>
   </div>
  )
}

export default Pricing