import React from 'react';
import './styles/app.scss';
import { Element } from 'react-scroll';
import Navigation from './views/Header';
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';

function Portfolio() {
  return (
    <div className="App">
        <Navigation/>
        <Element 
          name = "Content" 
          className="Content" 
          id="Content"
        >
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
        </Element>  
    </div>
  );
}

export default Portfolio;
