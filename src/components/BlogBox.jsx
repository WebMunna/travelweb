import image1 from '../images/blog-1.svg';
import image2 from '../images/blog-2.svg';
import image3 from '../images/blog-3.svg';

import { useSelector } from 'react-redux';
import { FaUser, FaCalendar } from 'react-icons/fa'


const BlogBox = ({pic}) => {

    const travelState = useSelector((state) => state.travel)

    let teaPic
    if(pic === "1") {
        teaPic = image1
    } else if (pic === "2"){
        teaPic = image2
    } else if (pic === "3"){
        teaPic = image3
    }
  return (
    <div className={`blog-box ${travelState.nightMode ? 'l-dark' : 'l-light'}`}>
      <img className={`blog-image ${travelState.nightMode ? 'dark' : 'light'}`} src={teaPic} alt="blogimg"/>
      <div className='blog-texes'>
      <h3>Explore The World Now, 
          <br/>
          Adventure Awaits
      </h3>
      
     
       <button className='btn blog-btn'>Read More</button>
        <hr className='line'/>
        <div className="admin-date">
        <h4> <FaCalendar color='rgb(255, 145, 0)'/> 21st March, 2022</h4> <h4> <FaUser color='rgb(255, 145, 0)'/> By Admin </h4>
        </div>
      
       </div>
    </div>
  )
}

export default BlogBox