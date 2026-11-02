import {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp, faBars, faFilePdf, faXmark} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import {profile, workingStyle} from './data/profile';
import {EXTERNAL_LINK_PROPS, NAV_ITEMS} from './utils/constants';
import {useActiveSection, useScrolledPast} from './utils/hooks';

const SECTION_IDS = ['intro', ...NAV_ITEMS.map(({id}) => id)];

function Navigation() {
    const activeSection = useActiveSection(SECTION_IDS);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuToggle = useRef(null);

    useEffect(() => {
        if (!isMenuOpen) return;
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
                menuToggle.current.focus();
            }
        };
        document.addEventListener('keydown', closeOnEscape);
        return () => document.removeEventListener('keydown', closeOnEscape);
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="topbar">
            <a href="#intro" className="brand-mark" onClick={closeMenu}>
                <strong>{profile.name}</strong>
                <span>{profile.role}</span>
            </a>

            <button
                type="button"
                className="mobile-menu-toggle"
                ref={menuToggle}
                aria-controls="primary-navigation"
                onClick={() => setIsMenuOpen((current) => !current)}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
            >
                <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
            </button>

            <nav
                id="primary-navigation"
                className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}
                aria-label="Primary navigation"
            >
                {NAV_ITEMS.map(({id, label}) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={`nav-link ${activeSection === id ? 'active' : ''}`}
                        aria-current={activeSection === id ? 'location' : undefined}
                        onClick={closeMenu}
                    >
                        {label}
                    </a>
                ))}
            </nav>
        </header>
    );
}

function AboutSection() {
    return (
        <div className="about-detail">
            <div className="section-heading">
                <p className="eyebrow">About me</p>
                <h2>Background</h2>
                <p>Programming, coursework, and independent projects.</p>
            </div>

            <div className="principles">
                {workingStyle.map((item) => (
                    <p key={item}>{item}</p>
                ))}
            </div>
        </div>
    );
}

function ContactSection() {
    return (
        <div className="contact-panel">
            <div>
                <p className="eyebrow">Contact</p>
                <h2>Get in touch</h2>
                <p>
                    For software engineering opportunities or questions about my work, you can reach me by email or on
                    LinkedIn.
                </p>
            </div>

            <div className="contact-actions">
                <a href={`mailto:${profile.email}`} className="action-link action-link-primary">
                    {profile.email}
                </a>
                <a href={profile.github} {...EXTERNAL_LINK_PROPS} className="icon-link">
                    <FontAwesomeIcon icon={faGithub} />
                    <span>GitHub</span>
                </a>
                <a href={profile.linkedin} {...EXTERNAL_LINK_PROPS} className="icon-link">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>LinkedIn</span>
                </a>
                <a href={profile.resume} {...EXTERNAL_LINK_PROPS} className="icon-link">
                    <FontAwesomeIcon icon={faFilePdf} />
                    <span>Resume</span>
                </a>
            </div>
        </div>
    );
}

function BackToTop() {
    const isVisible = useScrolledPast(300);

    return (
        <a href="#intro" className={`back-to-top ${isVisible ? 'visible' : ''}`} aria-label="Back to top">
            <FontAwesomeIcon icon={faArrowUp} />
        </a>
    );
}

function App() {
    return (
        <>
            <a href="#main-content" className="skip-to-content">
                Skip to main content
            </a>

            <Navigation />

            <main id="main-content" tabIndex={-1}>
                <section id="intro" className="page-section hero-section">
                    <AboutMe />
                </section>

                <section id="projects" className="page-section projects-section">
                    <Projects />
                </section>

                <section id="skills" className="page-section">
                    <Skills />
                </section>

                <section id="about" className="page-section about-section">
                    <AboutSection />
                </section>

                <section id="contact" className="page-section">
                    <ContactSection />
                </section>
            </main>

            <footer className="site-footer">
                <span>{profile.name}</span>
                <a href="https://github.com/haseebn19/portfolio" {...EXTERNAL_LINK_PROPS}>
                    Portfolio source
                </a>
                <BackToTop />
            </footer>
        </>
    );
}

export default App;
