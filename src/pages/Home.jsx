import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';



const Home = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease'
    });
  })

  // const travelState = useSelector((state) => state.travel)
  return (
    <div className="home">
      <div className="container">
      <div className="showcase">
          <div className="vector">
            
          </div>
             <div className="travel-text">
               <h1>Adventure Is Worthwhile</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cum et 
              accusamus repellendus rerum voluptate sit atque dolore deserunt 
              saepe, quam, commodi inventore? Perspiciatis magni, possimus pariatur
               quaerat voluptatem odit.
                </p>

                <button className="btn home-btn">Explore Now</button>
              </div>
            
          </div>

         
        </div>

        
    </div>
  )
}

export default Home