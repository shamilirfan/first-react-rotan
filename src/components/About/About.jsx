import React from 'react'
import './About.css'

function About() {
    function update() {
        const a = document.getElementById('about')
        a.style.color = 'green';
        a.innerText = 'Hello';
    }
    return (
        <div>
            <h1 id='about' className='heading-about'>About</h1>
            <button onClick={update}>click</button>
        </div>
    )
}

export default About