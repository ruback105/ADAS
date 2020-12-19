import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.scss';

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='left-menu'>
                        <ul className='nav-menu'>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links'>
                                    File
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links'>
                                    Edit
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links'>
                                    View
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='right-menu'>
                        <ul>
                            <li className='nav-item user'>
                                <Link to='/user' className='nav-links-user'>
                                    Welcome
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
