// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <Main />
          <Footer />
        </div>
      </div>
    </Router>
  );
};

const Main = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  return transitions((props, item) => (
    <animated.div style={props} className="main-content">
      <Routes location={item}>
        <Route exact path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </animated.div>
  ));
};

export default App;
