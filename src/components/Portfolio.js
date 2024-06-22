// src/components/Portfolio.js
import React from 'react';
import Project from './Project';
import './Portfolio.css';

const projects = [
  {
    image: './assets/images/project1.png',
    title: 'Project 1',
    tech: 'HTML, CSS, JavaScript',
    link: 'https://example.com',
    repo: 'https://github.com/username/project1',
  },
  // Add more projects here
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
