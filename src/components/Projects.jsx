import {useMemo, useState, useRef, forwardRef, useLayoutEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBook,
    faCalendarAlt,
    faCity,
    faCode,
    faFilter,
    faGamepad,
    faKey,
    faLock,
    faSearch,
    faXmark,
    faChess
} from '@fortawesome/free-solid-svg-icons';
import {getProjectTypes, projects} from '../data/projects';
import {ProjectLink} from './ProjectLink';
import ImagePreview from './ImagePreview';

const icons = {
    faBook,
    faCalendarAlt,
    faCity,
    faCode,
    faGamepad,
    faKey,
    faLock,
    faSearch,
    faChess
};

const normalize = (value) => value.toLowerCase().trim();

const cardVariants = {
    hidden: {opacity: 0, y: 16, scale: 0.97},
    visible: {opacity: 1, y: 0, scale: 1},
    exit: {opacity: 0, scale: 0.95}
};

function ProjectVisual({project, onPreview}) {
    const [imageFailed, setImageFailed] = useState(false);
    if (project.media?.type === 'image' && !imageFailed) {
        return (
            <button type="button"
                onClick={(event) => onPreview(project, event.currentTarget)}
                aria-label={`Enlarge ${project.title} screenshot`}
                className={`project-visual project-visual-image ${project.media.crop ? 'project-visual-crop' : ''}`}>
                <img src={project.media.url} alt={project.media.alt} loading="lazy" decoding="async" onError={() => setImageFailed(true)} />
                <span className="project-visual-hint">View screenshot</span>
            </button>
        );
    }

    return (
        <div className="project-visual project-visual-icon" aria-hidden="true">
            {project.icon && !imageFailed ? (
                <img src={project.icon} alt="" loading="lazy" onError={() => setImageFailed(true)} />
            ) : (
                <FontAwesomeIcon icon={icons[project.faIcon] || faCode} />
            )}
        </div>
    );
}

function TechList({items}) {
    return (
        <ul className="tech-list" aria-label="Technology stack">
            {items.map((tech) => (
                <li key={tech}>{tech}</li>
            ))}
        </ul>
    );
}

const ProjectCard = forwardRef(function ProjectCard({project, onPreview}, ref) {
    return (
        <motion.article
            ref={ref}
            layout
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1]
            }}

            className={`project-card ${['requizle', 'unidetect'].includes(project.id) ? 'project-card-lead' : ''}`}
        >
            <ProjectVisual project={project} onPreview={onPreview} />

            <div className="project-card-body">
                <div className="project-kicker">
                    {project.types.map((type) => (
                        <span key={type}>{type}</span>
                    ))}
                </div>

                <h3>{project.title}</h3>
                {project.focus && <span className="project-focus">{project.focus}</span>}
                <p className="project-summary">{project.summary}</p>
                {project.context && <p className="project-context">{project.context}</p>}

                <ul className="project-highlights">
                    {project.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                    ))}
                </ul>

                <TechList items={project.techStack} />

                <div className="project-links">
                    <ProjectLink url={project.links.github} type="github" variant="compact" />
                    <ProjectLink url={project.links.live} type="live" variant="compact" />
                </div>
            </div>
        </motion.article>
    );
});


