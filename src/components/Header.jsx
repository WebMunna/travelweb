import { FaMoon, FaSun, FaUser, FaBars, FaSearch } from 'react-icons/fa'
import { useSelector,useDispatch } from "react-redux";
import { Link } from 'react-scroll'
import { menuButtonClick, nightModeClick, userButtonClick } from '../features/travelSlice';
import logow from '../images/logo-w.png'
import logob from '../images/logo-b.png'
import MenuBox from './MenuBox';
import UserLogin from './UserLogin';



const Header = () => {

   

    const dispatch = useDispatch();

    const travelState = useSelector((state) => state.travel)
    
    let logo
    if( travelState.nightMode ){
        logo = logow

        document.querySelector('body').style.backgroundColor = 'rgb(33, 33, 33)';
        document.querySelector('body').style.color = 'antiquewhite';
        // document.querySelector('.search-input').style.backgroundColor = 'rgb(33, 33, 33)';
        // document.querySelector('.search-bar').style.backgroundColor = 'white';
        
        
    } else {
        logo = logob
        
        document.querySelector('body').style.backgroundColor = 'rgb(216, 221, 221)';
        document.querySelector('body').style.color = 'rgb(33, 33, 33)';
        // document.querySelector('.search-input').style.backgroundColor = 'rgb(216, 221, 221)';
        // document.querySelector('.search-bar').style.backgroundColor = 'rgb(216, 221, 221)';
    }

  return (
    <header className={`header ${travelState.nightMode ? 'l-dark' : 'l-light'}`}>
        <div className="container">
        <div className="h-container">
            <div className="logo">
         <Link to='/'>
            <img src={logo} alt="logo" />
         </Link>
         
     </div>

     <div className={`search-bar ${travelState.nightMode ? 'dark' : 'light'}`}>
         <input className={`search-input ${travelState.nightMode ? 'dark' : 'light'}`} type="text" placeholder='search here..' /> 
         <div className="search-icon" typeof='submit'><FaSearch/></div>
     </div>

     <div className="main-functions">
        <div className={`night-mode ${travelState.nightMode ? 'dark' : 'light'}`} onClick={() => (dispatch(nightModeClick()))}>
          {
              travelState.nightMode ? <FaSun/> : <FaMoon/>
          }
        </div>

     <div className={`user ${travelState.nightMode ? 'dark' : 'light'}`} onClick={() => dispatch(userButtonClick())}>
         <FaUser/>
     </div>

     <div className={`menu-button ${travelState.nightMode ? 'dark' : 'light'}`} onClick={() => dispatch(menuButtonClick())}>
         <FaBars/>
     </div>
     </div>
     </div>
     </div>
      
     <div className='container'>
                { travelState.userButton ?
                   <UserLogin/>
                   : null
                }
              </div>
              <div className='container'>
                { travelState.menuButton ?
                   <MenuBox/>
                   : null
                }
              </div>

    </header>
  )
}

export default Header