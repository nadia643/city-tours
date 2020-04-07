import React from 'react';
import logo from '../../logo.svg';
import './navbar.scss';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return(
        <nav className="navbar">
            <img src={logo} alt="city tours company" />
            <ul className="nav-links">
                <li><Link to="/home" className="nav-link" >Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/tour-list" className="nav-link">Tour List</Link></li>
            </ul>
        </nav>

    )
}
