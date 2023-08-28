// Importing required modules and components
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './styles.css';

// Creating a root for the React app
const root = createRoot(document.getElementById('root'));

// Rendering the App component
root.render(<App/>);