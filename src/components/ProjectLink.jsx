import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {EXTERNAL_LINK_PROPS} from '../utils/constants';

const LINK_TYPES = {
    github: {icon: faGithub, text: 'Repository'},
    live: {icon: faArrowUpRightFromSquare, text: 'Live project'}
};

function ProjectLink({url, type = 'github'}) {
    if (!url) return null;

    const {icon, text} = LINK_TYPES[type];

    return (
        <a href={url} {...EXTERNAL_LINK_PROPS} className={`project-link project-link-${type}`}>
            <FontAwesomeIcon icon={icon} />
            <span>{text}</span>
        </a>
    );
}

export default ProjectLink;
