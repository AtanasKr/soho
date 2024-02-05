import React from 'react'
import '../Style/Navbar.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>About</li>
                <li>Furniture</li>
                <li>Contacts</li>
            </ul>
            <div className='nav-btns'>
                <button className='nav-btn'>Login</button>
                <button className='nav-btn'>Signup</button>
            </div>
        </nav>
    )
}

export default NavBar