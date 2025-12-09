import {useState, useEffect, useMemo} from 'react';
import {createPortal} from 'react-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPlay, faPause, faExpand,
  faCode, faDatabase, faGamepad, faCloud, faMobile, faRocket,
  faCalendarAlt, faLock, faKey, faUser, faSearch, faXmark, faBook
} from '@fortawesome/free-solid-svg-icons';
import {projects, featuredProjectIds} from '../data/projects';
import {ProjectLink} from './ProjectLink';

// Simple icon mapping
const icons = {
  faCode, faDatabase, faGamepad, faCloud, faMobile, faRocket,
  faCalendarAlt, faLock, faKey, faUser, faSearch, faBook
};

function ProjectMedia({media}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // ESC key handler for closing expanded media
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27 && isExpanded) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('keydown', handleEsc, false);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEsc, false);
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded]);

  if (!media) return null;

  const handleVideoControl = (e, action) => {
    e.stopPropagation();
    const video = e.target.closest('.project-media').querySelector('video');
    if (video) {
      if (action === 'play') {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleExpanded = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const closeExpanded = (e) => {
    // Only close if clicking on the overlay background
    if (e.target.classList.contains('expanded-overlay')) {
      setIsExpanded(false);
    }
  };

  const renderMedia = () => {
    if (media.type === 'video') {
      return (
        <div className="video-container">
          <video
            src={media.url}
            poster={media.poster}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />
          <div className="video-controls">
            <button
              className="control-btn"
              onClick={(e) => handleVideoControl(e, isPlaying ? 'pause' : 'play')}
            >
              <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>
            <button
              className="control-btn expand-btn"
              onClick={toggleExpanded}
            >
              <FontAwesomeIcon icon={faExpand} />
            </button>
          </div>
        </div>
      );
    } else if (media.type === 'image') {
      return (
        <div className="image-container">
          <img src={media.url} alt={media.alt || "Project preview"} />
          <button
            className="control-btn expand-btn"
            onClick={toggleExpanded}
          >
            <FontAwesomeIcon icon={faExpand} />
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="project-media">
        {renderMedia()}
      </div>
      {isExpanded && createPortal(
        <div
          className="expanded-overlay"
          onClick={closeExpanded}
        >
          <div
            className="expanded-content"
            onClick={(e) => e.stopPropagation()}
          >
            {media.type === 'video' ? (
              <div className="expanded-video">
                <video
                  src={media.url}
                  poster={media.poster}
                  controls
                  autoPlay={isPlaying}
                />
              </div>
            ) : (
              <div className="expanded-image">
                <img src={media.url} alt={media.alt || "Project preview"} />
              </div>
            )}
            <button
              className="close-btn"
              onClick={() => setIsExpanded(false)}
              title="Close (ESC)"
            >
              ✕
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

function ProjectCard({project}) {
  const [isHovered, setIsHovered] = useState(false);

  return (<div
    className={`project-card card-base ${isHovered ? 'hovered' : ''}`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div className="project-header">
      {project.icon ? (
        <img src={project.icon} alt="" className="project-icon" />) : (
        <div className="project-icon">
          <FontAwesomeIcon icon={icons[project.faIcon] || faCode} />
        </div>
      )}
      <h3 className="project-title">{project.title}</h3>
    </div>

    {project.media && <ProjectMedia media={project.media} />}

    <p className="project-description">{project.description}</p>      <div className="project-features">
      {project.features.map((feature, index) => (
        <div key={index} className="feature-item">
          <span>{feature}</span>
        </div>
      ))}
    </div>

    <div className="tech-stack">
      {project.techStack.map((tech, index) => (
        <span key={index} className="tech-tag">{tech}</span>
      ))}
    </div>      <div className="project-links">
      <ProjectLink url={project.githubUrl} type="github" />
      <ProjectLink url={project.liveUrl} type="demo" />
    </div>
  </div>
  );
}

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const hasFilters = selectedTags.length > 0;

  const allTags = useMemo(() => {
    const map = new Map();
    projects.forEach((project) => {
      (project.techStack || []).forEach((tag) => {
        const key = tag.toLowerCase();
        if (!map.has(key)) {
          map.set(key, tag);
        }
      });
    });
    return Array.from(map.values());
  }, []);

  // Get featured projects or all projects based on state
  const baseProjects = hasFilters
    ? projects
    : showAll
      ? projects
      : projects.filter(project => featuredProjectIds.includes(project.id));

  const filteredProjects = baseProjects.filter((project) => {
    const projectTags = (project.techStack || []).map(tag => tag.toLowerCase());
    const requiredTags = selectedTags.map(tag => tag.toLowerCase());
    const tagsMatch = requiredTags.every(tag => projectTags.includes(tag));
    return tagsMatch;
  });

  const filteredSuggestions = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase();
    if (!normalized) return [];
    return allTags
      .filter((tag) => tag.toLowerCase().includes(normalized))
      .filter((tag) => !selectedTags.some(sel => sel.toLowerCase() === tag.toLowerCase()))
      .slice(0, 6);
  }, [searchTerm, allTags, selectedTags]);

  const addTag = (tag) => {
    const normalized = tag.trim();
    if (!normalized) return;
    const exists = selectedTags.some(sel => sel.toLowerCase() === normalized.toLowerCase());
    if (exists) {
      setSearchTerm('');
      return;
    }
    setSelectedTags([...selectedTags, normalized]);
    setSearchTerm('');
  };

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter(sel => sel !== tag));
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      addTag(searchTerm);
    }
  };

  const handleToggle = () => {
    setIsTransitioning(true);

    // Wait for fade out animation
    setTimeout(() => {
      setShowAll(!showAll);
      // Wait a bit more then fade in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  return (
    <div className="projects-container">
      <h2 className="section-title">
        <span className="gradient-text">
          {showAll ? 'All Projects' : 'Featured Projects'}
        </span>
      </h2>
      <p className="section-subtitle">
        {showAll
          ? 'Explore all my projects across different technologies and domains.'
          : 'Here are some of my notable projects that showcase my technical skills and problem-solving abilities.'
        }
      </p>

        <div className="projects-filter">
          <div className="project-search">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="search"
              placeholder='Search by tech stack or keyword (e.g., TypeScript, PyQt)'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearchKeyDown}
              aria-label="Search projects by technology or keyword"
            />
              {filteredSuggestions.length > 0 && (
                <ul className="project-suggestions">
                  {filteredSuggestions.map((suggestion) => (
                    <li key={suggestion}>
                      <button type="button" onClick={() => addTag(suggestion)}>
                        {suggestion}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
          </div>

          <div className="project-tags">
            {selectedTags.length === 0 && (
              <span className="tag-hint">Add tags to filter projects (e.g., React, TypeScript, PyQt)</span>
            )}
            {selectedTags.map((tag) => (
              <button
                key={tag}
                className="tag-chip"
                onClick={() => removeTag(tag)}
                type="button"
              >
                {tag}
                <FontAwesomeIcon icon={faXmark} className="tag-chip-icon" />
              </button>
            ))}
          </div>
        </div>

        <div className="projects-actions">
          <button
            className="view-toggle-button"
            onClick={handleToggle}
            disabled={isTransitioning}
          >
            {showAll ? 'Show Featured Only' : `View All Projects (${projects.length})`}
          </button>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="projects-empty">
            No projects match that query. Try searching for a tech like React, TypeScript, or PyQt.
          </div>
        ) : (
          <div className={`projects-grid ${isTransitioning ? 'transitioning' : ''}`}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
    </div>
  );
}

export default Projects;