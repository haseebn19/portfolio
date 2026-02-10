import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faGithub, faPython, faJava, faJs, faReact, faHtml5, faCss3Alt,
    faGit, faFigma, faDocker, faNode, faMicrosoft
} from '@fortawesome/free-brands-svg-icons';
import {
    faDatabase, faCode, faTools, faTerminal, faGamepad,
    faMicrochip, faCircleCheck, faDesktop, faGears, faVial,
    faBolt, faWind, faMobile, faDiagramProject
} from '@fortawesome/free-solid-svg-icons';

function SkillCard({title, skills, icon}) {
    return (
        <div className="skill-category card-base">
            <div className="category-header">
                <FontAwesomeIcon icon={icon} className="category-icon" />
                <h3>{title}</h3>
            </div>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <div className="skill-icon">
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
            title: "Languages",
            icon: faCode,
            skills: [
                {name: "Python", icon: faPython},
                {name: "JavaScript", icon: faJs},
                {name: "TypeScript", icon: faCode},
                {name: "Java", icon: faJava},
                {name: "C", icon: faMicrochip},
                {name: "C#", icon: faMicrosoft},
                {name: "Lua", icon: faTerminal}
            ]
        },
        {
            title: "Frontend Development",
            icon: faReact,
            skills: [
                {name: "React", icon: faReact},
                {name: "HTML5", icon: faHtml5},
                {name: "CSS3", icon: faCss3Alt},
                {name: "TailwindCSS", icon: faWind},
                {name: "Zustand", icon: faBolt},
                {name: "Framer Motion", icon: faCode},
                {name: "PWA", icon: faMobile},
                {name: "Vite", icon: faBolt}
            ]
        },
        {
            title: "Backend & Services",
            icon: faDatabase,
            skills: [
                {name: "Spring Boot", icon: faJava},
                {name: "Node.js", icon: faNode},
                {name: "discord.py", icon: faPython},
                {name: "PostgreSQL", icon: faDatabase},
                {name: "MariaDB", icon: faDatabase},
                {name: "SQLite", icon: faDatabase},
                {name: "SQL", icon: faDatabase}
            ]
        },
        {
            title: "Desktop & Game Dev",
            icon: faDesktop,
            skills: [
                {name: "PyQt6", icon: faPython},
                {name: ".NET", icon: faMicrosoft},
                {name: "WPF", icon: faMicrosoft},
                {name: "Windows Forms", icon: faMicrosoft},
                {name: "MVVM", icon: faDiagramProject},
                {name: "Roblox Studio", icon: faGamepad}
            ]
        },
        {
            title: "Tools & DevOps",
            icon: faTools,
            skills: [
                {name: "Git", icon: faGit},
                {name: "GitHub", icon: faGithub},
                {name: "GitHub Actions", icon: faGears},
                {name: "Docker", icon: faDocker},
                {name: "Linux", icon: faTerminal},
                {name: "Figma", icon: faFigma}
            ]
        },
        {
            title: "Testing",
            icon: faCircleCheck,
            skills: [
                {name: "pytest", icon: faPython},
                {name: "xUnit", icon: faMicrosoft},
                {name: "Vitest", icon: faVial},
                {name: "React Testing Library", icon: faReact}
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
