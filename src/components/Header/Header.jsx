/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

import style from '../../styles/Header.module.css'

import LOGO from '../../images/logo.svg'



const NavItem = ({ label, targetId }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'center', 
    });
  };

  return (
    <a href={`#${targetId}`} className={style.item} onClick={handleClick}>
      {label}
      <div className="underline" />
    </a>
    
  );
};


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  
  return (
    <header>
      
      <div className={style.wrapper}>
        {/* Logo */}
        <div className={style.logo}>
          <a href="#"><img src={LOGO} alt="logo"  /></a>
        </div>

        {/* Navigation */}
        <nav className={`${style.nav} ${isOpen ? style.open : ''}`}>
          <div className={style['nav-item']} onClick={closeMenu}><NavItem label="Home" targetId="home" /></div>
          <div className={style['nav-item']} onClick={closeMenu}><NavItem label="About" targetId="about" /></div>
          <div className={style['nav-item']} onClick={closeMenu}><NavItem label="Projects" targetId="projects" /></div>
          <div className={style['nav-item']} onClick={closeMenu}><NavItem label="Contact" targetId="contact" /></div>

          <button>Download CV</button>
        </nav>

        {/* Burger Menu */}
        <div className={`${style.burger} ${isOpen ? style.fixed : ''}`} onClick={toggleMenu}>
          <span className={`${style.line} ${isOpen ? style.open : ''}`}></span>
          <span className={`${style.line} ${isOpen ? style.open : ''}`}></span>
          <span className={`${style.line} ${isOpen ? style.open : ''}`}></span>
        </div>
      </div>
      

   
    </header>
  )
}
