import React from 'react'
import Profile from './images/ProfilePic.png'

function AboutMe() {
  return (
    <div>
        <h2 className='aboutMeTitle'>Aubrey Johnston</h2>
        <div className='aboutContainer'>
            <p className='aboutMeText'> _ <br></br><br></br>I am a full stack web developer 
            with a background in education located in Orange County, CA. I have a passion for learning and problem solving. 
            I am a team player and I am excited to work with others to create amazing 
            applications!<br></br><br></br> _</p>
            <p className="aboutMeText2">_<br></br> <br></br>My name is Aubrey Johnston and I am a 21 year old coding student!<br></br> _</p>
            <img className='profilePic' src={Profile} alt='Profile Img'/>
        </div>
    </div>
  )
}

export default AboutMe