import {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

export default function ImagePreview({project, onClose, trigger}) {
    const dialogRef = useRef(null);
    const closeRef = useRef(null);
    const [zoomed, setZoomed] = useState(false);

    useEffect(() => {
        const dialog = dialogRef.current;
        const previousOverflow = document.body.style.overflow;
        dialog.showModal();
        closeRef.current?.focus();
        document.body.style.overflow = 'hidden';
        return () => {
            dialog.close();
            document.body.style.overflow = previousOverflow;
            if (trigger?.isConnected) trigger.focus({preventScroll: true});
        };
    }, [trigger]);

    return (
        <dialog
            ref={dialogRef}
            className="lightbox"
            aria-labelledby="lightbox-title"
            aria-modal="true"
            onCancel={(event) => { event.preventDefault(); onClose(); }}
            onClick={(event) => {
                if (event.target !== event.currentTarget) return;
                const bounds = event.currentTarget.getBoundingClientRect();
                if (event.clientX < bounds.left || event.clientX > bounds.right ||
                    event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
            }}
        >
            <div className="lightbox-header">
                <div>
                    <h2 id="lightbox-title">{project.title}</h2>
                    {project.media.caption && <p className="lightbox-caption">{project.media.caption}</p>}
                </div>
                <div className="lightbox-actions">
                    <button className="lightbox-zoom" type="button" aria-pressed={zoomed}
                        onClick={() => setZoomed((current) => !current)}>
                        {zoomed ? 'Fit image' : 'Zoom in'}
                    </button>
                    <button ref={closeRef} className="lightbox-close" type="button"
                        onClick={onClose} aria-label="Close screenshot">
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            </div>
            <div className={`lightbox-image ${zoomed ? 'lightbox-image-zoomed' : ''}`} tabIndex={0} role="region" aria-label="Screenshot viewer">
                <img src={project.media.url} alt={project.media.alt} />
            </div>
        </dialog>
    );
}
