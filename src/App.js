import React from 'react';
import Nav from './components/Nav';
import { Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import './App.css';

const App = () => {
  return (
    <div>
      <Nav />
      <div className="home">
        <Route exact path="/">
          <Home />
          <Projects />
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </div>
    </div>
  );
}

export default App;