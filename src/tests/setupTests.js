import {vi} from 'vitest';
import '@testing-library/jest-dom';

class IntersectionObserverMock {
    constructor(callback) {
        this.callback = callback;
    }

    observe(element) {
        this.callback?.([{isIntersecting: true, target: element}]);
    }

    unobserve() {}
    disconnect() {}
}

if (!global.IntersectionObserver) {
    global.IntersectionObserver = IntersectionObserverMock;
}

window.scrollTo = vi.fn();
window.open = vi.fn();
HTMLElement.prototype.scrollIntoView = vi.fn();
HTMLMediaElement.prototype.play = vi.fn();
HTMLMediaElement.prototype.pause = vi.fn();
