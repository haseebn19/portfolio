import {fireEvent, render, screen, within} from '@testing-library/react';
import {act} from 'react';
import App from '../App';
import {profile} from '../data/profile';

describe('App', () => {
    test('renders navigation and page sections', () => {
        render(<App />);

        const navigation = screen.getByRole('navigation', {name: /primary/i});

        expect(navigation).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: profile.name, level: 1})).toBeInTheDocument();
        ['Projects', 'Skills', 'About', 'Contact'].forEach((label) => {
            const link = within(navigation).getByRole('link', {name: label});
            expect(document.querySelector(link.getAttribute('href'))).toBeInTheDocument();
        });
        expect(screen.getByRole('heading', {name: /Selected projects/i})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: /Languages and tools/i})).toBeInTheDocument();
    });

    test('renders skip-to-content link', () => {
        render(<App />);

        const skipLink = screen.getByRole('link', {name: /skip to main content/i});
        expect(skipLink).toBeInTheDocument();
        expect(skipLink).toHaveAttribute('href', '#main-content');
    });

    test('shows the back to top link when scrolled', async () => {
        render(<App />);

        const backToTop = screen.getByRole('link', {name: /back to top/i});
        expect(backToTop.classList.contains('visible')).toBe(false);

        await act(async () => {
            Object.defineProperty(window, 'scrollY', {value: 500, writable: true, configurable: true});
            window.dispatchEvent(new Event('scroll'));
            // Let the scroll handler's animation frame run
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
        screen.getAllByRole('link', {name: /resume/i}).forEach((link) => {
            expect(link).toHaveAttribute('href', profile.resume);
        });
    });
});
