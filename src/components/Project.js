import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';  // Import the icon
import './Project.css';

const Project = ({ image, title, tech, link, repo, description }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{tech}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-button">View Project</a>
        <a href={repo} target="_blank" rel="noopener noreferrer" className="project-button">GitHub Repo</a>
        <FaInfoCircle onClick={toggleModal} className="info-icon" /> {/* Icon for More Info */}
      </div>
      {showModal && (
        <div className="inline-modal">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-button">View Project</a>
          <a href={repo} target="_blank" rel="noopener noreferrer" className="project-button">GitHub Repo</a>
          <button onClick={toggleModal} className="close-button">Close</button>
        </div>
      )}
    </div>
  );
};

export default Project;
