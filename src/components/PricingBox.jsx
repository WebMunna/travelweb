import { useSelector } from "react-redux";

const PricingBox = ({title, price}) => {

    const travelState = useSelector((state) => state.travel)
  return (
    <div className={`pricing-box ${travelState.nightMode ? 'l-dark' : 'l-light'}`}>
        
    <div className={`plan-title ${travelState.nightMode ? 'dark' : 'light'}`}>{title}</div>
      <div className='pricing-texes'>
      <h1> <span style={{fontSize: '20px' , fontWeight: '200'}}>$</span>{price}<span style={{fontSize: '20px' , fontWeight: '200'}}>/Mo</span></h1>
     
      
      <h4>10 Days</h4>
      <h4>Food And Drinks</h4>
      <h4>Safty Guide</h4>
      <h4>Insurance</h4>
      <h4>Luxury Hotel</h4>
      
     
       <button className='btn pricing-btn'>Coose Plane</button>
       </div>
    </div>
  )
}

export default PricingBox