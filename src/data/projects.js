export const projects = [
    {
        id: 'unidetect',
        title: 'UniDetect',
        types: ['Frontend'],
        focus: 'Hidden Unicode detection',
        status: 'Live',
        featured: true,
        summary:
            'A local-first inspection tool for finding and cleaning invisible Unicode characters before they break code reviews, documents, or submissions.',
        narrative:
            'The project is strongest as a trust and clarity story: it handles messy input formats, explains what it found, and keeps the sensitive text in the browser.',
        highlights: [
            'Real-time detection and highlighting for invisible characters',
            'PDF, DOCX, Markdown, and TXT import paths',
            'Privacy-focused processing with one-click cleaning',
            'Vitest coverage and Docker-friendly packaging'
        ],
        techStack: ['React', 'TypeScript', 'Vite', 'Vitest', 'PDF.js', 'Mammoth.js', 'Docker'],
        links: {
            github: 'https://github.com/haseebn19/unidetect',
            live: 'https://haseebn19.github.io/unidetect/'
        },
        faIcon: 'faSearch',
        icon: 'https://raw.githubusercontent.com/haseebn19/unidetect/main/public/logo.svg'
    },
    {
        id: 'requizle',
        title: 'ReQuizle',
        types: ['Frontend'],
        focus: 'Spaced repetition',
        status: 'Live',
        featured: true,
        summary:
            'A study app for mastery tracking, custom question imports, and repeated review without sending study data to a server.',
        narrative:
            'This one shows product thinking: question variety, review state, local persistence, and import/export mechanics all support a real study workflow.',
        highlights: [
            'Multiple question types including matching, word bank, and multi-answer',
            'Mastery tracking with include/exclude mastered controls',
            'Custom JSON import for reusable subjects and question sets',
            'Offline-friendly browser storage with a PWA foundation'
        ],
        techStack: ['React', 'TypeScript', 'TailwindCSS', 'Zustand', 'Framer Motion', 'Vite', 'Vitest', 'PWA'],
        links: {
            github: 'https://github.com/ReQuizle/requizle-web',
            live: 'https://requizle.github.io/requizle-web/'
        },
        faIcon: 'faBook',
        icon: 'https://raw.githubusercontent.com/ReQuizle/requizle-web/refs/heads/main/public/icon.svg'
    },
    {
        id: 'urban-housing-demand',
        title: 'Urban Housing Demand',
        types: ['Frontend', 'Backend'],
        focus: 'Housing and labour data',
        status: 'Repository',
        featured: true,
        summary:
            'A full-stack dashboard for exploring housing completions, labour indicators, immigration trends, and regional supply signals.',
        narrative:
            'The value here is in connecting several public-interest datasets into one navigable interface instead of leaving the analysis trapped in spreadsheets.',
        highlights: [
            'Spring Boot API backed by MariaDB',
            'Interactive React dashboard with Chart.js visualizations',
            'Housing, labour, and immigration views with dark/light themes',
            'Containerized local setup for repeatable development'
        ],
        techStack: ['Java', 'Spring Boot', 'TypeScript', 'React', 'Vite', 'Vitest', 'Docker', 'MariaDB', 'Chart.js'],
        links: {
            github: 'https://github.com/haseebn19/urban-housing-demand',
            live: null
        },
        faIcon: 'faCity',
        media: {
            type: 'image',
            url: 'https://raw.githubusercontent.com/haseebn19/urban-housing-demand/main/docs/screenshot-home.jpeg',
            alt: 'Urban Housing Demand dashboard screenshot'
        }
    },
    {
        id: 'password-generator',
        title: 'Password Generator',
        types: ['Desktop'],
        focus: 'Secure generation',
        status: 'Repository',
        summary:
            'A WPF password generator with theme-aware UI, clipboard flow, and real-time strength scoring.',
        narrative:
            'A compact native app that demonstrates Windows UI polish, MVVM structure, and security-conscious feedback loops.',
        highlights: [
            'Configurable length and character sets',
            'Zxcvbn-backed strength evaluation',
            'Windows dark/light theme integration',
            'xUnit tests around core generation behavior'
        ],
        techStack: ['C#', '.NET 8', 'WPF', 'CommunityToolkit.Mvvm', 'xUnit'],
        links: {
            github: 'https://github.com/haseebn19/passgen',
            live: null
        },
        faIcon: 'faLock',
        icon: 'https://raw.githubusercontent.com/haseebn19/passgen/master/logo.svg',
        media: {
            type: 'image',
            url: 'https://raw.githubusercontent.com/haseebn19/passgen/master/docs/screenshot-window.png',
            alt: 'Password Generator desktop app screenshot'
        }
    },
    {
        id: 'ssh-keygen',
        title: 'SSH Key Generator',
        types: ['Desktop'],
        focus: 'Key management',
        status: 'Repository',
        summary:
            'A PyQt6 utility for creating SSH key pairs with algorithm choices, passphrase support, and quick access to generated files.',
        narrative:
            'This project turns a command-line security task into a guided desktop workflow while preserving practical defaults.',
        highlights: [
            'ED25519, RSA, and ECDSA key support',
            'Custom output paths and optional passphrases',
            'Fingerprint display and quick copy actions',
            'Ruff and pytest-backed Python workflow'
        ],
        techStack: ['Python', 'PyQt6', 'cryptography', 'PyInstaller', 'pytest', 'Ruff'],
        links: {
            github: 'https://github.com/haseebn19/ssh-keygen',
            live: null
        },
        faIcon: 'faKey',
        icon: 'https://raw.githubusercontent.com/haseebn19/ssh-keygen/main/resources/logo.svg',
        media: {
            type: 'image',
            url: 'https://raw.githubusercontent.com/haseebn19/ssh-keygen/main/resources/screenshot-window.png',
            alt: 'SSH Key Generator desktop app screenshot'
        }
    },
    {
        id: 'calendar-bot',
        title: 'Discord Calendar Bot',
        types: ['Backend', 'Bot'],
        focus: 'Timezone-aware events',
        status: 'Repository',
        summary:
            'A Discord bot for personal calendar events with slash commands, timezone autocomplete, privacy modes, and SQLite persistence.',
        narrative:
            'A service-oriented build that handles user intent, data persistence, and Discord-native presentation in a small surface area.',
        highlights: [
            'Add, list, and remove calendar commands',
            'Timezone autocomplete and native Discord timestamps',
            'Public and private response modes',
            'Async SQLite storage with pytest coverage'
        ],
        techStack: ['Python', 'discord.py', 'aiosqlite', 'SQLite', 'pytest', 'Ruff'],
        links: {
            github: 'https://github.com/haseebn19/calendar-bot',
            live: null
        },
        faIcon: 'faCalendarAlt',
        icon: 'https://raw.githubusercontent.com/haseebn19/calendar-bot/main/docs/logo.svg'
    },
    {
        id: 'portfolio',
        title: 'Personal Portfolio',
        types: ['Frontend'],
        focus: 'Identity and case-study design',
        status: 'Live site',
        summary:
            'A rebuilt portfolio that replaces generic portfolio tropes with a clearer story about practical shipped software.',
        narrative:
            'The work here is content strategy as much as CSS: fewer decorative widgets, stronger project hierarchy, and more evidence per section.',
        highlights: [
            'Project-led information architecture',
            'Responsive editorial layout',
            'Accessible navigation and contact paths',
            'Vitest coverage for the main rendering paths'
        ],
        techStack: ['React', 'JavaScript', 'CSS', 'Vite', 'Vitest'],
        links: {
            github: 'https://github.com/haseebn19/portfolio',
            live: null
        },
        faIcon: 'faUser'
    },
    {
        id: 'roblox-games',
        title: 'Roblox Scripting',
        types: ['Game'],
        focus: 'Lua scripting',
        status: 'Archived',
        summary:
            'Lua and Roblox Studio work focused on gameplay loops, UI systems, player-facing mechanics, and quick iteration on interactive ideas.',
        narrative:
            'Kept as part of the project archive because it reflects earlier hands-on scripting and game systems work, even without a public repository attached.',
        highlights: [
            'Gameplay mechanics and player systems',
            'Roblox Studio UI workflows',
            'Performance-minded Lua scripting',
            'Fast iteration on interactive experiences'
        ],
        techStack: ['Lua', 'Roblox Studio'],
        links: {
            github: null,
            live: null
        },
        faIcon: 'faGamepad'
    }
];

export const getFeaturedProjects = () => projects.filter((project) => project.featured);

export const getProjectTypes = () =>
    Array.from(new Set(projects.flatMap((project) => project.types))).sort((a, b) => a.localeCompare(b));

export const getProjectStats = () => ({
    total: projects.length,
    live: projects.filter((project) => project.links.live).length,
    types: getProjectTypes().length
});
