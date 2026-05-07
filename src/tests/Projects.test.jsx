import {fireEvent, render, screen, within, waitFor} from '@testing-library/react';
import Projects from '../components/Projects';
import {getFeaturedProjects, getProjectTypes, projects} from '../data/projects';

describe('Projects', () => {
    test('renders every project in one browsable grid', () => {
        render(<Projects />);

        const projectGrid = screen.getByLabelText('Projects');
        const cards = within(projectGrid).getAllByRole('article');

        expect(screen.getByRole('combobox', {name: /Search projects/i})).toBeInTheDocument();
        expect(cards).toHaveLength(6);
        expect(screen.getByText('Total projects')).toBeInTheDocument();
        expect(within(screen.getByText('Total projects').parentElement).getByText('8')).toBeInTheDocument();
        expect(screen.getByText(String(getFeaturedProjects().length))).toBeInTheDocument();

        projects.slice(0, 6).forEach((project) => {
            expect(within(projectGrid).getByRole('heading', {name: project.title})).toBeInTheDocument();
        });
    });

    test('generates type filters from project data', () => {
        render(<Projects />);

        expect(screen.getByRole('button', {name: 'All'})).toBeInTheDocument();
        getProjectTypes().forEach((type) => {
            expect(screen.getByRole('button', {name: type})).toBeInTheDocument();
        });
    });

    test('filters projects by type and search query', async () => {
        render(<Projects />);

        fireEvent.click(screen.getByRole('button', {name: 'Desktop'}));
        expect(screen.getByRole('heading', {name: 'SSH Key Generator'})).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.queryByRole('heading', {name: 'UniDetect'})).not.toBeInTheDocument();
        });

        fireEvent.click(screen.getByRole('button', {name: /Reset filters/i}));
        fireEvent.change(screen.getByRole('combobox', {name: /Search projects/i}), {
            target: {value: 'discord'}
        });

        expect(screen.getByRole('heading', {name: 'Discord Calendar Bot'})).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.queryByRole('heading', {name: 'ReQuizle'})).not.toBeInTheDocument();
        });
    });
});
