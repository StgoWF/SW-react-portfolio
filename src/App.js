// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Resume from './components/Resume.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx';
import './App.css';

const App = () => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const toggleContactModal = () => {
    setContactModalOpen(!isContactModalOpen);
  };

  return (
    <Router>
      <div className="app-container">
        <Header toggleContactModal={toggleContactModal} />
        <div className="content-container">
          <Main />
          <Footer />
        </div>
        <ContactModal isOpen={isContactModalOpen} onClose={toggleContactModal} />
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
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </animated.div>
  ));
};

export default App;
