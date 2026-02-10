import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import profilePic from '../assets/images/picture.png';
import {SOCIAL_LINKS, EXTERNAL_LINK_PROPS} from '../utils/constants';

function AboutMe() {
    const isAvailableForHire = true;

    return (
        <div className="about-container">
            <div className="hero-grid">
                <div className="hero-content">
                    <h1 className="glowing-text">
                        <span className="gradient-text">Hello, I&apos;m Haseeb</span>
                    </h1>

                    <h2 className="hero-subtitle">
                        Software Engineer
                        <span className="hero-location">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            Ontario, Canada
                        </span>
                    </h2>

                    <p className="hero-text">
                        Passionate software engineer with expertise in full-stack development,
                        problem-solving, and creating innovative solutions. I love exploring
                        new technologies and building applications that make a difference.
                    </p>

                    {isAvailableForHire && (
                        <div className="status-container">
                            <div className="status-badge available">
                                <span className="status-dot"></span>
                                Available for hire
                            </div>
                        </div>
                    )}                    <div className="hero-actions">
                        <a
                            href={SOCIAL_LINKS.github}
                            {...EXTERNAL_LINK_PROPS}
                            className="social-link github"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                            <span>GitHub</span>
                        </a>
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            {...EXTERNAL_LINK_PROPS}
                            className="social-link linkedin"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href={SOCIAL_LINKS.email}
                            className="social-link email"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Email</span>
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="image-container">
                        <img src={profilePic} alt="Haseeb Niazi" />
                    </div>
                    <div className="background-pattern"></div>
                    <div className="background-glow"></div>
                </div>
            </div>

        </div>
    );
}

export default AboutMe;
