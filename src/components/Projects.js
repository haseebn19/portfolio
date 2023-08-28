// Import React and useState hook from React library
import React, {useState} from 'react';

// Dynamically import all JavaScript files from the 'projects' folder
// This will return an array of filenames that can be used to import the components
const projectComponents = require.context('./projects', true, /\.js$/);
const projectFiles = projectComponents.keys();

// Define the Projects component
const Projects = () => {
  // Declare a state variable to keep track of the currently expanded project
  const [expandedProject, setExpandedProject] = useState(null);

  // Function to toggle the expanded project
  const toggleProject = (index) => {
    // If the clicked project is already expanded, collapse it
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      // Otherwise, expand the clicked project
      setExpandedProject(index);
    }
  };

  // Render the Projects component
  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {/* Loop through the list of project filenames */}
        {projectFiles.map((filename, index) => {
          // Dynamically import the project component based on the filename
          const ProjectComponent = projectComponents(filename).default;

          // Get the display name for the project, if specified, otherwise use the filename
          const displayName = projectComponents(filename).projectName || filename.replace('./', '').replace('.js', '');

          // Render each project as a list item
          return (
            <li key={index}>
              {/* Button to toggle the expanded/collapsed state of the project */}
              <button onClick={() => toggleProject(index)}>
                {displayName} {expandedProject === index ? '▲' : '▼'}
              </button>

              {/* Render the project component if it is expanded */}
              {expandedProject === index && <ProjectComponent />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Export the Projects component to be used in other parts of the app
export default Projects;
