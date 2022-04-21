import { useState } from "react"
import { useSelector } from "react-redux";

const UserLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)


    const travelState = useSelector((state) => state.travel)
    
    const onSubmit = (e) => {
    e.preventDefault()
    }

    
  return (
    <form onSubmit={onSubmit} className={`login-form ${travelState.nightMode ? 'l-dark' : 'l-light'}`}>

        <div className="email">
                 <label>Useremail</label>
                 <br/>
                 <input className={`email-input ${travelState.nightMode ? 'dark' : 'light'}`} type='email' placeholder='  enter your email' name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                 <br/>
         </div>

         <div className="password">
                 <label>Password</label>
                 <br/>
                 <input className={`password-input ${travelState.nightMode ? 'dark' : 'light'}`} type='password' placeholder='  password' name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
         </div>
        
         <br/>
         <input className={`checkbox-input ${travelState.nightMode ? 'dark' : 'light'}`} type='checkbox' checked={remember} value={remember} onChange={(e) => setRemember(e.currentTarget.checked)}/>
         <label>Remember Me</label>
         <br/>
         <button className={`login-btn btn ${travelState.nightMode ? 'l-dark dark-color'  : 'l-light'}`} type="submit">Login</button>
    </form>
  )
}

export default UserLogin