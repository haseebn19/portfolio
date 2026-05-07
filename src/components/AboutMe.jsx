import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {
    faArrowDown,
    faBriefcase,
    faEnvelope,
    faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import profilePic from '../assets/images/picture.jpg';
import {profile} from '../data/profile';
import {getProjectStats} from '../data/projects';
import {EXTERNAL_LINK_PROPS, SOCIAL_LINKS, scrollToSection} from '../utils/constants';

const socialLinks = [
    {label: 'GitHub', href: SOCIAL_LINKS.github, icon: faGithub, external: true},
    {label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: faLinkedin, external: true},
    {label: 'Email', href: SOCIAL_LINKS.email, icon: faEnvelope, external: false}
];

function AboutMe() {
    const projectStats = getProjectStats();
    const proofPoints = [
        {value: projectStats.total, label: 'projects'},
        {value: projectStats.types, label: 'project types'},
        {value: projectStats.live, label: 'live demos'}
    ];

    return (
        <div className="hero-layout">
            <div className="hero-copy">
                <p className="eyebrow">
                    <FontAwesomeIcon icon={faBriefcase} />
                    {profile.availability}
                </p>

                <h1>{profile.headline}</h1>

                <p className="hero-intro">{profile.intro}</p>

                <div className="hero-meta" aria-label="Personal details">
                    <span>{profile.name}</span>
                    <span>{profile.role}</span>
                    <span>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        {profile.location}
                    </span>
                </div>

                <div className="hero-actions" aria-label="Contact and profile links">
                    {socialLinks.map(({label, href, icon, external}) => (
                        <a
                            key={label}
                            href={href}
                            {...(external ? EXTERNAL_LINK_PROPS : {})}
                            className="action-link"
                        >
                            <FontAwesomeIcon icon={icon} />
                            <span>{label}</span>
                        </a>
                    ))}
                </div>
            </div>

            <aside className="hero-panel" aria-label="Portfolio snapshot">
                <div className="portrait-frame">
                    <img src={profilePic} alt="Haseeb Niazi" />
                </div>

                <div className="proof-grid">
                    {proofPoints.map((point) => (
                        <div className="proof-item" key={point.label}>
                            <strong>{point.value}</strong>
                            <span>{point.label}</span>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className="work-jump"
                    onClick={() => scrollToSection('work')}
                >
                    <FontAwesomeIcon icon={faArrowDown} />
                    <span>Browse projects</span>
                </button>
            </aside>
        </div>
    );
}

export default AboutMe;
