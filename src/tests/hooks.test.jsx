import {act, renderHook} from '@testing-library/react';
import {useActiveSection, useScrolledPast} from '../utils/hooks';

function scrollTo(y) {
    Object.defineProperty(window, 'scrollY', {value: y, configurable: true});
    window.dispatchEvent(new Event('scroll'));
}

beforeEach(() => {
    // Run each animation frame straight away so updates can be checked synchronously
    vi.stubGlobal('requestAnimationFrame', (callback) => {
        callback(0);
        return 0;
    });
});

afterEach(() => {
    vi.unstubAllGlobals();
    Object.defineProperty(window, 'scrollY', {value: 0, configurable: true});
});

describe('useScrolledPast', () => {
    test('turns true once the page scrolls past the given distance', () => {
        const {result} = renderHook(() => useScrolledPast(300));
        expect(result.current).toBe(false);

        act(() => scrollTo(300));
        expect(result.current).toBe(false);

        act(() => scrollTo(301));
        expect(result.current).toBe(true);

        act(() => scrollTo(0));
        expect(result.current).toBe(false);
    });

    test('starts true when the page loads already scrolled', () => {
        Object.defineProperty(window, 'scrollY', {value: 500, configurable: true});
        const {result} = renderHook(() => useScrolledPast(300));
        expect(result.current).toBe(true);
    });
});

describe('useActiveSection', () => {
    const ids = ['intro', 'projects', 'about', 'contact'];

    // Places each section at the given distance from the top of the window
    function layOut(tops) {
        document.body.innerHTML = '';
        ids.forEach((id) => {
            const section = document.createElement('section');
            section.id = id;
            section.getBoundingClientRect = () => ({top: tops[id], bottom: tops[id] + 300});
            document.body.append(section);
        });
    }

    beforeEach(() => {
        vi.spyOn(document.documentElement, 'scrollHeight', 'get').mockReturnValue(5000);
        window.location.hash = '';
    });

    afterEach(() => {
        vi.restoreAllMocks();
        document.body.innerHTML = '';
    });

    test('picks the last section whose top has passed the middle of the window', () => {
        layOut({intro: -900, projects: -100, about: 300, contact: 800});
        const {result} = renderHook(() => useActiveSection(ids));
        expect(result.current).toBe('about');

        layOut({intro: -1500, projects: -700, about: -300, contact: 500});
        act(() => scrollTo(1000));
        expect(result.current).toBe('about');
    });

    test('at the bottom of the page, prefers the linked section when it is in view', () => {
        layOut({intro: -3000, projects: -2000, about: 100, contact: 500});
        Object.defineProperty(window, 'scrollY', {value: 5000 - window.innerHeight, configurable: true});

        const {result} = renderHook(() => useActiveSection(ids));
        expect(result.current).toBe('contact');

        act(() => {
            window.location.hash = '#about';
            window.dispatchEvent(new HashChangeEvent('hashchange'));
        });
        expect(result.current).toBe('about');

        act(() => {
            window.location.hash = '#projects';
            window.dispatchEvent(new HashChangeEvent('hashchange'));
        });
        expect(result.current).toBe('contact');
    });
});
