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
    image: '../assets/images/coding-quiz-screenshot.png',
    title: 'Code Quiz',
    tech: 'HTML, CSS, JavaScript',
    link: 'https://stgowf.github.io/Coding_Quiz_Challange/',
    repo: 'https://github.com/StgoWF/Coding_Quiz_Challange',
    description: 'This application is a timed coding quiz with multiple-choice questions. It dynamically updates HTML and CSS powered by JavaScript, featuring a polished and responsive user interface. It includes a timer, tracks high scores, and allows users to save their initials and scores.'
  },
  {
    image: '../assets/images/Workdayscheduler.png',
    title: 'Work Day Scheduler',
    tech: 'HTML, CSS, JavaScript, jQuery, Day.js, LocalStorage',
    link: 'https://stgowf.github.io/WorkDayScheduler/',
    repo: 'https://github.com/StgoWF/WorkDayScheduler',
    description: 'The Work Day Scheduler is a user-friendly web application designed to help employees manage their daily tasks effectively. It features a dynamic calendar for standard business hours (9am to 5pm) with color-coded time blocks to indicate past, present, and future hours. Users can add, save, and delete events, with data persistence ensured through LocalStorage. The application uses Day.js to handle date and time functionalities, providing a polished and responsive user interface.'
  },
  {
    image: '../assets/images/WeatherDashboard.png',
    title: 'Weather Dashboard',
    tech: 'HTML, CSS, JavaScript, OpenWeather API, LocalStorage',
    link: 'https://stgowf.github.io/Weather_Dashboard/',
    repo: 'https://github.com/StgoWF/Weather_Dashboard',
    description: 'This application is a weather dashboard that uses the OpenWeather API to retrieve weather data for cities. It features dynamically updated HTML and CSS and includes current and future weather conditions. Users can see the city name, date, weather conditions, temperature, humidity, and wind speed. A 5-day forecast is also provided.',
  },
  

  {
    image: '../assets/images/TailorMyTrip.png',
    title: 'TailorMyTrip',
    tech: 'HTML, CSS, JavaScript, Fetch API, LocalStorage',
    link: 'https://stgowf.github.io/TailorMyTrip/',
    repo: 'https://github.com/StgoWF/TailorMyTrip',
    description: 'TailorMyTrip is an interactive front-end application designed to enhance travel planning by providing a streamlined interface for searching and viewing travel options. The platform connects to multiple server-side APIs to offer real-time updates on flight and hotel availability. Users can input their travel preferences and view the latest options, with data being stored locally to maintain their selections. The application features a polished, responsive design and a user-friendly interface, including modal interactions for a seamless user experience.'
  },
  {
    image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6',
    title: 'Professional README Generator',
    tech: 'Node.js, Inquirer.js',
    link: 'https://drive.google.com/file/d/1fDhlcjanjI9Ehivsg2OdYSlFFgdQ2mrf/view', 
    repo: 'https://github.com/StgoWF/readme-generator',
    description: 'This command-line application automates the creation of a professional README file for new projects. It leverages Node.js and the Inquirer package to gather project details from the user and generate a README that adheres to best practices. Check the video walkthrough for a demonstration.',
  },
  {
    image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6',
    title: 'SVG Logo Maker',
    tech: 'Node.js, Inquirer.js, Jest',
    link: 'https://drive.google.com/file/d/1HjYXnXXIXiIRDn3IZcCwkXEzp5CJs_D9/view', // Link to video walkthrough
    repo: 'https://github.com/StgoWF/SVG-Logo_Maker',
    description: 'SVG Logo Maker is a Node.js command-line application that allows users to create custom SVG logos. It uses Node.js and Inquirer.js to collect user inputs for shape, color, and text to generate personalized SVG files. Jest is used for testing the shape classes.',
  },


  {
    image: '../assets/images/note-taker.png',
    title: 'Note Taker',
    tech: 'HTML, CSS, JavaScript, Node.js, Express',
    link: 'https://note-taker1695-76cb5ccb3d63.herokuapp.com/',
    repo: 'https://github.com/StgoWF/NoteTaker',
    description: 'Note Taker is an application that allows users to write, save, and delete notes. This application uses an Express.js back end and saves and retrieves note data from a JSON file.'
  },

  {
    image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6',
    title: 'Employee Tracker',
    tech: 'Node.js, Inquirer.js, MySQL2',
    link: 'https://drive.google.com/file/d/1jUzZKvRlQIrru9eSWkk7R8Fb4wIJOtx9/view', 
    repo: 'https://github.com/StgoWF/Employee-Tracker',
    description: 'Employee Tracker is a command-line application that allows business owners to manage their company\'s departments, roles, and employee information. It uses Node.js, Inquirer.js, and MySQL2 to interact with the user and the database.',
  },
  {
  image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6', 
  title: 'E-commerce Backend',
  tech: 'Node.js, Express.js, Sequelize, MySQL',
  link: 'https://drive.google.com/file/d/1wcfjGP_Cmv1PdqWrsv65yGUz7A0smV7S/view', 
  repo: 'https://github.com/StgoWF/ecommerce-backend-sequelize-expresss',
  description: 'This project is the backend for an e-commerce site. It uses Express.js API with Sequelize to interact with a MySQL database. The backend supports all CRUD operations for managing products, categories, and tags.',
  },
  {
    image: '../assets/images/techblog.png',
    title: 'TechBlog',
    tech: 'HTML, CSS, JavaScript, Node.js, Express.js, Sequelize, MySQL',
    link: 'https://the-tech-blog-16-09-800bdce7db85.herokuapp.com/',
    repo: 'https://github.com/StgoWF/TechBlog',
    description: 'TechBlog is a dynamic web application that allows users to create, edit, and delete blog posts. Users can also comment on posts, making it an interactive platform for sharing technical insights and discussions.'
  },
  {
    image: '../assets/images/Homepage.png',
    title: 'FlightQuest',
    tech: 'HTML, CSS, JavaScript, Node.js, Express, MySQL, Sequelize, Handlebars, bcrypt',
    link: 'https://flightquest-e755c2dda8ba.herokuapp.com/',
    repo: 'https://github.com/StgoWF/FlightQuest',
    description: 'FlightQuest is a comprehensive web application designed to help travel enthusiasts easily plan and customize their trips. It provides personalized travel options, including flights, accommodations, and activities, all tailored to the user\'s preferences and interests.'
  },
  {
    image: 'https://images.unsplash.com/photo-1542831371-d531d36971e6',
    title: 'Social Network API',
    tech: 'Node.js, Express.js, MongoDB, Mongoose',
    link: 'https://drive.google.com/file/d/1HjYXnXXIXiIRDn3IZcCwkXEzp5CJs_D9/view',
    repo: 'https://github.com/StgoWF/social-network-api',
    description: 'This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM.'
  },
  {
    image: '../assets/images/text-editor.png',
    title: 'Text Editor',
    tech: 'HTML, CSS, JavaScript, Webpack, IndexedDB, PWA, Service Workers, Workbox',
    link: 'https://pwa-text-editor-q90t.onrender.com/',
    repo: 'https://github.com/StgoWF/PWA-text-editor',
    description: 'This Text Editor is a progressive web application (PWA) that allows users to create notes or code snippets with or without an internet connection. It features a client-server folder structure, utilizes IndexedDB for data persistence, and employs webpack for bundling JavaScript files. The application is designed to work offline, with a service worker registered using Workbox to cache static assets. Users can install the web application as an icon on their desktop for easy access.'
  },

  {
    image: '../assets/images/react-portfolio.png',
    title: 'React Portfolio',
    tech: 'React, JavaScript, CSS, Netlify',
    link: 'https://santiago-weinstein-portfolio.netlify.app/',
    repo: 'https://github.com/StgoWF/SW-react-portfolio',
    description: 'This is a portfolio website built using React. It showcases my web development projects and skills, with a focus on creating a responsive and dynamic user interface.'
  },
  {
    "image": "../assets/images/book-search-engine.png",
    "title": "Book Search Engine",
    "tech": "React, GraphQL, Apollo Server, MongoDB, Node.js, Express.js",
    "link": "https://book-search-graphql-svk3.onrender.com/",
    "repo": "https://github.com/StgoWF/book-search-graphql",
    "description": "This is a book search engine built using the MERN stack and refactored to use a GraphQL API with Apollo Server. It allows users to search for books using the Google Books API and save their favorite books to a personal account."
  }


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
