import {render, screen} from '@testing-library/react';
import {ProjectLink} from '../components/ProjectLink';

describe('ProjectLink', () => {
    test('renders GitHub link with default text', () => {
        render(<ProjectLink url="https://example.com/repo" type="github" />);

        const link = screen.getByRole('link', {name: /Repository/i});
        expect(link).toHaveAttribute('href', 'https://example.com/repo');
        expect(link.className).toContain('github');
    });

    test('renders nothing when url is missing', () => {
        const {container} = render(<ProjectLink url={null} type="demo" />);
        expect(container).toBeEmptyDOMElement();
    });
});
