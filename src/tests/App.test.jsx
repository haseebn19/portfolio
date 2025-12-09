import {render, screen} from '@testing-library/react';
import {act} from 'react';
import App from '../App';

describe('App', () => {
    test('renders navigation and sections', () => {
        render(<App />);

        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.getByText('Haseeb Niazi')).toBeInTheDocument();
        expect(screen.getByText(/Hello, I.*m Haseeb/i)).toBeInTheDocument();
        const projectButtons = screen.getAllByRole('button', {name: /Projects/i});
        expect(projectButtons.length).toBeGreaterThan(0);
        expect(screen.getByRole('button', {name: /Skills/i})).toBeInTheDocument();
    });

    test('shows back to top button when scrolled', () => {
        render(<App />);

        const backToTop = screen.getByRole('button', {name: /back to top/i});
        expect(backToTop.classList.contains('visible')).toBe(false);

        act(() => {
            window.pageYOffset = 500;
            window.dispatchEvent(new Event('scroll'));
        });

        expect(backToTop.classList.contains('visible')).toBe(true);
    });
});
