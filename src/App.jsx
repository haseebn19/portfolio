// Import React library and various components from react-router-dom
import React from 'react';
import {HashRouter as Router, Route, Link, Routes, useLocation} from 'react-router-dom';

// Import custom components for AboutMe and Projects
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';

// Navigation component
function Navigation() {
  const location = useLocation();
  return (
    <nav>
      <ul>
        <li>
          <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
        </li>
        <li>
          <Link className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} to="/projects">Projects</Link>
        </li>
        <li> {/*navigation link for Skills*/}
          <Link className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`} to="/skills">Skills</Link>
        </li>
      </ul>
    </nav>
  );
}

// Define the App component
function App() {
  return (
    // Use Router to enable client-side routing
    <Router>
      <div className="container">
        {/* Display the main title */}
        <h1>Haseeb Niazi</h1>

        {/* Navigation menu */}
        <Navigation />

        {/* Main content frame */}
        <div className="frame">
          {/* Define routes for different pages */}
          <Routes>
            {/* Route for the Home page, renders the AboutMe component */}
            <Route path="/" element={<AboutMe />} />

            {/* Route for the Projects page, renders the Projects component */}
            <Route path="/projects" element={<Projects />} />

            {/* Route for the Skills page, renders the Skills component */}
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
