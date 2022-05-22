import React from 'react'
import '../App.css';
import { Button } from './Button';
import './SignUpSection.css';
import SignUp from './pages/SignUp';

function SignUpSection() {
    return (
        <div className='sign-container'>
            <h1>SIGN UP:</h1>
            <div className="sign-btns">
                <input className='userText' type="text" placeholder='Username...'/>
                <input className='passText' type="text" placeholder='Email...'/>
                <input className='passText' type="password" placeholder='Password...'/>
                <input type="checkbox" id='therapist' className='therapistCheck'/>
                <label for="therapist" className='therapistLable'> Register as a therapist.</label>
                
            </div>
            <button className='btn1'>
                Sign Up
            </button>
        </div>
    )
}

export default SignUpSection;