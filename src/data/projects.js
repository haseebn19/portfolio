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
    techStack: ["React", "TypeScript", "Vite", "Vitest", "PDF.js", "Mammoth.js"],
    githubUrl: "https://github.com/haseebn19/unidetect",
    liveUrl: "https://haseebn19.github.io/unidetect/",
    faIcon: "faSearch",
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
    techStack: ["React", "TypeScript", "TailwindCSS", "Zustand", "Framer Motion", "Vite"],
    githubUrl: "https://github.com/haseebn19/requizle",
    liveUrl: "https://haseebn19.github.io/requizle/",
    faIcon: "faBook",
},
{
    id: 'password-generator',
    title: "Password Generator",
    description: "A Windows desktop app for generating secure passwords. Choose your character sets, length, and get instant password strength feedback.",
    features: [
        "Custom character sets",
        "Adjustable length",
        "Unique character count control",
        "Password strength meter",
        "Copy to clipboard"
    ],
    techStack: ["C#", ".NET 6.0", "Windows Forms"],
    githubUrl: "https://github.com/haseebn19/passgen",
    liveUrl: null,
    faIcon: "faLock",
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
    techStack: ["Python", "PyQt6", "cryptography", "PyInstaller"],
    githubUrl: "https://github.com/haseebn19/ssh-keygen",
    liveUrl: null,
    faIcon: "faKey",
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
    techStack: ["React", "JavaScript", "CSS3", "Vite"],
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
    'ssh-keygen',
];