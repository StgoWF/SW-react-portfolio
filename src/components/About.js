// src/components/About.js
import React from 'react';
import './About.css';
import profileImage from '../assets/profile.jpg';

const About = () => {
  return (
    <section className="about">
      <img src={profileImage} alt="Santiago Weinstein" className="profile-image" />
      <div className="bio">
        <h2>About Me</h2>
        <p>I'm a dedicated software developer and Civil Industrial Engineer with a passion for technology and innovation...</p>
      </div>
    </section>
  );
};

export default About;
