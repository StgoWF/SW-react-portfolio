// src/components/Portfolio.js
import React from 'react';
import Project from './Project';
import './Portfolio.css';

const projects = [
  {
    image: './assets/images/Proyect1.png',
    title: 'MiniProject',
    tech: 'HTML, CSS',
    link: 'https://stgowf.github.io/mini1/',
    repo: 'https://github.com/StgoWF/mini1',
  },
  {
    image: '../assets/images/Proyect2.png',
    title: 'Prework Study Guide',
    tech: 'HTML, CSS, JavaScript',
    link: 'https://stgowf.github.io/prework-study-guide/',
    repo: 'https://github.com/StgoWF/prework-study-guide',
  },
  {
    image: '../assets/images/TailorMyTrip.png',
    title: 'TailorMyTrip',
    tech: 'HTML, CSS, JavaScript',
    link: 'https://stgowf.github.io/TailorMyTrip/',
    repo: 'https://github.com/StgoWF/TailorMyTrip',
  },
  {
    image: '../assets/images/Homepage.png',
    title: 'FlightQuest',
    tech: 'HTML, CSS, JavaScript, SQL',
    link: 'https://flightquest-e755c2dda8ba.herokuapp.com/',
    repo: 'https://github.com/StgoWF/FlightQuest',
  },
  {
    image: '../assets/images/techblog.png',
    title: 'TechBlog',
    tech: 'HTML, CSS, JavaScript, Node.js, Express, Sequelize, MySQL',
    link: 'https://the-tech-blog-16-09-800bdce7db85.herokuapp.com/',
    repo: 'https://github.com/StgoWF/TechBlog',
  },
  {
    image: '../assets/images/note-taker.png',
    title: 'Note Taker',
    tech: 'HTML, CSS, JavaScript, Node.js, Express',
    link: 'https://note-taker1695-76cb5ccb3d63.herokuapp.com/',
    repo: 'https://github.com/StgoWF/NoteTaker',
  },
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
