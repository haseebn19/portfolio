export const projects = [{
    id: 'unidetect',
    title: "UniDetect",
    description: "A modern web application for detecting and cleaning hidden Unicode characters in text. Supports multiple file formats with real-time analysis and privacy-focused local processing.",
    features: [
        "Real-time Unicode detection & highlighting",
        "PDF & DOCX file support",
        "Markdown & TXT file support",
        "Drag & drop interface",
        "Detailed character statistics & insights",
        "Privacy-focused local processing",
        "One-click text cleaning with clipboard copy"
    ],
    techStack: ["React", "TypeScript", "Vite", "Vitest", "PDF.js", "Mammoth.js", "Docker"],
    githubUrl: "https://github.com/haseebn19/unidetect",
    liveUrl: "https://haseebn19.github.io/unidetect/",
    faIcon: "faSearch",
    icon: "https://raw.githubusercontent.com/haseebn19/unidetect/main/public/logo.svg",
},
{
    id: 'urban-housing-demand',
    title: "Urban Housing Demand",
    description: "A full-stack web application for visualizing housing and labour market data. Features interactive charts, real-time data analysis, and dark mode support.",
    features: [
        "Housing Data Visualization",
        "Completion Ratios Analysis",
        "Labour Market Analysis",
        "Immigration Trends Monitoring",
        "Dark/Light Theme Toggle"
    ],
    techStack: ["Java", "Spring Boot", "TypeScript", "React", "Vite", "Vitest", "Docker", "MariaDB", "Chart.js"],
    githubUrl: "https://github.com/haseebn19/urban-housing-demand",
    liveUrl: null,
    faIcon: "faCity",
    media: {
        type: 'image',
        url: 'https://raw.githubusercontent.com/haseebn19/urban-housing-demand/main/docs/screenshot-home.jpeg',
        alt: 'Urban Housing Demand Dashboard'
    }
},
{
    id: 'requizle',
    title: "ReQuizle",
    description: "A spaced-repetition study app with mastery tracking, multiple question types, and offline-friendly data storage.",
    features: [
        "Mastery tracking with include/exclude mastered toggle",
        "Multiple question types (MCQ, multi-answer, T/F, keywords, matching, word bank)",
        "Custom JSON import for subjects and questions",
        "Local storage persistence for profiles and progress",
        "Dark mode and responsive UI",
        "Privacy-focused: all data stays in-browser"
    ],
    techStack: ["React", "TypeScript", "TailwindCSS", "Zustand", "Framer Motion", "Vite", "Vitest", "PWA"],
    githubUrl: "https://github.com/ReQuizle/requizle-web",
    liveUrl: "https://requizle.github.io/requizle-web/",
    faIcon: "faBook",
    icon: "https://raw.githubusercontent.com/ReQuizle/requizle-web/refs/heads/main/public/icon.svg",
},
{
    id: 'password-generator',
    title: "Password Generator",
    description: "A modern WPF password generator with real-time strength evaluation. Features a clean UI that follows your Windows theme.",
    features: [
        "Configurable length from 4 to 128 characters",
        "Lowercase, uppercase, numbers, and symbols",
        "Real-time strength evaluation with Zxcvbn",
        "Windows dark/light theme support",
        "One-click clipboard copy"
    ],
    techStack: ["C#", ".NET 8.0", "WPF", "CommunityToolkit.Mvvm", "xUnit"],
    githubUrl: "https://github.com/haseebn19/passgen",
    liveUrl: null,
    faIcon: "faLock",
    icon: "https://raw.githubusercontent.com/haseebn19/passgen/master/logo.svg",
    media: {
        type: 'image',
        url: 'https://raw.githubusercontent.com/haseebn19/passgen/master/docs/screenshot-window.png',
        alt: 'Password Generator UI'
    }
}, {
    id: 'ssh-keygen',
    title: "SSH Key Generator",
    description: "A desktop application built with Python and PyQt6 that simplifies the process of generating SSH keys. Features a clean, user-friendly interface for creating secure SSH key pairs with multiple algorithms and key lengths.",
    features: [
        "ED25519, RSA, and ECDSA key support",
        "Multiple key size options",
        "Default ~/.ssh or custom output location",
        "Optional passphrase protection",
        "Quick copy & file access",
        "Fingerprint generation and display"
    ],
    techStack: ["Python", "PyQt6", "cryptography", "PyInstaller", "pytest", "Ruff"],
    githubUrl: "https://github.com/haseebn19/ssh-keygen",
    liveUrl: null,
    faIcon: "faKey",
    icon: "https://raw.githubusercontent.com/haseebn19/ssh-keygen/main/resources/logo.svg",
    media: {
        type: 'image',
        url: 'https://raw.githubusercontent.com/haseebn19/ssh-keygen/main/resources/screenshot-window.png',
        alt: 'SSH Key Generator UI'
    }
}, {
    id: 'calendar-bot',
    title: "Discord Calendar Bot",
    description: "A Discord bot for managing personal calendar events with full timezone support. Features slash commands, privacy controls, and Discord's native timestamp formatting.",
    features: [
        "Calendar management with add, list, and remove commands",
        "Full timezone support with autocomplete",
        "Public and private privacy modes",
        "Ephemeral responses for private mode",
        "Discord native timestamp formatting",
        "SQLite database with async support"
    ],
    techStack: ["Python", "discord.py", "aiosqlite", "pytest", "Ruff"],
    githubUrl: "https://github.com/haseebn19/calendar-bot",
    liveUrl: null,
    faIcon: "faCalendarAlt",
    icon: "https://raw.githubusercontent.com/haseebn19/calendar-bot/main/docs/logo.svg",
}, {
    id: 'portfolio',
    title: "Personal Portfolio",
    description: "This website! A clean, responsive portfolio built with React to showcase my projects and skills.",
    features: [
        "Mobile-friendly design",
        "Smooth animations",
        "Project filtering by tech stack",
        "Project showcase with media support",
        "Skills overview"
    ],
    techStack: ["React", "JavaScript", "CSS3", "Vite", "Vitest"],
    githubUrl: "https://github.com/haseebn19/portfolio",
    liveUrl: null,
    faIcon: "faUser",
},
{
    id: 'roblox-games',
    title: "Roblox Development",
    description: "Built games and experiences on Roblox using Lua scripting. Focused on creating engaging gameplay and smooth user experiences.",
    features: [
        "Game mechanics",
        "UI design",
        "Player systems",
        "Performance optimization"
    ],
    techStack: ["Lua", "Roblox Studio"],
    githubUrl: null,
    liveUrl: null,
    faIcon: "faGamepad"
}
];

export const featuredProjectIds = [
    'unidetect',
    'requizle',
    'urban-housing-demand'
];