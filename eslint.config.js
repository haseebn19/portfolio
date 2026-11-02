import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import {defineConfig, globalIgnores} from 'eslint/config';

export default defineConfig([
    globalIgnores(['dist', 'coverage']),
    {
        files: ['**/*.{js,jsx,mjs}'],
        extends: [
            js.configs.recommended,
            react.configs.flat.recommended,
            react.configs.flat['jsx-runtime'],
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite
        ],
        languageOptions: {
            globals: globals.browser
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            'react/prop-types': 'off'
        }
    },
    {
        files: ['src/tests/**'],
        languageOptions: {
            globals: globals.vitest
        }
    },
    {
        files: ['scripts/**', 'vite.config.js'],
        languageOptions: {
            globals: globals.node
        }
    }
]);
