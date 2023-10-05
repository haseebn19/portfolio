import React from 'react';

export const projectName = "SSH Key Generator";

const SSHKeyGenerator = () => {
    return (
        <div className="project-frame">
            <h3>SSH Key Generator</h3>
            <p>SSH Key Generator simplifies the process of generating SSH keys. Built with Python and Tkinter, it provides a user-friendly interface for generating SSH keys with different algorithms and key lengths.</p>
            <ul>
                <li>Algorithm Selection</li>
                <li>Key Length Options</li>
                <li>Generate Keys</li>
                <li>Public Key Display</li>
                <li>Comment and Passphrase</li>
                <li>Save Keys</li>
            </ul>
            <p><strong>Tech Stack:</strong> Python, Tkinter</p>
            <a href="https://github.com/haseebn19/ssh-keygen" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> Repository</a>
        </div>
    );
};

export default SSHKeyGenerator;
