import {fireEvent, render, screen, within, waitFor} from '@testing-library/react';
import Projects from '../components/Projects';
import {getProjectTypes, projects} from '../data/projects';

describe('Projects', () => {
    test('renders every project in one browsable grid', () => {
        render(<Projects />);

        const projectGrid = screen.getByLabelText('Projects');
        const cards = within(projectGrid).getAllByRole('article');

        expect(screen.getByRole('combobox', {name: /Search projects/i})).toBeInTheDocument();
        expect(cards).toHaveLength(6);

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

    test('shows empty state when no projects match', () => {
        render(<Projects />);

        fireEvent.change(screen.getByRole('combobox', {name: /Search projects/i}), {
            target: {value: 'xyznonexistent123'}
        });

        expect(screen.getByText(/No projects match that filter/i)).toBeInTheDocument();
    });

    test('adds search tags via exact tech match and removes them', async () => {
        render(<Projects />);

        const searchInput = screen.getByRole('combobox', {name: /Search projects/i});

        // Typing an exact tech tag auto-adds it as a search token
        fireEvent.change(searchInput, {target: {value: 'Docker'}});

        expect(screen.getByRole('button', {name: /Remove Docker/i})).toBeInTheDocument();

        // Remove the tag
        fireEvent.click(screen.getByRole('button', {name: /Remove Docker/i}));

        // AnimatePresence exit animation may delay DOM removal
        await waitFor(() => {
            expect(screen.queryByRole('button', {name: /Remove Docker/i})).not.toBeInTheDocument();
        });
    });

    test('adds search tags via Enter key', () => {
        render(<Projects />);

        const searchInput = screen.getByRole('combobox', {name: /Search projects/i});

        fireEvent.change(searchInput, {target: {value: 'discord'}});
        fireEvent.keyDown(searchInput, {key: 'Enter'});

        expect(screen.getByRole('button', {name: /Remove discord/i})).toBeInTheDocument();
    });
});
