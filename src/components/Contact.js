import React, {useState} from 'react';
import {validateEmail, validateUsername, validateMessage} from '../utils/helpers';



function Contact() {

const [errMessage, setErrMessage] = useState('');

const checkValidation = (event) => {
    if (event.target.name === "name") {
        if (!validateUsername(event.target.value)) {
            setErrMessage("Please enter a valid name");
        } else {
            setErrMessage("");
        }
    }
    if (event.target.name === "email") {
        if (!validateEmail(event.target.value)) {
            setErrMessage("Please enter a valid email");
        } else {
            setErrMessage("");
        }
    }
    if (event.target.name === "message") {
        if (!validateMessage(event.target.value)) {
            setErrMessage("Please enter a valid message");
        } else {
            setErrMessage("");
            console.log(errMessage);
        }
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    }
// use onBlur to check validation when user clicks outside of input box

  return (
    <div className='contactContainer'>
        <h2 className="contactTitle">Contact Me!</h2>
        <p className="formText">Fill out the simple form below to get in touch with me!</p>
        <form className='contactForm' onClick={handleSubmit}>
            <input 
            type='text'
            placeholder='Name'
            name='name'
            className='form-input'
            onBlur={checkValidation}></input>
            <input 
            type='text'
            placeholder='Email'
            name='email'
            className='form-input'
            onBlur={checkValidation}></input>
            <input 
            type='text'
            rows={5}
            placeholder='Type message here...'
            name='message'
            className='form-input-message'
            onBlur={checkValidation}></input>
            <button className='formBtn'>Send!</button>
        </form>
    </div>
  )
}

export default Contact