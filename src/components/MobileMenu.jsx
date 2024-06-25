import React from 'react';

import './MobileMenu.css';

const MobileMenu = ({ isOpen, toggleMenu, toggleContactModal }) => {


  return (
    isOpen && (
      <div className="mobile-menu-overlay">
        <div className="mobile-menu-content">
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
