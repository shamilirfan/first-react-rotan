import React from 'react'
import './About.css'

function About() {
    function update() {
        const a = document.getElementById('about')
        a.style.color = 'green';
        a.innerText = 'Hello';
    }
    function add(number) {
        console.log(number * 2);
    }
    return (
        <div>
            <h1 id='about' className='heading-about'>About</h1>
            <button onClick={update} className='btn-1'>click</button>
            <button onClick={() => add(5)} className='btn-2'>click-add</button>
        </div>
    )
}

export default About