function Projects() {
    const [searchTags, setSearchTags] = useState([]);
    const [query, setQuery] = useState('');
    const [activeType, setActiveType] = useState('All');
    const [displayLimit, setDisplayLimit] = useState(6);
    const inputRef = useRef(null);
    const footerRef = useRef(null);
    const scrollCapture = useRef(null);
    const previewTriggerRef = useRef(null);
    const [previewProject, setPreviewProject] = useState(null);

    const closePreview = () => {
        setPreviewProject(null);
    };

    const openPreview = (project, trigger) => {
        previewTriggerRef.current = trigger;
        setPreviewProject(project);
    };

    const projectTypes = useMemo(() => getProjectTypes(), []);
    const allTechTags = useMemo(() => {
        return Array.from(new Set(projects.flatMap((p) => p.techStack))).sort((a, b) => a.localeCompare(b));
    }, []);

    const addSearchTag = (tag) => {
        const trimmed = tag.trim();
        if (trimmed && !searchTags.some(t => normalize(t) === normalize(trimmed))) {
            setSearchTags([...searchTags, trimmed]);
        }
        setQuery('');
    };

    const removeSearchTag = (indexToRemove) => {
        setSearchTags(searchTags.filter((_, index) => index !== indexToRemove));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addSearchTag(query);
        } else if (e.key === 'Backspace' && query === '' && searchTags.length > 0) {
            removeSearchTag(searchTags.length - 1);
        }
    };

    const handleInputChange = (e) => {
        const val = e.target.value;
        if (allTechTags.includes(val)) {
            addSearchTag(val);
        } else {
            setQuery(val);
        }
    };

    useLayoutEffect(() => {
        if (scrollCapture.current !== null && footerRef.current) {
            const newPos = footerRef.current.getBoundingClientRect().top;
            const diff = newPos - scrollCapture.current;
            window.scrollBy(0, diff);
            scrollCapture.current = null;
        }
    }, [displayLimit]);

    const handleShowLess = () => {
        if (footerRef.current) {
            scrollCapture.current = footerRef.current.getBoundingClientRect().top;
        }
        setDisplayLimit(6);
    };

    const filteredProjects = useMemo(() => {
        const normalizedQuery = normalize(query);

        return projects.filter((project) => {
            const matchesType = activeType === 'All' || project.types.includes(activeType);
            const searchableText = [
                project.title,
                ...project.types,
                project.focus,
                project.summary,
                project.context,
                ...project.highlights,
                ...project.techStack
            ].join(' ');
            const normalizedSearchableText = normalize(searchableText);

            const matchesTags = searchTags.length === 0 || searchTags.every((tag) => normalizedSearchableText.includes(normalize(tag)));
            const matchesQuery = !normalizedQuery || normalizedSearchableText.includes(normalizedQuery);

            return matchesType && matchesTags && matchesQuery;
        });
    }, [activeType, searchTags, query]);

    const resetFilters = () => {
        setSearchTags([]);
        setQuery('');
        setActiveType('All');
        setDisplayLimit(6);
    };

    return (
        <div className="projects-container">
            <div className="section-heading project-heading">
                <p className="eyebrow">Portfolio</p>
                <h2>Selected projects</h2>
                <p>
                    Web applications, desktop tools, and coursework.
                    Source code is available for each project.
                </p>
            </div>

            <div className="project-toolbar" aria-label="Project browsing controls">
                <div className="project-search" onClick={() => inputRef.current?.focus()}>
                    <FontAwesomeIcon icon={faSearch} />
                    <div className="search-tokens-container">
                        <AnimatePresence>
                            {searchTags.map((tag, index) => (
                                <motion.span
                                    key={tag}
                                    layout
                                    initial={{opacity: 0, scale: 0.8}}
                                    animate={{opacity: 1, scale: 1}}
                                    exit={{opacity: 0, scale: 0.8}}
                                    className="search-token"
                                >
                                    {tag}
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeSearchTag(index);
                                        }}
                                        aria-label={`Remove ${tag}`}
                                    >
                                        ×
                                    </button>
                                </motion.span>
                            ))}
                        </AnimatePresence>
                        <input
                            ref={inputRef}
                            type="search"
                            className="search-input"
                            value={query}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            placeholder={searchTags.length === 0 ? "Search projects or skills" : ""}
                            aria-label="Search projects"
                            list="tech-tags"
                        />
                    </div>
                    <datalist id="tech-tags">
                        {allTechTags.map((tag) => (
                            <option key={tag} value={tag} />
                        ))}
                    </datalist>
                    {(query || searchTags.length > 0) && (
                        <button
                            type="button"
                            className="clear-search"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSearchTags([]);
                                setQuery('');
                            }}
                            aria-label="Clear project search"
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    )}
                </div>

                <div className="project-filter-group" aria-label="Filter projects by type">
                    <span>
                        <FontAwesomeIcon icon={faFilter} />
                        Type
                    </span>
                    {['All', ...projectTypes].map((type) => (
                        <button
                            key={type}
                            type="button"
                            className={`filter-chip ${activeType === type ? 'active' : ''}`}
                            aria-pressed={activeType === type}
                            onClick={() => { setActiveType(type); setDisplayLimit(6); }}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className="project-results-bar">
                <p role="status" aria-live="polite">
                    Showing <strong>{Math.min(displayLimit, filteredProjects.length)}</strong> of <strong>{filteredProjects.length}</strong> projects
                </p>
                {(query || searchTags.length > 0 || activeType !== 'All') && (
                    <button type="button" onClick={resetFilters}>
                        Reset filters
                    </button>
                )}
            </div>
            <motion.div
                layout
                transition={{duration: 0.5, ease: [0.4, 0, 0.2, 1]}}

            >
                {filteredProjects.length > 0 ? (
                    <>
                        <div className="project-grid" aria-label="Projects">
                            <AnimatePresence mode="popLayout">
                                {filteredProjects.slice(0, displayLimit).map((project) => (
                                    <ProjectCard key={project.id} project={project} onPreview={openPreview} />
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredProjects.length > 6 && (
                            <div className="project-footer" ref={footerRef}>
                                {displayLimit < filteredProjects.length ? (
                                    <button
                                        type="button"
                                        className="action-link"
                                        onClick={() => setDisplayLimit(filteredProjects.length)}
                                    >
                                        Show all projects ({filteredProjects.length})
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="action-link"
                                        onClick={handleShowLess}
                                    >
                                        Show less
                                    </button>
                                )}
                            </div>
                        )}
                    </>
                ) : (
                    <div className="projects-empty">
                        No projects match that filter. Try a technology like React, Python, Java, WPF, or Docker.
                    </div>
                )}
            </motion.div>
            {previewProject && (
                <ImagePreview project={previewProject} trigger={previewTriggerRef.current} onClose={closePreview} />
            )}
        </div>
    );
}

export default Projects;
