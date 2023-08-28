import React, { useState } from 'react';

const projects = [
  { 
    name: 'Discord Calendar Bot', 
    description: 'The Calendar Bot enhances event management and organization among Discord server members. It allows users to manage their events and timezones directly within Discord, simplifying the process of checking availability and planning events.',
    features: [
      'Personalized Timezone Management',
      'Event Management',
      'Events List',
      'Timezones List'
    ],
    githubLink: 'https://github.com/haseebn19/calendar-bot',
    techStack: ['Python', 'Pycord API'],
    image: 'https://github.com/haseebn19/calendar-bot/raw/main/logo.png'
  },
  { 
    name: 'SSH Key Generator', 
    description: 'SSH Key Generator simplifies the process of generating SSH keys. Built with Python and Tkinter, it provides a user-friendly interface for generating SSH keys with different algorithms and key lengths.',
    features: [
      'Algorithm Selection',
      'Key Length Options',
      'Generate Keys',
      'Public Key Display',
      'Comment and Passphrase',
      'Save Keys'
    ],
    githubLink: 'https://github.com/haseebn19/ssh-keygen',
    techStack: ['Python', 'Tkinter'],
    image: 'https://github.com/haseebn19/ssh-keygen/raw/main/logo.png'
  },
];

function Projects() {
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
      <h2>About Me</h2>
      <p>I'm Haseeb Niazi, a Software Engineer with a passion for coding and problem-solving. I enjoy exploring software development.</p>
      <h3>Technologies & Tools</h3>
      <p>Languages: Python, Java, JavaScript, Lua, C, HTML & CSS, React</p>
      <p>Tools: Visual Studio, GitHub, Docker, Slack, Trello</p>
      
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <button onClick={() => toggleProject(index)}>
              {project.name} {expandedProject === index ? '▲' : '▼'}
            </button>
            {expandedProject === index && (
              <div className="project-frame">
                <img src={project.image} alt={project.name} width="100" />
                <p>{project.description}</p>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
            )}
          </li>
        ))}
      </ul>
      <p>Check out my <a href="https://github.com/haseebn19" target="_blank" rel="noopener noreferrer">GitHub profile</a> to view all my projects.</p>
    </div>
  );
}

export default Projects;
