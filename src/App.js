import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Haseeb Niazi</h1>
        <nav>
          <ul>
            <li>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
        <div className="frame">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
