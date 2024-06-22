// src/components/Resume.js
import React from 'react';
import './Resume.css';
import resumeFile from '../assets/resume.pdf';

const Resume = () => {
  return (
    <section className="resume">
      <h2 className="resume-title">Resume</h2>
      <div className="proficiencies-container">
        <div className="proficiencies">
          <h3>Front-end Proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="proficiencies">
          <h3>Back-end Proficiencies</h3>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
      <div className="resume-link-container">
        <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="resume-link">
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
