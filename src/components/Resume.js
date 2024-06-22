import React from 'react';
import './Resume.css';
import resumeFile from '../assets/resume.pdf';

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="resume-link">
        Download my resume
      </a>
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
    </section>
  );
};

export default Resume;
