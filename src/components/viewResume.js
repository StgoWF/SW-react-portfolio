import React from 'react';
import './viewResume.css';
import resumeFile from '../assets/resume.pdf';

const viewResume = (props) => {
  return (
    <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="viewResume">
      {props.label}
    </a>
  );
};

export default viewResume;
