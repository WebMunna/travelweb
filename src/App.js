
import Header from './components/Header';



import Home from './pages/Home'
import Packages from './pages/Packages'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Review from './pages/Review'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'

import BookingBar from './components/BookingBar';
import Footer from './components/Footer';





function App() {

  return (
    <>
     
          
              <Header/>
              
              <div className='container'>
                 <Home/>
                 <BookingBar/>
                 <Packages/>
                
                 <Services />
                
                
                 <Pricing/>
                 <Review/>
                 <Contact/>
                 <Blogs/>
              </div>
          
          <Footer/>
         
    
    </>
  );
}

export default App;
