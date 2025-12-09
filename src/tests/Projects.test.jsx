import {render, screen, fireEvent} from '@testing-library/react';
import {act} from 'react';
import {vi} from 'vitest';
import Projects from '../components/Projects';
import {projects, featuredProjectIds} from '../data/projects';

describe('Projects', () => {
    test('shows featured projects by default', () => {
        render(<Projects />);

        const projectHeadings = screen.getAllByRole('heading', {level: 3});
        expect(projectHeadings).toHaveLength(featuredProjectIds.length);
        expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
    });

    test('toggles to show all projects', async () => {
        vi.useFakeTimers();
        render(<Projects />);

        fireEvent.click(screen.getByRole('button', {name: /View All Projects/i}));

        await act(async () => {
            vi.runAllTimers();
        });

        const projectHeadings = screen.getAllByRole('heading', {level: 3});
        expect(projectHeadings).toHaveLength(projects.length);
        expect(screen.getByText(/All Projects/i)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Show Featured Only/i})).toBeInTheDocument();

        vi.useRealTimers();
    });
});
