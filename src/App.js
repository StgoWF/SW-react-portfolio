// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
};

const Main = () => {
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  return transitions((props, item) => (
    <animated.div style={props} className="main-content">
      <Switch location={item}>
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </animated.div>
  ));
};

export default App;
