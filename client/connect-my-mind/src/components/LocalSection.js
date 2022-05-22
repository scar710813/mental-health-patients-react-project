import React from 'react';
import '../App.css';
import { Button } from './Button';
import './LocalSection.css';

function LocalSection() {
    return (
        <div className='local-container'>
            <img src='/US-Blank-map.jpeg'/>
            <h1>SELECT YOUR STATE</h1>
        </div>
    )
}

export default LocalSection;