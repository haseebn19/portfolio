import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/',
    build: {
        outDir: 'dist',
        sourcemap: true,
    },
    server: {
        port: 3000,
        open: false,
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './src/tests/setupTests.js',
        coverage: {
            provider: 'v8',
            reportsDirectory: 'coverage',
            reporter: ['text', 'html', 'lcov', 'json-summary'],
            exclude: ['**/node_modules/**', '**/dist/**', '**/coverage/**', 'src/tests/**'],
        },
    },
});
