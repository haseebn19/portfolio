import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        sourcemap: true
    },
    server: {
        port: 3000
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/tests/setupTests.js',
        coverage: {
            reporter: ['text', 'html', 'json-summary'],
            exclude: ['src/tests/**']
        }
    }
});
