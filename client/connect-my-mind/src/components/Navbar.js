import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="Navbar">
                <div className="Navbar-container">
                    <Link to="/" className="Navbar-name">
                       Connect My Mind <i className='fab fa-typo3' />   
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;