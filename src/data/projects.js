export const projects = [{
    id: 'unidetect',
    title: "UniDetect",
    description: "A modern web application for detecting and cleaning hidden Unicode characters in text. Supports multiple file formats with real-time analysis and privacy-focused local processing.", features: [
        "Real-time Unicode detection & highlighting",
        "PDF & DOCX file support",
        "Drag & drop interface",
        "Privacy-focused local processing",
        "One-click text cleaning"
    ],
    techStack: ["React", "TypeScript", "PDF.js", "Mammoth.js", "CSS3"],
    githubUrl: "https://github.com/haseebn19/unidetect",
    liveUrl: "https://haseebn19.github.io/unidetect/",
    faIcon: "faSearch",
},
{
    id: 'password-generator',
    title: "Password Generator",
    description: "A Windows desktop app for generating secure passwords. Choose your character sets, length, and get instant password strength feedback.",
    features: [
        "Custom character sets",
        "Adjustable length",
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
        "Quick copy and file access",
        "Public key content display",
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
        "Project showcase",
        "Skills overview"
    ],
    techStack: ["React", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/haseebn19/portfolio",
    liveUrl: null,
    faIcon: "faUser",
},
{
    id: 'calendar-bot',
    title: "Discord Calendar Bot",
    description: "A Discord bot that helps server members coordinate events across different timezones. Makes it easy to schedule and track events without leaving Discord.",
    features: [
        "Timezone management",
        "Event scheduling",
        "Event listings",
        "Multi-timezone support"
    ],
    techStack: ["Python", "Pycord API"],
    githubUrl: "https://github.com/haseebn19/calendar-bot",
    liveUrl: null,
    faIcon: "faCalendarAlt",
    //media: {
    //    type: "video",
    //    url: "/assets/images/video.mp4",
    //    alt: "Discord Calendar Bot interface",
    //    poster: "/assets/images/image.jpg"
    //}
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
    'ssh-keygen',
    'password-generator',
];