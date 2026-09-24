export const projects = [
    {
        id: 'requizle',
        media: {type: 'image', url: '/projects/requizle.png', alt: 'ReQuizle study interface'},
        title: 'ReQuizle',
        types: ['Frontend'],
        focus: 'Study and review',
        featured: true,
        summary:
            'A browser-based study app with custom question sets, progress tracking, and local data storage.',
        highlights: [
            'Multiple-choice, matching, and written-answer questions',
            'Review controls to include or exclude mastered questions',
            'JSON import for reusable subjects and question sets',
            'Offline-friendly browser storage with a PWA foundation'
        ],
        techStack: ['React', 'TypeScript', 'Zustand', 'TailwindCSS', 'Vitest'],
        links: {
            github: 'https://github.com/ReQuizle/requizle-web',
            live: 'https://requizle.github.io/requizle-web/'
        },
        faIcon: 'faBook',
        icon: 'https://raw.githubusercontent.com/ReQuizle/requizle-web/refs/heads/main/public/icon.svg'
    },
    {
        id: 'unidetect',
        media: {type: 'image', url: '/projects/unidetect.png', alt: 'UniDetect text inspection interface'},
        title: 'UniDetect',
        types: ['Frontend'],
        focus: 'Hidden Unicode detection',
        featured: true,
        summary:
            'A browser tool that identifies invisible Unicode characters in text and documents, with an option to remove them.',
        highlights: [
            'Real-time detection and highlighting for invisible characters',
            'PDF, DOCX, Markdown, and plain-text imports',
            'Files are processed locally in the browser'
        ],
        techStack: ['React', 'TypeScript', 'Vite', 'Vitest', 'PDF.js', 'Mammoth.js'],
        links: {
            github: 'https://github.com/haseebn19/unidetect',
            live: 'https://haseebn19.github.io/unidetect/'
        },
        faIcon: 'faSearch',
        icon: 'https://raw.githubusercontent.com/haseebn19/unidetect/main/public/logo.svg'
    },
    {
        id: 'urban-housing-demand',
        title: 'Urban Housing Demand',
        types: ['Fullstack', 'Frontend', 'Backend'],
        focus: 'Housing and labour data',
        context: 'University team project (CIS*4900). Later revised and prepared for public release.',
        featured: true,
        summary:
            'A dashboard comparing housing development, employment, and demographic data in Toronto and Hamilton.',
        highlights: [
            'Spring Boot API backed by MariaDB',
            'Interactive React dashboard with Chart.js visualizations',
            'Python data ingestion and a Docker-based development setup',
            'Containerized local setup for repeatable development'
        ],
        techStack: ['Java', 'Spring Boot', 'React', 'Python', 'MariaDB', 'Docker'],
        links: {
            github: 'https://github.com/haseebn19/urban-housing-demand',
            live: null
        },
        faIcon: 'faCity',
        media: {
            type: 'image',
            url: '/projects/urban-housing-demand.jpeg',
            crop: true,
            alt: 'Urban Housing Demand charts using the bundled sample dataset',
            caption: 'Shown with the project’s sample dataset.'
        }
    },
    {
        id: 'hostage-chess',
        title: 'Hostage Chess',
        types: ['Fullstack', 'Frontend', 'Backend', 'Game'],
        focus: 'Web-based multiplayer chess variant',
        context: 'Originally a university assignment (CIS*2750). Later revised and prepared for public release.',
        featured: true,
        summary:
            'A web implementation of Hostage Chess with multiplayer games, server-side move validation, and game history.',
        highlights: [
            'Server-side move validation and custom engine',
            'Multiplayer state updates through server polling',
            'Prison, airfield, and hostage exchange mechanics',
            'Clean dark UI and interactive game history'
        ],
        techStack: ['Python', 'JavaScript', 'SQLite', 'pytest'],
        links: {
            github: 'https://github.com/haseebn19/hostage-chess',
            live: null
        },
        faIcon: 'faChess',
        icon: 'https://raw.githubusercontent.com/haseebn19/hostage-chess/main/docs/logo.svg',
        media: {
            type: 'image',
            url: '/projects/hostage-chess.jpeg',
            alt: 'Hostage Chess gameplay screenshot'
        }
    },
    {
        id: 'paradux',
        title: 'Paradux',
        types: ['Desktop', 'Game'],
        focus: 'Python board game',
        context: 'University team project (CIS*3260). The published version includes fixes to the original implementation.',
        featured: true,
        summary:
            'A Python implementation of Paradux, a two-player game played on a hexagonal board.',
        highlights: [
            'Terminal and PyQt5 interfaces',
            'Move validation for adjacent pieces on a hexagonal grid',
            'Save and restore games using JSON',
            'Separated game logic and interfaces, with automated tests'
        ],
        techStack: ['Python', 'PyQt5', 'pytest', 'Ruff'],
        links: {
            github: 'https://github.com/haseebn19/paradux',
            live: null
        },
        faIcon: 'faGamepad',
        icon: 'https://raw.githubusercontent.com/haseebn19/paradux/main/src/paradux/assets/logo.svg',
        media: {
            type: 'image',
            url: '/projects/paradux.png',
            alt: 'Paradux GUI gameplay screenshot'
        }
    },
    {
        id: 'password-generator',
        title: 'Password Generator',
        types: ['Desktop'],
        focus: 'Secure generation',
        summary:
            'A Windows utility for generating passwords with configurable character sets and strength estimates.',
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
            url: '/projects/password-generator.png',
            alt: 'Password Generator desktop app screenshot'
        }
    },
    {
        id: 'ssh-keygen',
        title: 'SSH Key Generator',
        types: ['Desktop'],
        focus: 'Key management',
        summary:
            'A desktop utility for generating SSH key pairs, setting passphrases, and managing output files.',
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
            url: '/projects/ssh-keygen.png',
            alt: 'SSH Key Generator desktop app screenshot'
        }
    },
    {
        id: 'calendar-bot',
        title: 'Discord Calendar Bot',
        types: ['Backend', 'Bot'],
        focus: 'Timezone-aware events',
        summary:
            'A Discord bot for creating and managing calendar events through slash commands, with timezone support and SQLite storage.',
        highlights: [
            'Add, list, and remove calendar commands',
            'Timezone autocomplete and native Discord timestamps',
            'Public and private response modes',
            'Async SQLite storage with pytest coverage'
        ],
        techStack: ['Python', 'discord.py', 'SQLite', 'pytest'],
        links: {
            github: 'https://github.com/haseebn19/calendar-bot',
            live: null
        },
        faIcon: 'faCalendarAlt',
        icon: '/projects/calendar-bot.svg'
    }
];

export const getProjectTypes = () =>
    Array.from(new Set(projects.flatMap((project) => project.types))).sort((a, b) => a.localeCompare(b));
