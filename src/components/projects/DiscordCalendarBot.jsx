import React from 'react';
export const projectName = "Discord Calendar Bot";

const DiscordCalendarBot = () => {
    return (
        <div className="project-frame">
            <h3>Discord Calendar Bot</h3>
            <p>The Calendar Bot enhances event management and organization among Discord server members. It allows users to manage their events and timezones directly within Discord, simplifying the process of checking availability and planning events.</p>
            <ul>
                <li>Personalized Timezone Management</li>
                <li>Event Management</li>
                <li>Events List</li>
                <li>Timezones List</li>
            </ul>
            <p><strong>Tech Stack:</strong> Python, Pycord API</p>
            <a href="https://github.com/haseebn19/calendar-bot" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> Repository</a>
        </div>
    );
};

export default DiscordCalendarBot;
