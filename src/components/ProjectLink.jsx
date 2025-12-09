import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {EXTERNAL_LINK_PROPS} from '../utils/constants';

export const ProjectLink = ({url, type, children}) => {
    if (!url) return null;

    const config = {
        github: {
            icon: faGithub,
            className: 'project-link github',
            text: 'Repository'
        },
        demo: {
            icon: faGlobe,
            className: 'project-link demo',
            text: 'Live Demo'
        }
    };

    const {icon, className, text} = config[type] || config.demo;

    return (
        <a
            href={url}
            {...EXTERNAL_LINK_PROPS}
            className={className}
        >
            <FontAwesomeIcon icon={icon} />
            <span>{children || text}</span>
        </a>
    );
};
