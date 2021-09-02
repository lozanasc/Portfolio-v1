import './App.css';
import { Element } from 'react-scroll';
import { Toaster } from 'react-hot-toast';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Element 
        name = "Content"
        className="Content"
        id = "Content"
      >
        <Toaster/>
        <Home/>
        <About/>
        <Projects/>
        <Contacts/>
      </Element>
    </div>
  );
}

export default App;
