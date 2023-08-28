// Importing React and Projects component
import React from 'react';
import Projects from './Projects';
import AboutMe from './AboutMe';
import './styles.css';

// App component
function App() {
  // JSX for App component
  return (
    <div className="container">
      <h1>Haseeb Niazi - Portfolio</h1>
      <AboutMe />
      <Projects />
    </div>
  );
}

// Exporting App component
export default App;
