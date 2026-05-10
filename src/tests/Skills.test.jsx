import {render, screen, within} from '@testing-library/react';
import Skills from '../components/Skills';
import {capabilities, languages} from '../data/profile';

describe('Skills', () => {
    test('renders core languages and capability cards', () => {
        render(<Skills />);

        expect(screen.getByRole('heading', {name: /Technical expertise and core capabilities/i})).toBeInTheDocument();
        expect(screen.getByText('Core Languages')).toBeInTheDocument();

        languages.forEach((lang) => {
            expect(screen.getByText(lang)).toBeInTheDocument();
        });

        capabilities.forEach((cap) => {
            expect(screen.getByRole('heading', {name: cap.title})).toBeInTheDocument();
            expect(screen.getByText(cap.summary)).toBeInTheDocument();
        });
    });

    test('renders tool lists for each capability', () => {
        render(<Skills />);

        capabilities.forEach((cap) => {
            const toolList = screen.getByRole('list', {name: `${cap.title} tools`});
            expect(toolList).toBeInTheDocument();

            // Use within() to scope queries - some tools appear in multiple capability cards
            cap.tools.forEach((tool) => {
                expect(within(toolList).getByText(tool)).toBeInTheDocument();
            });
        });
    });
});
