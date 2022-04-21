import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import ReviewBox from "../components/ReviewBox";

const Review = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease'
    });
  })
 
  return (
    <div data-aos='fade-left' className='review' id="review">
    <h1 className='review-title'> Client's Review </h1>
    <div className="review-boxes">
        <ReviewBox person={"Alauddin Khan"} pic={"1"}/>
        <ReviewBox person={"Ms Shila"} pic={"2"}/>
        <ReviewBox person={"Saddam Hossain"} pic={"3"}/>
        <ReviewBox person={"Hosna Chowdhury"} pic={"4"}/>
    </div>
   </div>
  )
}

export default Review