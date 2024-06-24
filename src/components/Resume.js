// src/components/Resume.js
import React from 'react';
import './Resume.css';
import resumeFile from '../assets/resume.pdf';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNode, FaPython } from 'react-icons/fa';
import { SiJquery, SiMongodb, SiMysql, SiSequelize, SiExpress } from 'react-icons/si';

const Resume = () => {
  return (
    <section className="resume">
      <h2 className="resume-title">Resume</h2>
      <div className="proficiencies-container">
        <div className="proficiencies">
          <h3>Front-end Proficiencies</h3>
          <ul>
            <li><FaHtml5 /> HTML</li>
            <li><FaCss3Alt /> CSS</li>
            <li><FaJsSquare /> JavaScript</li>
            <li><SiJquery /> jQuery</li>
            <li>Responsive Design</li>
            <li><FaReact /> React</li>
            <li><FaBootstrap /> Bootstrap</li>
          </ul>
        </div>
        <div className="proficiencies">
          <h3>Back-end Proficiencies</h3>
          <ul>
            <li>APIs</li>
            <li><FaNode /> Node</li>
            <li><SiExpress /> Express</li>
            <li><SiMysql /> MySQL, <SiSequelize /> Sequelize</li>
            <li><SiMongodb /> MongoDB</li>
            <li>Mongoose</li>
            <li><FaPython /> Python</li>
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
