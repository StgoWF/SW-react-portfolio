import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, toggleMenu, toggleContactModal }) => {
  const handleContactClick = (e) => {
    e.preventDefault();
    toggleContactModal();
    toggleMenu();
  };

  return (
    isOpen && (
      <div className="mobile-menu-overlay">
        <div className="mobile-menu-content">
          <button className="close-button" onClick={toggleMenu}>X</button>
          <nav className="mobile-navigation">
            <ul>
              <li><NavLink end to="/" onClick={toggleMenu}>About Me</NavLink></li>
              <li><NavLink to="/portfolio" onClick={toggleMenu}>Portfolio</NavLink></li>
              <li><NavLink to="/resume" onClick={toggleMenu}>Resume</NavLink></li>
              <li><a href="/" onClick={handleContactClick}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  );
};

export default MobileMenu;
