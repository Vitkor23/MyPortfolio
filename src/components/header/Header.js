import React, { useState } from 'react';
import Switch from 'react-switch';  
import './header.css';
import { UseTheme } from '../../contex/useTheme';


export default function Header() {

 const {isDarkTheme, toggleTheme } = UseTheme()
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const toggleMobileMenu = ()=>{
    setIsMobileMenuOpen(!isMobileMenuOpen)
 }

  return (
    <div className={`nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}` }>
      <div className='nav__wrapper container'>
      <div className='nav__logo'> Viktor Brusilovsky</div>
      <ul className={`nav__menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
        <li className='nav__menu-items'>
          <a href='#home'>Home</a>
        </li>
        <li className='nav__menu-items'>
          <a href='#service'>Service</a>
        </li>
        <li className='nav__menu-items'>
          <a href='#skills'>Skills</a>
        </li>
        <li className='nav__menu-items'>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li className='nav__menu-items'>
          <a href='#contact'>Contact</a>
        </li>
        <li className='buttons'>
          <label htmlFor='' className='switch'>
            <Switch 
              height={24} 
              width={48}
              onColor='#4D4D4D'
              offColor='#ccc'
              onChange={toggleTheme}
              checked={isDarkTheme}
              
              />
              

          </label>
          <button className='button'>
            Hire Me
          </button>
        </li>
      </ul>
      </div>
      <div className='hamburger-menu' onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>
    </div>
  );
}
