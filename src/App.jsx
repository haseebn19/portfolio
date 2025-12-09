import {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faHome, faCode, faCog, faBars, faTimes, faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import {scrollToSection} from './utils/constants';
import {useScrollPosition, useBackToTop} from './utils/hooks';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';

function Navigation({activeSection, onSectionChange}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isScrolled} = useScrollPosition();

  const navItems = [
    {id: 'home', label: 'About', icon: faHome},
    {id: 'projects', label: 'Projects', icon: faCode},
    {id: 'skills', label: 'Skills', icon: faCog}
  ];
  const handleSectionChange = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
    onSectionChange(sectionId);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <h2>Haseeb Niazi</h2>
        <span className="nav-subtitle">Software Engineer</span>
      </div>

      <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
        {navItems.map(({id, label, icon}) => (
          <li key={id}>            <button
            className={`nav-link ${activeSection === id ? 'active' : ''}`}
            onClick={() => handleSectionChange(id)}
          >
            <FontAwesomeIcon icon={icon} />
            <span>{label}</span>
          </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function BackToTop() {
  const {isVisible, scrollToTop} = useBackToTop();

  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {threshold: 0.5});

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="app">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <main>
        <section id="home" className="section hero-section">
          <AboutMe />
        </section>

        <section id="projects" className="section projects-section">
          <Projects />
        </section>

        <section id="skills" className="section skills-section">
          <Skills />
        </section>
      </main>

      <BackToTop />
    </div>
  );
}

export default App;
