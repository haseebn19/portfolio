// Import React library and various components from react-router-dom
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

// Import custom components for AboutMe and Projects
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

// Define the App component
function App() {
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
              <Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Home</Link>
            </li>

            {/* Link to the Projects page */}
            <li>
              <Link className="nav-link" to={process.env.PUBLIC_URL + "/projects"}>Projects</Link>
            </li>
          </ul>
        </nav>

        {/* Main content frame */}
        <div className="frame">
          {/* Define routes for different pages */}
          <Routes>
            {/* Route for the Home page, renders the AboutMe component */}
            <Route path={process.env.PUBLIC_URL + "/"} element={<AboutMe />} />

            {/* Route for the Projects page, renders the Projects component */}
            <Route path={process.env.PUBLIC_URL + "/projects"} element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Export the App component to be used in other parts of the app
export default App;
