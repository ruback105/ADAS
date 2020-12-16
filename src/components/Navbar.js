import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='left-menu'>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    File
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Edit
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    View
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='right-menu'>
                        <ul>
                            <li className='nav-item user'>
                                <Link to='/user' className='nav-links-user'>
                                    Welcome, 
                                </Link>
                            </li>
                            <li className='nav-item login'>
                                <Link to='/sign-up' className='nav-links-login'>
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar
