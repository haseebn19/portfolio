// Projects shown in the Projects section, in display order.
//
// Each project has:
//   id, title, types, focus, summary, highlights (three), techStack, links.github
// Optional fields:
//   lead        Show the card full width at the top of the grid.
//   context     Coursework or background note shown under the summary.
//   links.live  Link to a deployed version.
//   screenshot  {src, alt, caption?, crop?}; crop fills the frame from the top.
//   icon        Image shown when there is no screenshot.
export const projects = [
    {
        id: 'requizle',
        title: 'ReQuizle',
        types: ['Frontend'],
        focus: 'Study and review',
        lead: true,
        summary: 'A browser-based study app with custom question sets, progress tracking, and local data storage.',
        highlights: [
            'Six question types, including multiple choice, matching, and typed answers',
            'Review controls to include or exclude mastered questions',
            'JSON and .rqzl import and export for subjects and profiles'
        ],
        techStack: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Vitest'],
        links: {
            github: 'https://github.com/ReQuizle/requizle-web',
            live: 'https://requizle.github.io/requizle-web/'
        },
        screenshot: {src: '/projects/requizle.png', alt: 'ReQuizle study interface'}
    },
    {
        id: 'unidetect',
        title: 'UniDetect',
        types: ['Frontend'],
        focus: 'Hidden Unicode detection',
        lead: true,
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
        screenshot: {src: '/projects/unidetect.png', alt: 'UniDetect text inspection interface'}
    },
    {
        id: 'urban-housing-demand',
        title: 'Urban Housing Demand',
        types: ['Full-stack', 'Frontend', 'Backend'],
        focus: 'Housing and labour data',
        context: 'University team project (CIS*4900). Later revised and prepared for public release.',
        summary: 'A dashboard comparing housing development, employment, and demographic data in Toronto and Hamilton.',
        highlights: [
            'Spring Boot API backed by MariaDB',
            'Interactive React dashboard with Chart.js visualizations',
            'Python data ingestion and a Docker-based development setup'
        ],
        techStack: ['Java', 'Spring Boot', 'React', 'Python', 'MariaDB', 'Docker'],
        links: {
            github: 'https://github.com/haseebn19/urban-housing-demand'
        },
        screenshot: {
            src: '/projects/urban-housing-demand.jpeg',
            alt: 'Urban Housing Demand charts using the bundled sample dataset',
            caption: "Shown with the project's sample dataset.",
            crop: true
        }
    },
    {
        id: 'hostage-chess',
        title: 'Hostage Chess',
        types: ['Full-stack', 'Frontend', 'Backend', 'Game'],
        focus: 'Web-based multiplayer chess variant',
        context: 'Originally a university assignment (CIS*2750). Later revised and prepared for public release.',
        summary:
            'A web implementation of Hostage Chess with multiplayer games, server-side move validation, and game history.',
        highlights: [
            'Server-side move validation and custom engine',
            'Multiplayer state updates through server polling',
            'Prison, airfield, and hostage exchange mechanics'
        ],
        techStack: ['Python', 'JavaScript', 'SQLite', 'pytest'],
        links: {
            github: 'https://github.com/haseebn19/hostage-chess'
        },
        screenshot: {src: '/projects/hostage-chess.jpeg', alt: 'Hostage Chess gameplay screenshot'}
    },
    {
        id: 'paradux',
        title: 'Paradux',
        types: ['Desktop', 'Game'],
        focus: 'Python board game',
        context:
            'University team project (CIS*3260). The published version includes fixes to the original implementation.',
        summary: 'A Python implementation of Paradux, a two-player game played on a hexagonal board.',
        highlights: [
            'Terminal and PyQt5 interfaces',
            'Move validation for adjacent pieces on a hexagonal grid',
            'Save and restore games using JSON'
        ],
        techStack: ['Python', 'PyQt5', 'pytest', 'Ruff'],
        links: {
            github: 'https://github.com/haseebn19/paradux'
        },
        screenshot: {src: '/projects/paradux.png', alt: 'Paradux GUI gameplay screenshot'}
    },
    {
        id: 'password-generator',
        title: 'Password Generator',
        types: ['Desktop'],
        focus: 'Secure generation',
        summary: 'A Windows utility for generating passwords with configurable character sets and strength estimates.',
        highlights: [
            'Configurable length and character sets',
            'Strength estimates from zxcvbn',
            'Windows dark/light theme integration'
        ],
        techStack: ['C#', '.NET 10', 'WPF', 'CommunityToolkit.Mvvm', 'xUnit'],
        links: {
            github: 'https://github.com/haseebn19/passgen'
        },
        screenshot: {src: '/projects/password-generator.png', alt: 'Password Generator desktop app screenshot'}
    },
    {
        id: 'ssh-keygen',
        title: 'SSH Key Generator',
        types: ['Desktop'],
        focus: 'Key management',
        summary: 'A desktop utility for generating SSH key pairs, setting passphrases, and managing output files.',
        highlights: [
            'ED25519, RSA, and ECDSA key support',
            'Custom output paths and optional passphrases',
            'Fingerprint display and quick copy actions'
        ],
        techStack: ['Python', 'PyQt6', 'cryptography', 'PyInstaller', 'pytest', 'Ruff'],
        links: {
            github: 'https://github.com/haseebn19/ssh-keygen'
        },
        screenshot: {src: '/projects/ssh-keygen.png', alt: 'SSH Key Generator desktop app screenshot'}
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
            'Public and private response modes'
        ],
        techStack: ['Python', 'discord.py', 'SQLite', 'pytest'],
        links: {
            github: 'https://github.com/haseebn19/calendar-bot'
        },
        icon: '/projects/calendar-bot.svg'
    }
];

export const projectTypes = Array.from(new Set(projects.flatMap((project) => project.types))).sort((a, b) =>
    a.localeCompare(b)
);
