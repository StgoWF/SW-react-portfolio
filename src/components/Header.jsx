import React from 'react';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = ({ toggleContactModal }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Welcome to Santiago Weinstein's Portfolio</h1>

        <div className="name-container">
          <FontAwesomeIcon icon={faUser} className="user-icon" />
          <div>
            <h1>Santiago Weinstein</h1>
          < h2>Software Engineer</h2>
          </div>

       </div>
        <Navigation toggleContactModal={toggleContactModal} />

      </div>
    </header>
  );
};

export default Header;
