import React, {useState, useRef} from 'react';
// import {validateEmail, validateUsername, validateMessage} from '../utils/helpers';
import emailjs from '@emailjs/browser';




// const [errMessage, setErrMessage] = useState('');

// const checkValidation = (event) => {
//     if (event.target.name === "name") {
//         if (!validateUsername(event.target.value)) {
//             setErrMessage("Please enter a valid name");
//         } else {
//             setErrMessage("");
//         }
//     }
//     if (event.target.name === "email") {
//         if (!validateEmail(event.target.value)) {
//             setErrMessage("Please enter a valid email");
//         } else {
//             setErrMessage("");
//         }
//     }
//     if (event.target.name === "message") {
//         if (!validateMessage(event.target.value)) {
//             setErrMessage("Please enter a valid message");
//         } else {
//             setErrMessage("");
//             console.log(errMessage);
//         }
//     }
// };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     }
// use onBlur to check validation when user clicks outside of input box

const Contact = () => {
    const form = useRef();
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('submitting...');
      setEmailSent(true);
  
      emailjs.sendForm('service_uhxnyte', 'template_zo60058', form.current, '61yxrEbvPY1gma1Pq')
        .then((result) => {
            console.log(result.text);
            

            form.current.reset();

            setTimeout(() => {
                console.log('clearing message');
                setEmailSent(false);
              }, 1000);
            
        }, (error) => {
            console.log(error.text);
        });
    };

    console.log("emailSent:", emailSent);

  return (
    <div className='contactContainer'>
        <h2 className="contactTitle">Contact Me!</h2>
        <p className="formText">Fill out the simple form below to get in touch with me!</p>
        {emailSent && <p className="emailSent">Email Sent!</p>}
        <form ref={form} className='contactForm' onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='Name'
            name='name'
            className='form-input'
            ></input>
            <input 
            type='text'
            placeholder='Email'
            name='email'
            className='form-input'
            ></input>
            <input 
            type='text'
            rows={5}
            placeholder='Type message here...'
            name='message'
            className='form-input-message'
            ></input>
            <button type="submit" value="Send" className='formBtn'>Send!</button>
            
        </form>
        
        
    </div>
  )
}

export default Contact;