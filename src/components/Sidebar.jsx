import React, { useState } from 'react';
import '../Style/Sidebar.css';
import menuImg from '../images/Menu.png';
import closeMenuImg from '../images/Close.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='side-bar'>
      {!isOpen && <img className='open-menu' src={menuImg} alt='open-menu' onClick={() => setIsOpen(true)} />}
      {isOpen && <div className='side-menu'>
        <img className='close-menu' src={closeMenuImg} alt='close-menu' onClick={() => setIsOpen(false)} />
        <p>About</p>
        <p>Furniture</p>
        <p>Contact</p>
        <p>Sign up</p>
        <p>Log in</p>
      </div>}
    </div>
  )
}

export default Sidebar