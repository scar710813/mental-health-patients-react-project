import React from 'react';
import '../App.css';
import { Button } from './Button';
import './OnlineSection.css';

function OnlineSection() {
    return (
        <div className='online-container'>
            <h1>CONTACT ONE OF OUR TRAINED, PROFESSIONAL THERAPISTS</h1>
            <p>Feel free to setup an appointment today!</p>
            <div className='image1container'>
                <img className='image1' src='/image1.jpeg'/>
                <p>MEET DAVID,</p>
                <h2>David is the top-rated therapist within our program! He is very kind, empathetic, and 
                    forms close relationships with all of his patients. 
                    Feel free to contact him by pressing the 'MESSAGE' button below.</h2>
                <button 
                className='btn1' 
                >
                    MESSAGE
                </button>
            </div>
            <div className='image2container'>
                <img className='image2' src='/image2.webp'/>
                <p>MEET LISA,</p>
                <h2>Lisa is also one of our highest-rated therapists. She loves having the opportunity to 
                    reach out and support those who need it. She is always looking to offer a helping hand! 
                    Feel free to contact her by pressing the 'MESSAGE' button below.</h2>
                <button 
                className='btn1' 
                >
                    MESSAGE
                </button>
            </div>
            <div className='image3container'>
                <img className='image3' src='/image3.jpeg'/>
                <p>MEET JANE,</p>
                <h2>Jane is an amazing therapist, and has been working in the industry for over 10 years! She 
                    is very passionate towards helping others, and will always listen to what you have to say. 
                    Feel free to contact her by pressing the 'MESSAGE' button below.</h2>
                <button 
                className='btn1' 
                >
                    MESSAGE
                </button>
            </div>
        </div>
    )
}

export default OnlineSection;