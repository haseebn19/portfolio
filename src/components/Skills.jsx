// Importing React
import React from 'react';
// Importing Font Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library, findIconDefinition} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

// Skills component
function Skills() {
    // Function to render skill block
    const renderSkillBlock = (iconName, title, prefix = 'fab') => (
        <div className="skill-block-container">
            <div className="skill-block" title={title}>
                <FontAwesomeIcon icon={findIconDefinition({prefix, iconName})} />
            </div>
            <span className="skill-name">{title}</span>
        </div>
    );

    // JSX for Skills component
    return (
        <div style={{marginBottom: '2%'}}>
            <h2>Languages & Libraries</h2>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {renderSkillBlock('python', 'Python')}
                {renderSkillBlock('java', 'Java')}
                {renderSkillBlock('js', 'JavaScript')}
                {renderSkillBlock('react', 'React.js')}
                {renderSkillBlock('html5', 'HTML5')}
                {renderSkillBlock('css3-alt', 'CSS3')}
                {renderSkillBlock('c', 'C', 'fas')}
                {renderSkillBlock('hashtag', 'C#', 'fas')}


                {renderSkillBlock('code', 'Lua', 'fas')}

            </div>
            <h2>Tools</h2>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {renderSkillBlock('git', 'Git')}
                {renderSkillBlock('github', 'GitHub')}
                {renderSkillBlock('slack', 'Slack')}
                {renderSkillBlock('trello', 'Trello')}
                {renderSkillBlock('docker', 'Docker')}
                {renderSkillBlock('discord', 'Developer Portal',)}
                {renderSkillBlock('code', 'Visual Studio', 'fas')}
                {renderSkillBlock('code', 'Roblox Studio', 'fas')}
                {renderSkillBlock('r-project', 'R')}
            </div>
        </div>
    );
}


// Exporting Skills component
export default Skills;
