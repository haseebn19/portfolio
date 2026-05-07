import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import {profile, workingStyle} from './data/profile';
import {EXTERNAL_LINK_PROPS, NAV_ITEMS, SOCIAL_LINKS, scrollToSection} from './utils/constants';
import {useBackToTop, useScrollPosition} from './utils/hooks';

function Navigation({activeSection, onSectionChange}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {isScrolled} = useScrollPosition();

    const handleSectionChange = (sectionId) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
        onSectionChange(sectionId);
    };

    return (
        <header className={`topbar ${isScrolled ? 'topbar-scrolled' : ''}`}>
            <button
                type="button"
                className="brand-mark"
                onClick={() => handleSectionChange('intro')}
                aria-label="Back to introduction"
            >
                <strong>{profile.name}</strong>
                <span>{profile.role}</span>
            </button>

            <button
                type="button"
                className="mobile-menu-toggle"
                onClick={() => setIsMenuOpen((current) => !current)}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
            >
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>

            <nav className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`} aria-label="Primary navigation">
                {NAV_ITEMS.map(({id, label}) => (
                    <button
                        type="button"
                        key={id}
                        className={`nav-link ${activeSection === id ? 'active' : ''}`}
                        onClick={() => handleSectionChange(id)}
                    >
                        {label}
                    </button>
                ))}
            </nav>
        </header>
    );
}

function AboutSection() {
    return (
        <div className="about-detail">
            <div className="section-heading">
                <p className="eyebrow">About the way I work</p>
                <h2>Practical software built for reliability.</h2>
                <p>
                    I focus on the edge cases and implementation details that make tools actually
                    useful in real production environments.
                </p>
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
                <h2>Have a role, project, or codebase that needs careful hands?</h2>
                <p>
                    I am based in Ontario and interested in software engineering work where
                    practical product sense and clean implementation both matter.
                </p>
            </div>

            <div className="contact-actions">
                <a href={SOCIAL_LINKS.email} className="action-link action-link-primary">
                    Email Haseeb
                </a>
                <a href={SOCIAL_LINKS.github} {...EXTERNAL_LINK_PROPS} className="icon-link">
                    <FontAwesomeIcon icon={faGithub} />
                    <span>GitHub</span>
                </a>
                <a href={SOCIAL_LINKS.linkedin} {...EXTERNAL_LINK_PROPS} className="icon-link">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    );
}

function BackToTop() {
    const {isVisible, scrollToTop} = useBackToTop();

    return (
        <button
            className={`back-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            type="button"
            aria-label="Back to top"
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
}

function App() {
    const [activeSection, setActiveSection] = useState('work');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {rootMargin: '-35% 0px -50% 0px', threshold: 0}
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="app">
            <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

            <main>
                <section id="intro" className="page-section hero-section">
                    <AboutMe />
                </section>

                <section id="work" className="page-section work-section">
                    <Projects />
                </section>

                <section id="capabilities" className="page-section capability-section">
                    <Skills />
                </section>

                <section id="about" className="page-section about-section">
                    <AboutSection />
                </section>

                <section id="contact" className="page-section contact-section">
                    <ContactSection />
                </section>
            </main>

            <BackToTop />
        </div>
    );
}

export default App;
