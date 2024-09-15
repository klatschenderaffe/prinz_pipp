import React from 'react';
import logo from '../assets/logo_prinzpipp.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <img src={logo} alt='Logo from Prinz Pipp' />
      </div>

      <div className='links'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/leashes'>Leashes</Link>
            <Link to='/collars'>Collars</Link>
            <Link to='/cart'>Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
