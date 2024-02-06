import React, { useState } from 'react';
import '../Style/Sidebar.css';
import menuImg from '../images/Menu.png';
import closeMenuImg from '../images/Close.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='side-bar'>
      {!isOpen && <img className='open-menu' src={menuImg} alt='open-menu' onClick={() => setIsOpen(true)} />}
      {isOpen && <div className='side-menu'>
        <img className='close-menu' src={closeMenuImg} alt='close-menu' onClick={() => setIsOpen(false)} />
        <Link to="/"><p>About</p></Link>
        <Link to="/furniture"><p>Furniture</p></Link>
        <Link to="/contacts"><p>Contacts</p></Link>
        <Link to="/signup"><p>Sign up</p></Link>
        <Link to="/login"><p>Log in</p></Link>
      </div>}
    </div>
  )
}

export default Sidebar