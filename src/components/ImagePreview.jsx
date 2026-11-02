import {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

// Clicks on the dialog element itself (not its children) land outside the content box,
// on the ::backdrop, so they close the preview.
const isBackdropClick = (event) => {
    if (event.target !== event.currentTarget) return false;
    const bounds = event.currentTarget.getBoundingClientRect();
    return (
        event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom
    );
};

export default function ImagePreview({project, onClose, trigger}) {
    const dialogRef = useRef(null);
    const closeRef = useRef(null);
    const [zoomed, setZoomed] = useState(false);

    useEffect(() => {
        const dialog = dialogRef.current;
        const previousOverflow = document.body.style.overflow;
        dialog.showModal();
        closeRef.current.focus();
        document.body.style.overflow = 'hidden';
        return () => {
            dialog.close();
            document.body.style.overflow = previousOverflow;
            if (trigger.isConnected) trigger.focus({preventScroll: true});
        };
    }, [trigger]);

    return (
        <dialog
            ref={dialogRef}
            className="lightbox"
            aria-labelledby="lightbox-title"
            onCancel={(event) => {
                event.preventDefault();
                onClose();
            }}
            onClick={(event) => {
                if (isBackdropClick(event)) onClose();
            }}
        >
            <div className="lightbox-header">
                <div>
                    <h2 id="lightbox-title">{project.title}</h2>
                    {project.screenshot.caption && <p className="lightbox-caption">{project.screenshot.caption}</p>}
                </div>
                <div className="lightbox-actions">
                    <button type="button" className="lightbox-zoom" onClick={() => setZoomed((current) => !current)}>
                        {zoomed ? 'Fit image' : 'Zoom in'}
                    </button>
                    <button
                        ref={closeRef}
                        type="button"
                        className="lightbox-close"
                        onClick={onClose}
                        aria-label="Close screenshot"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            </div>
            <div
                className={`lightbox-image ${zoomed ? 'lightbox-image-zoomed' : ''}`}
                tabIndex={0}
                role="region"
                aria-label="Screenshot viewer"
            >
                <img src={project.screenshot.src} alt={project.screenshot.alt} />
            </div>
        </dialog>
    );
}
