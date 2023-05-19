import React from 'react'

function Resume() {
  return (
    <div className='resume'>
        <p className='resumeLinkText'>Check out my resume <a className="resumeLink" href="https://docs.google.com/document/d/1IWxZtA6yoLpmQ-Ex9Dz61vATFrKT08rxZ0neShFehpE/edit?usp=sharing">here!</a></p>
        <h3 className='listTitle'>Proficiencies:</h3>
        <ul className='skillsList'>
            <li className='SL-item'>Javascript</li>
            <li className='SL-item'>Node / Express</li>
            <li className='SL-item'>MySQL / NoSQL</li>
            <li className='SL-item'>React</li>
        </ul>
    </div>
  )
}

export default Resume

