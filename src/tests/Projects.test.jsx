import {fireEvent, render, screen, within, waitFor} from '@testing-library/react';
import Projects from '../components/Projects';
import {projects, projectTypes} from '../data/projects';

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
        projectTypes.forEach((type) => {
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

    test('adds a search tag when a suggestion is chosen and removes it', async () => {
        render(<Projects />);

        const searchInput = screen.getByRole('combobox', {name: /Search projects/i});

        // A change event without an inputType is how a datalist selection arrives.
        fireEvent.change(searchInput, {target: {value: 'Docker'}});

        expect(screen.getByRole('button', {name: /Remove Docker/i})).toBeInTheDocument();

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

    test('keeps typed text editable when it matches a technology name', () => {
        render(<Projects />);

        const searchInput = screen.getByRole('combobox', {name: /Search projects/i});
        fireEvent.input(searchInput, {target: {value: 'Java'}, inputType: 'insertText'});

        expect(searchInput).toHaveValue('Java');
        expect(screen.queryByRole('button', {name: /Remove Java/i})).not.toBeInTheDocument();
    });

    test('matches technology tags exactly', () => {
        render(<Projects />);

        fireEvent.change(screen.getByRole('combobox', {name: /Search projects/i}), {target: {value: 'Java'}});

        expect(screen.getByRole('status')).toHaveTextContent('Showing 1 of 1 project');
        expect(screen.getByRole('heading', {name: 'Urban Housing Demand'})).toBeInTheDocument();
    });

    test('reports visible results and exposes the selected filter', () => {
        render(<Projects />);
        expect(screen.getByRole('status')).toHaveTextContent('Showing 6 of 8 projects');
        fireEvent.click(screen.getByRole('button', {name: /show all projects/i}));
        expect(screen.getByRole('status')).toHaveTextContent('Showing 8 of 8 projects');
        fireEvent.click(screen.getByRole('button', {name: 'Desktop'}));
        expect(screen.getByRole('button', {name: 'Desktop'})).toHaveAttribute('aria-pressed', 'true');
        expect(screen.getByRole('status')).toHaveTextContent('Showing 3 of 3 projects');
        fireEvent.click(screen.getByRole('button', {name: 'All'}));
        expect(screen.getByRole('status')).toHaveTextContent('Showing 6 of 8 projects');
    });
});
