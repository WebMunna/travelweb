import { useSelector } from "react-redux";
import { FaHotel, FaPlane, FaUtensils, FaGlobe, FaHiking, FaBullhorn } from 'react-icons/fa'

const ServiceBox = ({icon, number, text}) => {

    
    const travelState = useSelector((state) => state.travel)

    let sIcon
    if(icon === "1") {
        sIcon = <FaHotel size={25}/>
    } else if (icon === "2"){
        sIcon = <FaPlane size={25}/>
    } else if (icon === "3"){
        sIcon = <FaUtensils size={25}/>
    }  else if (icon === "4"){
        sIcon = <FaGlobe size={25}/>
    } 
      else if (icon === "5"){
        sIcon = <FaHiking size={25}/>
    } 
      else if (icon === "6"){
        sIcon = <FaBullhorn size={25}/>
    } 
  return (
    <div className={`service-box ${travelState.nightMode ? 'l-dark' : 'l-light'}`}>
        <div className="number-icon">
            <div className="icon">
               {sIcon}
            </div>
            
           <h1 className="number">{number}</h1>
        </div>
       
      <div className='service-texes'>
      <h1>{text}</h1>
      <p>tempor incididunt ut labore et dolore magna aliqua Lorem</p>
      </div>
    </div>
  )
}

export default ServiceBox