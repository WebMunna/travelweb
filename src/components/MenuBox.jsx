import { Link } from "react-scroll"
import { useSelector } from 'react-redux';



const MenuBox = () => {



  const travelState = useSelector((state) => state.travel)
  return (
    <div className={`menu-box ${travelState.nightMode ? 'l-dark' : 'l-light'}`}>



      
        
        <ul>
           <li ><Link activeClass="active"  spy={true} smooth={true} offset={50} duration={500} className={`${travelState.nightMode ? 'dark-color' : 'light-color'}`}  to='home'>Home</Link></li>
           <li><Link to ='packages' smooth={true} duration={1000}>Packages</Link></li>
           <li> <Link  to='services' smooth={true} duration={1000}>Services</Link></li>
           <li><Link  to='pricing' smooth={true} duration={1000}>Pricing</Link></li>
           <li><Link  to='review' smooth={true} duration={1000}>Review</Link></li>
           <li><Link  to='contact' smooth={true} duration={1000}>Contact</Link></li>
           <li><Link  to='blogs' smooth={true} duration={1000}>Blogs</Link></li>
        </ul>
    </div>
  )
}

export default MenuBox