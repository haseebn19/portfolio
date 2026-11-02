import {useMemo, useState, useRef, forwardRef, useLayoutEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faXmark} from '@fortawesome/free-solid-svg-icons';
import {projects, projectTypes} from '../data/projects';
import ProjectLink from './ProjectLink';
import ImagePreview from './ImagePreview';

const INITIAL_VISIBLE_COUNT = 6;

const normalize = (value) => value.toLowerCase().trim();

const allTechTags = Array.from(new Set(projects.flatMap((project) => project.techStack))).sort((a, b) =>
    a.localeCompare(b)
);
const techTagKeys = new Set(allTechTags.map(normalize));

const searchableText = (project) =>
    normalize(
        [
            project.title,
            ...project.types,
            project.focus,
            project.summary,
            project.context ?? '',
            ...project.highlights,
            ...project.techStack
        ].join(' ')
    );

// Technology tags match the project's stack exactly, so "Java" does not match "JavaScript".
// Other tags and the free-text query match anywhere in the project's text.
const matchesTerm = (project, term) => {
    const key = normalize(term);
    if (techTagKeys.has(key)) {
        return project.techStack.some((tech) => normalize(tech) === key);
    }
    return searchableText(project).includes(key);
};

const cardVariants = {
    hidden: {opacity: 0, y: 16, scale: 0.97},
    visible: {opacity: 1, y: 0, scale: 1},
    exit: {opacity: 0, scale: 0.95}
};

function ProjectVisual({project, onPreview}) {
    const {screenshot} = project;

    if (screenshot) {
        return (
            <button
                type="button"
                onClick={(event) => onPreview(project, event.currentTarget)}
                aria-label={`View screenshot of ${project.title}`}
                className={`project-visual project-visual-image ${screenshot.crop ? 'project-visual-crop' : ''}`}
            >
                <img src={screenshot.src} alt={screenshot.alt} loading="lazy" decoding="async" />
                <span className="project-visual-hint">View screenshot</span>
            </button>
        );
    }

    return (
        <div className="project-visual project-visual-icon" aria-hidden="true">
            <img src={project.icon} alt="" loading="lazy" />
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
            transition={{duration: 0.35, ease: [0.4, 0, 0.2, 1]}}
            className={`project-card ${project.lead ? 'project-card-lead' : ''}`}
        >
            <ProjectVisual project={project} onPreview={onPreview} />

            <div className="project-card-body">
                <div className="project-kicker">
                    {project.types.map((type) => (
                        <span key={type}>{type}</span>
                    ))}
                </div>

                <h3>{project.title}</h3>
                <span className="project-focus">{project.focus}</span>
                <p className="project-summary">{project.summary}</p>
                {project.context && <p className="project-context">{project.context}</p>}

                <ul className="project-highlights">
                    {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                    ))}
                </ul>

                <TechList items={project.techStack} />

                <div className="project-links">
                    <ProjectLink url={project.links.github} type="github" />
                    <ProjectLink url={project.links.live} type="live" />
                </div>
            </div>
        </motion.article>
    );
});

