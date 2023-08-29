// Import React library, useEffect hook, and various components from react-router-dom
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Link, Routes, useNavigate, useLocation} from 'react-router-dom';

// Import custom components for AboutMe and Projects
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

// Define the App component
function App() {
  // Get the navigate function from useNavigate hook
  const navigate = useNavigate();

  // Get the current location from useLocation hook
  const location = useLocation();

  // Use useEffect to navigate based on the current URL
  useEffect(() => {
    if (location.pathname === '/projects') {
      navigate('/projects');
    } else {
      navigate('/home');
    }
  }, [navigate, location.pathname]);

  return (
    // Use Router to enable client-side routing
    <Router>
      <div className="container">
        {/* Display the main title */}
        <h1>Haseeb Niazi</h1>

        {/* Navigation menu */}
        <nav>
          <ul>
            {/* Link to the Home page */}
            <li>
              <Link className="nav-link" to="/home">Home</Link>
            </li>

            {/* Link to the Projects page */}
            <li>
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>

        {/* Main content frame */}
        <div className="frame">
          {/* Define routes for different pages */}
          <Routes>
            {/* Route for the Home page, renders the AboutMe component */}
            <Route path="/home" element={<AboutMe />} />

            {/* Route for the Projects page, renders the Projects component */}
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Export the App component to be used in other parts of the app
export default App;
