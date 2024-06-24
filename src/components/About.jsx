import React from 'react';
import './About.css';
import resumeImage from '../assets/resumeImage.jpg';


const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-image" style={{ backgroundImage: `url(${resumeImage})` }} />
      <div className="about-text">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          I'm a dedicated software developer and Civil Industrial Engineer with a passion for technology and innovation.
          Specializing in web development, I bring a strong analytical and optimization skillset to contribute to meaningful
          and challenging projects.
        </p>
      </div>
    </section>
  );
};

export default About;
