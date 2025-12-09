// Shared constants and utilities
export const SOCIAL_LINKS = {
    github: 'https://github.com/haseebn19',
    linkedin: 'https://www.linkedin.com/in/haseebn/',
    email: 'mailto:haseeb.kn@outlook.com'
};

export const EXTERNAL_LINK_PROPS = {
    target: '_blank',
    rel: 'noopener noreferrer'
};

// Scroll utility
export const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
};

