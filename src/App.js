import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes, Navigate} from 'react-router-dom';
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
            <Route index element={<Navigate to="/aboutme" />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            {/* Add a 404 page here if needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
