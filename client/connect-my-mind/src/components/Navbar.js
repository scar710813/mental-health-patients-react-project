import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } 
        else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-name'>
                    Connect My Mind
                </Link>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/onlineappointments' className='nav-links' onClick={closeMobileMenu}>
                        Online Appointments
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/localappointments' className='nav-links' onClick={closeMobileMenu}>
                        Local Appointments
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links-mobile' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </nav>
        </>
    );
}

export default Navbar;