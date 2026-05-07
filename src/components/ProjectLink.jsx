import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {EXTERNAL_LINK_PROPS} from '../utils/constants';

export const ProjectLink = ({url, type = 'github', children, variant = 'default'}) => {
    if (!url) return null;

    const config = {
        github: {
            icon: faGithub,
            text: 'Repository'
        },
        live: {
            icon: faArrowUpRightFromSquare,
            text: 'Live project'
        },
        demo: {
            icon: faArrowUpRightFromSquare,
            text: 'Live project'
        }
    };

    const {icon, text} = config[type] || config.github;

    return (
        <a
            href={url}
            {...EXTERNAL_LINK_PROPS}
            className={`project-link project-link-${type} ${variant === 'compact' ? 'project-link-compact' : ''}`}
        >
            <FontAwesomeIcon icon={icon} />
            <span>{children || text}</span>
        </a>
    );
};
