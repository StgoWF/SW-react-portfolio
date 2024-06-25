// src/components/Navigation.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import './Navigation.css';

const Navigation = ({ toggleContactModal }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    toggleContactModal();
    setMenuOpen(false); // Close menu after clicking contact
  };

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="menu-icon-container">
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
          <span></span>
        </div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><NavLink end to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>About Me</NavLink></li>
        <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>Portfolio</NavLink></li>
        <li><NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}>Resume</NavLink></li>
        <li><a href="/" className="contact-link" onClick={handleContactClick}>Contact</a></li>
      </ul>
      <MobileMenu isOpen={isMenuOpen} toggleMenu={handleMenuClick} toggleContactModal={handleContactClick} />
    </nav>
  );
};

export default Navigation;
