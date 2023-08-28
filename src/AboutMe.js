// Importing React
import React from 'react';
// Importing the image
import profilePic from './logo.jpg';
// Importing font awesome
import 'font-awesome/css/font-awesome.min.css';


// AboutMe component
function AboutMe() {
    // JSX for AboutMe component
    return (
        <div>
            <h2>About Me</h2>
            <img src={profilePic} alt="Haseeb Niazi" style={{width: '150px', borderRadius: '50%'}} />
            <p>
                I'm Haseeb Niazi, a Software Engineer with a passion for coding and problem-solving.
                I enjoy creating Discord bots and exploring game development.
                My expertise lies in languages like Python, Java, Lua, C, and HTML.
            </p>
            <h3>🛠️ Technologies & Tools</h3>
            <p>Languages: Python, Java, JavaScript, Lua, C, HTML & CSS, React</p>
            <p>Tools: Visual Studio, GitHub, Docker, Slack, Trello</p>
            <h3>🌱 Current Learning Goals</h3>
            <ul>
                <li>Databases: Diving deep into the world of databases.</li>
                <li>Machine Learning: Exploring machine learning algorithms.</li>
                <li>Software Development: Refining software development skills.</li>
                <li>Frameworks: Experimenting with various frameworks.</li>
            </ul>
            <h3>⚡ Hobbies & Interests</h3>
            <ul>
                <li>GUI Scripting: Interested in programming user interfaces.</li>
                <li>Discord Bots: Love creating and experimenting with Discord bots.</li>
                <li>Game Development: Enjoy working on game development projects.</li>
            </ul>
            <h3>📫 Contact & Info:</h3>
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
