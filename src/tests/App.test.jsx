import {render, screen, within} from '@testing-library/react';
import {act} from 'react';
import App from '../App';
import {profile} from '../data/profile';

describe('App', () => {
    test('renders navigation and redesigned sections', () => {
        render(<App />);

        const navigation = screen.getByRole('navigation', {name: /primary/i});

        expect(navigation).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Back to introduction/i})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: profile.headline, level: 1})).toBeInTheDocument();
        expect(within(navigation).getByRole('button', {name: /Work/i})).toBeInTheDocument();
        expect(within(navigation).getByRole('button', {name: /Capabilities/i})).toBeInTheDocument();
        expect(within(navigation).getByRole('button', {name: /About/i})).toBeInTheDocument();
        expect(within(navigation).getByRole('button', {name: /Contact/i})).toBeInTheDocument();
        expect(screen.getAllByText('Haseeb Niazi').length).toBeGreaterThan(0);
        expect(screen.queryByText('HN')).not.toBeInTheDocument();
        expect(screen.getByRole('heading', {name: /Selected software and shipped projects/i})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: /Technical expertise and core capabilities/i})).toBeInTheDocument();
    });

    test('renders skip-to-content link', () => {
        render(<App />);

        const skipLink = screen.getByRole('link', {name: /skip to main content/i});
        expect(skipLink).toBeInTheDocument();
        expect(skipLink).toHaveAttribute('href', '#main-content');
    });

    test('shows back to top button when scrolled', async () => {
        render(<App />);

        const backToTop = screen.getByRole('button', {name: /back to top/i});
        expect(backToTop.classList.contains('visible')).toBe(false);

        await act(async () => {
            Object.defineProperty(window, 'scrollY', {value: 500, writable: true, configurable: true});
            window.dispatchEvent(new Event('scroll'));
            // Flush rAF-throttled handler
            await new Promise((resolve) => requestAnimationFrame(resolve));
        });

        expect(backToTop.classList.contains('visible')).toBe(true);
    });
});
