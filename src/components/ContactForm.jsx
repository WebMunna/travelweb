import { useState } from "react"
import { useSelector } from 'react-redux';

const ContactForm = () => {
    const travelState = useSelector((state) => state.travel)

    const onSubmit = (e) => {
        e.preventDefault()
       }
     
       const [text, setText] = useState('')
       const [email, setEmail] = useState('')
       const [number, setNumber] = useState('')
       const [sub, setSub] = useState('')
       const [message, setMessage] = useState('')
       
  return (
    <form className='contact-form' onSubmit={onSubmit}>
        <div className="upper-four">
        <input className={`cname-input ${travelState.nightMode ? 'l-dark' : 'l-light'}`} type='text' placeholder='  name' value={text} onChange={(e) => setText(e.target.value)} />
         <input className={`cemail-input ${travelState.nightMode ? 'l-dark' : 'l-light'}`} type='email' placeholder='  email' value={email} onChange={(e) => setEmail(e.target.value)} />
         <input className={`cnumber-input ${travelState.nightMode ? 'l-dark' : 'l-light'}`} type='number' placeholder='  number' value={number} onChange={(e) => setNumber(e.target.value)} />
         <input className={`csubject-input ${travelState.nightMode ? 'l-dark' : 'l-light'}`} type='text' placeholder='  subject' value={sub} onChange={(e) => setSub(e.target.value)} />
        </div>
         
         <div className="bottom-two">
         <input className={`cmessage-input ${travelState.nightMode ? 'l-dark' : 'l-light'}`} type='text' placeholder='  message' value={message} onChange={(e) => setMessage(e.target.value)} />
         <button className="contact-btn btn" type="submit">Send Message</button>
         </div>
         
    </form>
  )
}

export default ContactForm