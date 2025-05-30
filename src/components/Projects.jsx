import React, {useState, useEffect} from 'react';
import {createPortal} from 'react-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faPlay, faPause, faExpand,
  faCode, faDatabase, faGamepad, faCloud, faMobile, faRocket,
  faCalendarAlt, faLock, faKey, faUser, faSearch
} from '@fortawesome/free-solid-svg-icons';
import {projects, featuredProjectIds} from '../data/projects';
import {ProjectLink} from './ProjectLink';

// Simple icon mapping
const icons = {
  faCode, faDatabase, faGamepad, faCloud, faMobile, faRocket,
  faCalendarAlt, faLock, faKey, faUser, faSearch
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

  // Get featured projects or all projects based on state
  const displayProjects = showAll
    ? projects
    : projects.filter(project => featuredProjectIds.includes(project.id));

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

      <div className={`projects-grid ${isTransitioning ? 'transitioning' : ''}`}>
        {displayProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
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
    </div>
  );
}

export default Projects;