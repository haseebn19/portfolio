import {render, screen} from '@testing-library/react';
import AboutMe from '../components/AboutMe';
import {SOCIAL_LINKS} from '../utils/constants';

describe('AboutMe', () => {
    test('renders hero content and contact links', () => {
        render(<AboutMe />);

        expect(screen.getByText(/Hello, I.*m Haseeb/i)).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: /Software Engineer/i, level: 2})).toBeInTheDocument();
        expect(screen.getByText(/Available for hire/i)).toBeInTheDocument();

        const githubLink = screen.getByRole('link', {name: /GitHub/i});
        const linkedinLink = screen.getByRole('link', {name: /LinkedIn/i});
        const emailLink = screen.getByRole('link', {name: /Email/i});

        expect(githubLink).toHaveAttribute('href', SOCIAL_LINKS.github);
        expect(linkedinLink).toHaveAttribute('href', SOCIAL_LINKS.linkedin);
        expect(emailLink).toHaveAttribute('href', SOCIAL_LINKS.email);
    });
});
