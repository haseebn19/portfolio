import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {capabilities, languages} from '../data/profile';

function CapabilityCard({capability}) {
    return (
        <article className="capability-card">
            <div className="capability-icon" aria-hidden="true">
                <FontAwesomeIcon icon={capability.icon} />
            </div>

            <div className="capability-copy">
                <h3>{capability.title}</h3>
                <p>{capability.summary}</p>
            </div>

            <ul className="tool-list" aria-label={`${capability.title} tools`}>
                {capability.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                ))}
            </ul>
        </article>
    );
}

function Skills() {
    return (
        <div className="skills-container">
            <div className="section-heading">
                <p className="eyebrow">Technical skills</p>
                <h2>Languages and tools</h2>
                <p>Technologies used across my projects.</p>
            </div>

            <div className="languages-bar" role="group" aria-label="Core programming languages">
                <p className="eyebrow">Core languages</p>
                <div className="languages-list">
                    {languages.map((lang) => (
                        <span key={lang}>{lang}</span>
                    ))}
                </div>
            </div>

            <div className="capability-grid">
                {capabilities.map((capability) => (
                    <CapabilityCard capability={capability} key={capability.title} />
                ))}
            </div>
        </div>
    );
}

export default Skills;
