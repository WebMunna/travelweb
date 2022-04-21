import { useSelector } from "react-redux";

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const BookingBar = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease'
    });
  })

    const travelState = useSelector((state) => state.travel)
  return (
    <>
     <div data-aos='fade-left' className={`booking-bar ${travelState.nightMode ? 'l-dark' : 'l-light'}`} >
            <div className="where-to">
                <label>Where To</label>
                <br/>
                <input className={`where-input ${travelState.nightMode ? 'dark' : 'light'}`} type='text' placeholder="  search places"/>
            </div>

            <div className="starting">
                 <label>Arrival</label>
                 <br/>
                 <input className={`starting-input ${travelState.nightMode ? 'dark dark-color' : 'light'}`} type='date' />
            </div>
           
            <div className="leaving">
                  <label >Leaving</label>
                  <br/>
                  <input className={`leaving-input ${travelState.nightMode ? 'dark dark-color' : 'light'}`} type='date' />
            </div>

            <button className="btn booking-btn" type="submit">Book Now</button>
          
          </div>
    </>
  )
}

export default BookingBar