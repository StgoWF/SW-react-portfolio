// src/components/Resume.js
import React from 'react';
import './Resume.css';
import resumeFile from '../assets/resume.pdf';

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="resume-link">
        Download Resume
      </a>
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>SQL</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
