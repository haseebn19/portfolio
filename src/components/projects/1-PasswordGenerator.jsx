import React from 'react';

export const projectName = "Password Generator";

const PasswordGenerator = () => {
    return (
        <div className="project-frame">
            <h3>Password Generator</h3>
            <p>Password Generator is a Windows Forms application designed to generate strong and customizable passwords. Built with C# and .NET 6.0, this application provides a user-friendly interface for generating passwords with different character sets and lengths. It also evaluates the strength of the generated passwords in real-time using the Zxcvbn library.</p>
            <ul>
                <li>Character Set Selection: Choose from lowercase, uppercase, numbers, and symbols for password generation.</li>
                <li>Password Length: Customize the length of the generated password.</li>
                <li>Unique Characters: Specify the number of unique characters in the password.</li>
                <li>Strength Indicator: Real-time password strength evaluation based on the Zxcvbn library.</li>
                <li>Clipboard Support: Easily copy the generated password to the clipboard.</li>
            </ul>
            <p><strong>Tech Stack:</strong> C#, .NET 6.0</p>
            <a href="https://github.com/haseebn19/passgen" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> Repository</a>
        </div>
    );
};

export default PasswordGenerator;
