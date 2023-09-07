import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import Signout from './Signout';

const Navbar = () => {
    return (
        <div className='app'>
            <nav className="navbar" >
                <div className="nav__container">
                <Link exact to="/" className="nav__logo">
                    Learner Management System
                    <i className="fa fa-code"></i>
                </Link>
                <ul className= "nav__menu nav__menu">
                    <h1>hi</h1>
                    <Signout />
                </ul>
                <div className="nav__icon">
                    <i className="fa fa-bars"></i>
                </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
