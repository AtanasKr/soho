import React from 'react'
import '../Style/Navbar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>About</Link></li>
                <li><Link to="/furniture" style={{ color: 'inherit', textDecoration: 'inherit' }}>Furniture</Link></li>
                <li><Link to="/contacts" style={{ color: 'inherit', textDecoration: 'inherit' }}>Contacts</Link></li>
            </ul>
            <div className='nav-btns'>
            <Link to="/login"><button className='nav-btn'>Login</button></Link>
            <Link to="/register"><button className='nav-btn'>Signup</button></Link>
            </div>
        </nav>
    )
}

export default NavBar