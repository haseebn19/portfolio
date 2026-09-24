import {fireEvent, render, screen, within} from '@testing-library/react';
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
        expect(within(navigation).getByRole('button', {name: /Projects/i})).toBeInTheDocument();
        expect(within(navigation).getByRole('button', {name: /Skills/i})).toBeInTheDocument();
        expect(within(navigation).getByRole('button', {name: /About/i})).toBeInTheDocument();
        expect(within(navigation).getByRole('button', {name: /Contact/i})).toBeInTheDocument();
        expect(screen.getAllByText('Haseeb Niazi').length).toBeGreaterThan(0);
        expect(screen.queryByText('HN')).not.toBeInTheDocument();
        expect(screen.getByRole('heading', {name: /Selected projects/i})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: /Languages and tools/i})).toBeInTheDocument();
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
    test('mobile navigation closes with Escape and restores focus', () => {
        render(<App />);
        const toggle = screen.getByRole('button', {name: /toggle navigation/i});
        fireEvent.click(toggle);
        expect(toggle).toHaveAttribute('aria-expanded', 'true');
        fireEvent.keyDown(document, {key: 'Escape'});
        expect(toggle).toHaveAttribute('aria-expanded', 'false');
        expect(toggle).toHaveFocus();
    });

    test('resume links use the same bundled PDF', () => {
        render(<App />);
        screen.getAllByRole('link', {name: /resume/i}).forEach(link => {
            expect(link).toHaveAttribute('href', '/Haseeb_Niazi_Resume.pdf');
        });
    });

});
