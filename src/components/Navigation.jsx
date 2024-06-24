// src/components/Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ toggleContactModal }) => {
  const handleContactClick = (e) => {
    e.preventDefault();
    toggleContactModal();
  };

  return (
    <nav className="navigation">
      <ul>
        <li><NavLink end to="/" className={({ isActive }) => (isActive ? 'active' : '')}>About Me</NavLink></li>
        <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>Portfolio</NavLink></li>
        <li><NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>Resume</NavLink></li>
        <li><a href="#" className="contact-link" onClick={handleContactClick}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
