import image1 from '../images/p-1.jpg';
import image2 from '../images/p-2.jpg';
import image3 from '../images/p-3.png';
import image4 from '../images/p-4.jpg';
import image5 from '../images/p-5.jpg';
import image6 from '../images/p-6.jpg';

import { useSelector } from "react-redux";
import { FaMapMarkerAlt } from 'react-icons/fa'


const PackageBox = ({pic, place}) => {


    const travelState = useSelector((state) => state.travel)

    let teaPic
    if(pic === "1") {
        teaPic = image1
    } else if (pic === "2"){
        teaPic = image2
    } else if (pic === "3"){
        teaPic = image3
    }  else if (pic === "4"){
        teaPic = image4
    } 
      else if (pic === "5"){
        teaPic = image5
    } 
      else if (pic === "6"){
        teaPic = image6
    } 

  return (
    <div className={`package-box ${travelState.nightMode ? 'l-dark' : 'l-light'}`}>
        <div className='place-name'><div className='package-icon'><FaMapMarkerAlt/></div><h5 >{place}</h5></div>
        <div className="package-image">
          <img className='package-img' src={teaPic} alt="package-img"/> 
        </div>
      <div className='package-texes'>
      <h1>290.99 <span style={{fontSize: '20px' , fontWeight: '200'}}><del> 350.99</del></span></h1>
     
      <p>tempor incididunt ut labore et dolore magna aliqua Lorem</p>
       <button className='btn package-btn'>Book Now</button>
       </div>
    </div>
  )
}

export default PackageBox