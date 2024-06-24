import React from 'react';

import './MobileMenu.css';

const MobileMenu = ({ isOpen, toggleMenu, toggleContactModal }) => {


  return (
    isOpen && (
      <div className="mobile-menu-overlay">
        <div className="mobile-menu-content">
          <button className="close-button" onClick={toggleMenu}>X</button>
          <nav className="mobile-navigation">
            <ul>

            </ul>
          </nav>
        </div>
      </div>
    )
  );
};

export default MobileMenu;
