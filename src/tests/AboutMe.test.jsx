import {render, screen} from '@testing-library/react';
import AboutMe from '../components/AboutMe';
import {profile} from '../data/profile';
import {SOCIAL_LINKS} from '../utils/constants';

describe('AboutMe', () => {
    test('renders the redesigned hero content and contact links', () => {
        render(<AboutMe />);

        expect(screen.getByRole('heading', {name: profile.headline, level: 1})).toBeInTheDocument();
        expect(screen.getByText(profile.availability)).toBeInTheDocument();
        expect(screen.getByText(profile.role)).toBeInTheDocument();
        expect(screen.getByText(profile.location)).toBeInTheDocument();

        const githubLink = screen.getByRole('link', {name: /GitHub/i});
        const linkedinLink = screen.getByRole('link', {name: /LinkedIn/i});
        const emailLink = screen.getByRole('link', {name: /Email/i});

        expect(githubLink).toHaveAttribute('href', SOCIAL_LINKS.github);
        expect(linkedinLink).toHaveAttribute('href', SOCIAL_LINKS.linkedin);
        expect(emailLink).toHaveAttribute('href', SOCIAL_LINKS.email);
    });
});
