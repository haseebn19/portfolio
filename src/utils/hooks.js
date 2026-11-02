import {useState, useEffect} from 'react';

// Calls `callback` at most once per frame while the page scrolls. Returns a function that stops listening.
const listenToScroll = (callback) => {
    let ticking = false;
    const handleScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            ticking = false;
            callback();
        });
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
};

// Whether the page has scrolled more than `pixels` down.
export const useScrolledPast = (pixels) => {
    // The page can already be scrolled when it loads, for example after a refresh
    const [isPast, setIsPast] = useState(() => window.scrollY > pixels);

    useEffect(() => listenToScroll(() => setIsPast(window.scrollY > pixels)), [pixels]);

    return isPast;
};

const isInView = (element) => {
    const {top, bottom} = element.getBoundingClientRect();
    return bottom > 0 && top < window.innerHeight;
};

// The id of the section being read: the last one whose top has passed the middle of the window.
// At the bottom of the page the last few sections are all in view, so the one in the URL wins if
// it is visible, which keeps a clicked link highlighted even when the page cannot scroll to it.
export const useActiveSection = (ids) => {
    const [activeId, setActiveId] = useState(ids[0]);

    useEffect(() => {
        const update = () => {
            const sections = ids.map((id) => document.getElementById(id));
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;

            if (atBottom) {
                const linked = sections.find((section) => `#${section.id}` === window.location.hash);
                setActiveId(linked && isInView(linked) ? linked.id : ids.at(-1));
                return;
            }

            const passed = sections.filter((section) => section.getBoundingClientRect().top <= window.innerHeight / 2);
            setActiveId(passed.at(-1)?.id ?? ids[0]);
        };

        update();
        const stopListening = listenToScroll(update);
        window.addEventListener('hashchange', update);
        return () => {
            stopListening();
            window.removeEventListener('hashchange', update);
        };
    }, [ids]);

    return activeId;
};
