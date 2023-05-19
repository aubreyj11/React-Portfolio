import React from 'react'
import WeatherDashboard from './images/WeatherDashboard.png'
import TechBlog from './images/TechBlog.png'
import Calendar from './images/Calendar.png'
import PWGenerator from './images/PWGenerator.png'
import Quiz from './images/Quiz.png'
import TextEditor from './images/TextEditor.png'

function Projects() {
  return (
    <div>
        <h4 className='projectsTitle'>Click on 'App' to view the deployed website or 'Github' to see the app's repo!</h4>
        <figure className='projectFigure'>Weather Dashboard
            <img className='projectImg' src={WeatherDashboard} alt='Weather Dashboard'/>
            <a className='projectLink' href='https://aubreyj11.github.io/weather-dashboard/' target='_blank' rel="noreferrer">App</a>
            <a className='projectLink' href='https://github.com/aubreyj11/weather-dashboard' target='_blank' rel="noreferrer">Github</a>
        </figure>
        <figure className='projectFigure'>Tech Blog
            <img className='projectImg' src={TechBlog} alt='Tech Blog'/>
            <a className='projectLink' href='https://arcane-inlet-49732.herokuapp.com/' target='_blank' rel="noreferrer">App</a>
            <a className='projectLink' href='https://github.com/aubreyj11/CMS-Style-Blog-Site' target='_blank' rel="noreferrer">Github</a>
        </figure>
        <figure className='projectFigure'>Work Day Tracker
            <img className='projectImg' src={Calendar} alt='Work Day Tracker'/>
            <a className='projectLink' href='https://aubreyj11.github.io/calendar-challenge/' target='_blank' rel="noreferrer">App</a>
            <a className='projectLink' href='https://github.com/aubreyj11/calendar-challenge' target='_blank' rel="noreferrer">Github</a>
        </figure>
        <figure className='projectFigure'>Secure Password Generator
            <img className='projectImg' src={PWGenerator} alt='Password Generator'/>
            <a className='projectLink' href='https://aubreyj11.github.io/password-generator/' target='_blank' rel="noreferrer">App</a>
            <a className='projectLink' href='https://github.com/aubreyj11/password-generator' target='_blank' rel="noreferrer">Github</a>
        </figure>
        <figure className='projectFigure'>Timed Coding Quiz
            <img className='projectImg' src={Quiz} alt='Timed Quiz'/>
            <a className='projectLink' href='https://aubreyj11.github.io/timed-quiz/' target='_blank' rel="noreferrer">App</a>
            <a className='projectLink' href='https://github.com/aubreyj11/timed-quiz' target='_blank' rel="noreferrer">Github</a>
        </figure>
        <figure className='projectFigure'>Text Editor
            <img className='projectImg' src={TextEditor} alt='Text Editor'/>
            <a className='projectLink' href='https://guarded-spire-40383.herokuapp.com/' target='_blank' rel="noreferrer">App</a>
            <a className='projectLink' href='https://github.com/aubreyj11/Text-Editor' target='_blank' rel="noreferrer">Github</a>
        </figure>
    </div>
  )
  //https://arcane-inlet-49732.herokuapp.com/
}

export default Projects