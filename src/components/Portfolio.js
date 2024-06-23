// src/components/Portfolio.js
import React from 'react';
import Project from './Project';
import './Portfolio.css';

const projects = [
  {
    image: './assets/images/Portfolio.png',
    title: 'Portfolio',
    tech: 'HTML, CSS',
    link: 'https://stgowf.github.io/SWPortfolio/',
    repo: 'https://github.com/StgoWF/SWPortfolio',
    description: 'This portfolio showcases my web development projects and skills, emphasizing advanced CSS techniques like flexbox, media queries, and CSS variables. It\'s designed to be responsive, ensuring a great experience on all devices.'
  },
  {
    image: './assets/images/JspasswordGenerator.png',
    title: 'JavaScript Password Generator',
    tech: 'JavaScript',
    link: 'https://stgowf.github.io/JSPasswordGenerator/',
    repo: 'https://github.com/StgoWF/JSPasswordGenerator',
    description: 'This utility generates strong, secure passwords with user-defined criteria, leveraging JavaScript to enhance web security practices. Responsive design ensures functionality across all devices.'
  },
  {
    image: '../assets/images/Workdayscheduler.png',
    title: 'Work Day Scheduler',
    tech: 'HTML, CSS, JavaScript',
    link: 'https://stgowf.github.io/WorkDayScheduler/',
    repo: 'https://github.com/StgoWF/WorkDayScheduler',
    description: 'The Work Day Scheduler is a simple, elegant web application designed for employees with busy schedules. This application allows users to add, save, and delete events for each hour of the workday.'
  },
  {
    image: '../assets/images/TailorMyTrip.png',
    title: 'TailorMyTrip',
    tech: 'HTML, CSS, JavaScript',
    link: 'https://stgowf.github.io/TailorMyTrip/',
    repo: 'https://github.com/StgoWF/TailorMyTrip',
    description: 'TailorMyTrip reimagines travel organization by offering an all-in-one platform for booking flights and hotels. Utilizing APIs from top booking services, it presents real-time updates and competitive rates for global flights and stays.'
  },
  {
    image: '../assets/images/Homepage.png',
    title: 'FlightQuest',
    tech: 'HTML, CSS, JavaScript, SQL',
    link: 'https://flightquest-e755c2dda8ba.herokuapp.com/',
    repo: 'https://github.com/StgoWF/FlightQuest',
    description: 'FlightQuest is a comprehensive web application designed to help travel enthusiasts easily plan and customize their trips. It provides personalized travel options, including flights, accommodations, and activities, all tailored to the user\'s preferences and interests.'
  },
  {
    image: '../assets/images/techblog.png',
    title: 'TechBlog',
    tech: 'HTML, CSS, JavaScript, Node.js, Express, Sequelize, MySQL',
    link: 'https://the-tech-blog-16-09-800bdce7db85.herokuapp.com/',
    repo: 'https://github.com/StgoWF/TechBlog',
    description: 'TechBlog is a dynamic web application that allows users to create, edit, and delete blog posts. Users can also comment on posts, making it an interactive platform for sharing technical insights and discussions.'
  },
  {
    image: '../assets/images/note-taker.png',
    title: 'Note Taker',
    tech: 'HTML, CSS, JavaScript, Node.js, Express',
    link: 'https://note-taker1695-76cb5ccb3d63.herokuapp.com/',
    repo: 'https://github.com/StgoWF/NoteTaker',
    description: 'Note Taker is an application that allows users to write, save, and delete notes. This application uses an Express.js back end and saves and retrieves note data from a JSON file.'
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
