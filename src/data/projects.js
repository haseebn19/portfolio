export const projects = [
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
        description: "A Python GUI tool for generating SSH key pairs. Supports different algorithms and key lengths with an easy-to-use interface.",
        features: [
            "Multiple algorithms",
            "Custom key lengths",
            "Key export options",
            "Passphrase protection"
        ],
        techStack: ["Python", "Tkinter", "Cryptography"],
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
    'portfolio',
    'ssh-keygen',
    'password-generator',
];