function Projects() {
    const [searchTags, setSearchTags] = useState([]);
    const [query, setQuery] = useState('');
    const [activeType, setActiveType] = useState('All');
    const [displayLimit, setDisplayLimit] = useState(INITIAL_VISIBLE_COUNT);
    const [previewProject, setPreviewProject] = useState(null);
    const inputRef = useRef(null);
    const footerRef = useRef(null);
    const scrollCapture = useRef(null);
    const previewTriggerRef = useRef(null);

    const openPreview = (project, trigger) => {
        previewTriggerRef.current = trigger;
        setPreviewProject(project);
    };

    const addSearchTag = (tag) => {
        const trimmed = tag.trim();
        if (trimmed && !searchTags.some((existing) => normalize(existing) === normalize(trimmed))) {
            setSearchTags([...searchTags, trimmed]);
        }
        setQuery('');
    };

    const removeSearchTag = (indexToRemove) => {
        setSearchTags(searchTags.filter((_, index) => index !== indexToRemove));
    };

    const clearSearch = () => {
        setSearchTags([]);
        setQuery('');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ',') {
            event.preventDefault();
            addSearchTag(query);
        } else if (event.key === 'Backspace' && query === '' && searchTags.length > 0) {
            removeSearchTag(searchTags.length - 1);
        }
    };

    const handleInputChange = (event) => {
        const {value} = event.target;
        // Picking a suggestion from the datalist replaces the whole value. Typing does not,
        // so "Java" stays editable on the way to "JavaScript".
        const {inputType} = event.nativeEvent;
        const pickedSuggestion = inputType === undefined || inputType === 'insertReplacementText';

        if (pickedSuggestion && allTechTags.includes(value)) {
            addSearchTag(value);
        } else {
            setQuery(value);
        }
    };

    // Keep the "Show less" button under the pointer when the grid collapses.
    useLayoutEffect(() => {
        if (scrollCapture.current === null) return;
        const newPosition = footerRef.current.getBoundingClientRect().top;
        window.scrollBy(0, newPosition - scrollCapture.current);
        scrollCapture.current = null;
    }, [displayLimit]);

    const handleShowLess = () => {
        scrollCapture.current = footerRef.current.getBoundingClientRect().top;
        setDisplayLimit(INITIAL_VISIBLE_COUNT);
    };

    const filteredProjects = useMemo(() => {
        const normalizedQuery = normalize(query);
        return projects.filter((project) => {
            const matchesType = activeType === 'All' || project.types.includes(activeType);
            const matchesTags = searchTags.every((tag) => matchesTerm(project, tag));
            const matchesQuery = !normalizedQuery || searchableText(project).includes(normalizedQuery);
            return matchesType && matchesTags && matchesQuery;
        });
    }, [activeType, searchTags, query]);

    const resetFilters = () => {
        clearSearch();
        setActiveType('All');
        setDisplayLimit(INITIAL_VISIBLE_COUNT);
    };

    const hasSearch = query !== '' || searchTags.length > 0;

    return (
        <div className="projects-container">
            <div className="section-heading">
                <p className="eyebrow">Portfolio</p>
                <h2>Selected projects</h2>
                <p>Web applications, desktop tools, and coursework. Source code is available for each project.</p>
            </div>

            <div className="project-toolbar">
                <div className="project-search" role="search" onClick={() => inputRef.current.focus()}>
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
                                        onClick={(event) => {
                                            event.stopPropagation();
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
                            value={query}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            placeholder={searchTags.length === 0 ? 'Search projects or skills' : ''}
                            aria-label="Search projects"
                            list="tech-tags"
                        />
                    </div>
                    <datalist id="tech-tags">
                        {allTechTags.map((tag) => (
                            <option key={tag} value={tag} />
                        ))}
                    </datalist>
                    {hasSearch && (
                        <button
                            type="button"
                            className="clear-search"
                            onClick={(event) => {
                                event.stopPropagation();
                                clearSearch();
                            }}
                            aria-label="Clear project search"
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    )}
                </div>

                <div className="project-filter-group" role="group" aria-label="Filter projects by type">
                    {['All', ...projectTypes].map((type) => (
                        <button
                            key={type}
                            type="button"
                            className={`filter-chip ${activeType === type ? 'active' : ''}`}
                            aria-pressed={activeType === type}
                            onClick={() => {
                                setActiveType(type);
                                setDisplayLimit(INITIAL_VISIBLE_COUNT);
                            }}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className="project-results-bar">
                <p role="status" aria-live="polite">
                    Showing <strong>{Math.min(displayLimit, filteredProjects.length)}</strong> of{' '}
                    <strong>{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}
                </p>
                {(hasSearch || activeType !== 'All') && (
                    <button type="button" onClick={resetFilters}>
                        Reset filters
                    </button>
                )}
            </div>

            <motion.div layout transition={{duration: 0.5, ease: [0.4, 0, 0.2, 1]}}>
                {filteredProjects.length > 0 ? (
                    <>
                        <div className="project-grid" role="group" aria-label="Projects">
                            <AnimatePresence mode="popLayout">
                                {filteredProjects.slice(0, displayLimit).map((project) => (
                                    <ProjectCard key={project.id} project={project} onPreview={openPreview} />
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredProjects.length > INITIAL_VISIBLE_COUNT && (
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
                                    <button type="button" className="action-link" onClick={handleShowLess}>
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
                <ImagePreview
                    project={previewProject}
                    trigger={previewTriggerRef.current}
                    onClose={() => setPreviewProject(null)}
                />
            )}
        </div>
    );
}

export default Projects;
