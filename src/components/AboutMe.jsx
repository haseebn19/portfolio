import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import profilePic from '../assets/images/picture.jpg';

function AboutMe() {
    const isAvailableForHire = true; const openContactForm = () => {
        window.open('https://www.linkedin.com/in/haseebn/', '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="about-container">
            <div className="hero-grid">
                <div className="hero-content">
                    <h1 className="glowing-text">
                        <span className="gradient-text">Hello, I'm Haseeb</span>
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

                    <div className="status-container">
                        <button
                            className={`status-badge ${isAvailableForHire ? 'available' : ''}`}
                            onClick={openContactForm}
                            title="Click to view contact information"
                        >
                            <span className="status-dot"></span>
                            {isAvailableForHire ? 'Available for hire' : 'Currently employed'}
                        </button>
                    </div>

                    <div className="hero-actions">
                        <a
                            href="https://github.com/haseebn19"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link github"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/haseebn/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link linkedin"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="mailto:haseeb.kn@outlook.com"
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

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div className="arrow"></div>
            </div>
        </div>
    );
}

export default AboutMe;
