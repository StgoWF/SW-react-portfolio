import React from 'react';
import './Modal.css';

const Modal = ({ onClose, project }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default Modal;
