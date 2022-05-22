import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HomeSection.css';


function HomeSection() {
    return (
        <div className='hero-container'>
            <video src="/client/connect-my-mind/src/components/brain.mp4" autoPlay loop muted />
            <h1>SEEK MENTAL HEALTH SUPPORT NOW</h1>
            <p>More convenient and easy than ever!</p>
            <div className="home-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>GET STARTED</Button>
            </div>
        </div>
    )
}

export default HomeSection;