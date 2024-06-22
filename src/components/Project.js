// src/components/Project.js
import React from 'react';
import './Project.css';

const Project = ({ image, title, tech, link, repo }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{tech}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        <a href={repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    </div>
  );
};

export default Project;
