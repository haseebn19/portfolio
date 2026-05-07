import {profile} from '../data/profile';

export const SOCIAL_LINKS = profile.socials;

export const EXTERNAL_LINK_PROPS = {
    target: '_blank',
    rel: 'noopener noreferrer'
};

export const NAV_ITEMS = [
    {id: 'work', label: 'Work'},
    {id: 'capabilities', label: 'Capabilities'},
    {id: 'about', label: 'About'},
    {id: 'contact', label: 'Contact'}
];

export const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
};
