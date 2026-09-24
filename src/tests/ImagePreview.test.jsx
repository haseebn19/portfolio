import {fireEvent, render, screen, within} from '@testing-library/react';
import Projects from '../components/Projects';

// jsdom does not implement the dialog API. Native focus containment is checked in Edge.
beforeAll(() => {
    HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
    HTMLDialogElement.prototype.close = function () { this.removeAttribute('open'); };
});

describe('Screenshot preview', () => {
    test('opens in the current page, locks scroll, and restores focus on close', () => {
        render(<Projects />);
        const trigger = screen.getByRole('button', {name: 'Enlarge Hostage Chess screenshot'});
        fireEvent.click(trigger);
        const dialog = screen.getByRole('dialog', {name: 'Hostage Chess'});
        expect(within(dialog).getByRole('img')).toHaveAttribute('src', '/projects/hostage-chess.jpeg');
        expect(document.body.style.overflow).toBe('hidden');
        const close = within(dialog).getByRole('button', {name: 'Close screenshot'});
        expect(close).toHaveFocus();
        fireEvent.click(close);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        expect(document.body.style.overflow).toBe('');
        expect(trigger).toHaveFocus();
    });

    test('supports native Escape cancellation and zoom without dismissing the image', () => {
        render(<Projects />);
        fireEvent.click(screen.getByRole('button', {name: 'Enlarge Urban Housing Demand screenshot'}));
        const dialog = screen.getByRole('dialog', {name: 'Urban Housing Demand'});
        fireEvent.click(within(dialog).getByRole('button', {name: 'Zoom in'}));
        expect(within(dialog).getByRole('button', {name: 'Fit image'})).toHaveAttribute('aria-pressed', 'true');
        fireEvent.click(within(dialog).getByRole('img'));
        expect(dialog).toBeInTheDocument();
        fireEvent(dialog, new Event('cancel', {bubbles: false, cancelable: true}));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    test('closes on backdrop click and releases scroll on unmount', () => {
        const {unmount} = render(<Projects />);
        const trigger = screen.getByRole('button', {name: 'Enlarge Hostage Chess screenshot'});
        fireEvent.click(trigger);
        const dialog = screen.getByRole('dialog');
        vi.spyOn(dialog, 'getBoundingClientRect').mockReturnValue({left: 20, right: 900, top: 20, bottom: 700});
        fireEvent.click(dialog, {clientX: 5, clientY: 5});
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        expect(trigger).toHaveFocus();
        fireEvent.click(trigger);
        unmount();
        expect(document.body.style.overflow).toBe('');
    });
});
