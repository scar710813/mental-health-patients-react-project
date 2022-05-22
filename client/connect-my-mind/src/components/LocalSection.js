import React from 'react';
import '../App.css';
import { Button } from './Button';
import './LocalSection.css';

function LocalSection() {
    return (
        <div className='local-container'>
            <img className='states' src='/US-Blank-map.jpeg'/>
            <h1>SELECT YOUR STATE</h1>
            <input className='zipText' type="text" placeholder='Zip Code...'/>
            <input className='zipText' type="text" placeholder='Range (Mi)...'/>
            <button className='btn11'>
                Search
            </button>
        </div>
    )
}

export default LocalSection;