import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faDesktop,
    faDiagramProject,
    faLayerGroup,
    faShieldHalved
} from '@fortawesome/free-solid-svg-icons';
import {capabilities, languages} from '../data/profile';

const capabilityIcons = [faLayerGroup, faDiagramProject, faDesktop, faShieldHalved];

function CapabilityCard({capability, index}) {
    return (
        <article className="capability-card">
            <div className="capability-icon" aria-hidden="true">
                <FontAwesomeIcon icon={capabilityIcons[index] || faLayerGroup} />
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
                <p className="eyebrow">Capabilities</p>
                <h2>Technical expertise and core capabilities.</h2>
                <p>
                    The tools and frameworks I rely on to build frontends, backends, and desktop applications.
                </p>
            </div>

            <div className="languages-bar" aria-label="Core programming languages">
                <p className="eyebrow">Core Languages</p>
                <div className="languages-list">
                    {languages.map((lang) => (
                        <span key={lang} className="language-chip">{lang}</span>
                    ))}
                </div>
            </div>

            <div className="capability-grid">
                {capabilities.map((capability, index) => (
                    <CapabilityCard
                        capability={capability}
                        index={index}
                        key={capability.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default Skills;
