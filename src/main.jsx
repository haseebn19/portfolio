import {MotionConfig} from 'framer-motion';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <MotionConfig reducedMotion="user"><App /></MotionConfig>
    </StrictMode>
);
