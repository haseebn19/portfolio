// Importing React
import React from 'react';
// Importing the image
import profilePic from '../assets/images/picture.jpg';
// Importing font awesome
import 'font-awesome/css/font-awesome.min.css';


// AboutMe component
function AboutMe() {
    // JSX for AboutMe component
    return (
        <div>
            <img src={profilePic} alt="Haseeb Niazi" style={{width: '9em', borderRadius: '50%'}} />
            <h2>About Me</h2>
            <p>
                I'm Haseeb Niazi, a Software Engineer with a passion for coding and problem-solving. <br></br>
                I enjoy exploring software development and learning new technologies.
            </p>
            <h2>🌱 Current Learning Goals</h2>
            <ul>
                <li>Databases: Diving deep into the world of databases.</li>
                <li>Machine Learning: Exploring machine learning algorithms.</li>
                <li>Software Development: Refining software development skills.</li>
                <li>Frameworks: Experimenting with various frameworks.</li>
            </ul>
            <h2>⚡ Hobbies & Interests</h2>
            <ul>
                <li>Software Development: I love learning about and experimenting with software development. </li>
                <li>GUI Scripting: I'm very interested in learning about and programming user interfaces. </li>
                <li>Discord Bots: I love creating and experimenting with Discord bots. </li>
                <li>Game Development:  I enjoy working on game development projects. </li>
            </ul>
            <h2>📫 Contact & Info:</h2>
            <p>
                <a href="https://www.linkedin.com/in/haseebn/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i> LinkedIn
                </a> |&nbsp;
                <a href="mailto:haseebniazi19@outlook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-envelope"></i> Email
                </a> |&nbsp;
                <a href="https://github.com/haseebn19" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i> GitHub
                </a>
            </p>
        </div>
    );
}

// Exporting AboutMe component
export default AboutMe;
