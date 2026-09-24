import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faArrowDown, faEnvelope, faFilePdf, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import profilePic from '../assets/images/picture.jpg';
import {profile} from '../data/profile';
import {EXTERNAL_LINK_PROPS, SOCIAL_LINKS, scrollToSection} from '../utils/constants';

const socialLinks = [
    {label: 'GitHub', href: SOCIAL_LINKS.github, icon: faGithub, external: true},
    {label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: faLinkedin, external: true},
    {label: 'Email', href: SOCIAL_LINKS.email, icon: faEnvelope, external: false}
];

function AboutMe() {
    return (
        <div className="hero-layout">
            <div className="hero-copy">
                <p className="hero-role">{profile.role}</p>
                <h1>{profile.headline}</h1>
                <p className="hero-intro">{profile.intro}</p>
                <div className="hero-cta">
                    <a href="/Haseeb_Niazi_Resume.pdf" {...EXTERNAL_LINK_PROPS} className="action-link action-link-primary">
                        <FontAwesomeIcon icon={faFilePdf} />
                        View resume
                    </a>
                    <button type="button" className="action-link" onClick={() => scrollToSection('work')}>
                        View projects <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                </div>
                <div className="hero-actions" aria-label="Contact and profile links">
                    {socialLinks.map(({label, href, icon, external}) => (
                        <a key={label} href={href} {...(external ? EXTERNAL_LINK_PROPS : {})} className="social-link">
                            <FontAwesomeIcon icon={icon} />
                            <span>{label}</span>
                        </a>
                    ))}
                </div>
            </div>
            <aside className="hero-panel" aria-label="Profile">
                <div className="portrait-frame">
                    <img src={profilePic} alt="Haseeb Niazi" fetchPriority="high" width="480" height="600" />
                </div>
                <div className="portrait-caption">
                    <span><FontAwesomeIcon icon={faMapMarkerAlt} /> {profile.location}</span>
                    <span>{profile.availability}</span>
                </div>
            </aside>
        </div>
    );
}

export default AboutMe;
