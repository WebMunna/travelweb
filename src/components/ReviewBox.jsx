import image1 from '../images/pic-1.png';
import image2 from '../images/pic-2.png';
import image3 from '../images/pic-3.png';
import image4 from '../images/pic-4.png';

import { useSelector } from "react-redux";
import { FaStar } from 'react-icons/fa'

const ReviewBox = ({person,pic}) => {

    
    const travelState = useSelector((state) => state.travel)

    let manPic
    if(pic === "1") {
        manPic = image1
    } else if (pic === "2"){
        manPic = image2
    } else if (pic === "3"){
        manPic = image3
    }
     else if (pic === "4"){
        manPic = image4
    }

  return (
    <div className={`review-box ${travelState.nightMode ? 'l-dark' : 'l-light'}`}>
   
    <div className="review-image">
      <img src={manPic} alt="review-img"/> 
    </div>
   <div className="review-name">
       <h1>{person}</h1>
   </div>

  <p>
      tempor incididunt ut labore et dolore magna aliqua Lorem
      tempor incididunt ut labore et dolore magna aliqua Lorem
      tempor incididunt ut labore et dolore magna aliqua Lorem
      tempor incididunt ut labore et dolore magna aliqua Lorem
  </p>
  <div className="review-star">
      <FaStar/> <FaStar/>  <FaStar/>  <FaStar/>  <FaStar/> 
  </div>
  
</div>
  )
}

export default ReviewBox