import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faGithub, faPython, faJava, faJs, faReact, faHtml5, faCss3Alt,
    faGit, faFigma, faSlack, faTrello, faDocker, faDiscord, faNode, faMicrosoft
} from '@fortawesome/free-brands-svg-icons';
import {
    faDatabase, faCode, faTools, faTerminal, faGamepad, faUsers, faMicrochip
} from '@fortawesome/free-solid-svg-icons';

function SkillCard({title, skills, icon}) {
    return (
        <div className="skill-category">
            <div className="category-header">
                <FontAwesomeIcon icon={icon} className="category-icon" />
                <h3>{title}</h3>
            </div>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">                        <div className="skill-icon">
                        <FontAwesomeIcon icon={skill.icon || faCode} />
                    </div>
                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: faCode, skills: [
                {name: "Python", icon: faPython},
                {name: "JavaScript", icon: faJs},
                {name: "Java", icon: faJava},
                {name: "C", icon: faMicrochip},
                {name: "C#", icon: faMicrosoft},
                {name: "SQL", icon: faDatabase},
                {name: "Lua", icon: faTerminal}
            ]
        },
        {
            title: "Web Technologies",
            icon: faReact,
            skills: [
                {name: "React.js", icon: faReact},
                {name: "HTML5", icon: faHtml5},
                {name: "CSS3", icon: faCss3Alt},
                {name: "Node.js", icon: faNode}
            ]
        },
        {
            title: "Tools & Platforms",
            icon: faTools, skills: [
                {name: "Git", icon: faGit},
                {name: "GitHub", icon: faGithub},
                {name: "Docker", icon: faDocker},
                {name: "Visual Studio", icon: faMicrosoft},
                {name: "Roblox Studio", icon: faGamepad}
            ]
        }, {
            title: "Collaboration",
            icon: faUsers,
            skills: [
                {name: "Figma", icon: faFigma},
                {name: "Slack", icon: faSlack},
                {name: "Trello", icon: faTrello},
                {name: "Discord API", icon: faDiscord}
            ]
        }
    ];

    return (
        <div className="skills-container">
            <h2 className="section-title">
                <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <p className="section-subtitle">
                My technical toolkit and areas of expertise in software development.
            </p>

            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <SkillCard
                        key={index}
                        title={category.title}
                        skills={category.skills}
                        icon={category.icon}
                    />
                ))}
            </div>
        </div>
    );
}

export default Skills;
