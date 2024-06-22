import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Innovative Solutions in Software and Systems.</p>
        <div className="contact-info">

          <p>
            <FaGithub />{' '}
            <a href="https://github.com/StgoWF" target="_blank" rel="noopener noreferrer">StgoWF</a>
          </p>
          <p>
            <FaLinkedin />{' '}
            <a href="https://cl.linkedin.com/in/santiago-weinstein-895bb5262" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
