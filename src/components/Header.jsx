// src/components/Header.js
import React from 'react';
import Navigation from './Navigation';
import './Header.css';

const Header = ({ toggleContactModal }) => {
  return (
    <header className="header">
      <h1>Welcome to Santiago Weinstein's Portfolio</h1>
      <Navigation toggleContactModal={toggleContactModal} />
    </header>
  );
};

export default Header;
