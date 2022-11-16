// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// <FontAwesomeIcon icon={faEnvelope} />

import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Project from './Components/Projects/Project';
import TechSkills from './Components/TechSkills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <TechSkills />
      <Project />
    </div>
  );
}

export default App;
