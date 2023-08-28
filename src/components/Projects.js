import React, {useState} from 'react';

// Dynamically import all files from the 'projects' folder
const projectComponents = require.context('./projects', true, /\.js$/);
const projectFiles = projectComponents.keys();

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {projectFiles.map((filename, index) => {
          const ProjectComponent = projectComponents(filename).default;
          const displayName = projectComponents(filename).projectName || filename.replace('./', '').replace('.js', '');
          return (
            <li key={index}>
              <button onClick={() => toggleProject(index)}>
                {displayName} {expandedProject === index ? '▲' : '▼'}
              </button>
              {expandedProject === index && <ProjectComponent />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
